'use strict'
const Publicacao = use('App/Models/Publicacao')
const Comentario = use('App/Models/Comentario')
const Database = use('Database')

class PublicacaoController {
    async postar({ request, response, auth }) {
        const { textoPublicacao } = request.all()

        const user = await auth.getUser()

        const publicacao = {
            user_id: user.id,
            publicacao: textoPublicacao
        }

        try {
            return await Publicacao.create(publicacao)
        } catch (e) {
            return response.e
        }
    }

    async comentar({ request, response, auth }) {
        const { textoComentario } = request.all()
        const user = await auth.getUser()
        const publicacaoId = 2

        const comentario = {
            user_id: user.id,
            publicacao_id: publicacaoId,
            comentario: textoComentario
        }

        try {
            const publicacao = await Comentario.create(comentario)

            return response.json({
                status: 'success',
                data: publicacao
            })
        } catch (e) {
            return response.e
        }

    }

    async listarPublicacoes() {
        return await Publicacao.query()
            .with('comentarios')
            .fetch()
    }
}

module.exports = PublicacaoController
