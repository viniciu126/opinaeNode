'use strict'

const Comentario = ('App/Models/Comentario')

class ComentarioController {
    async store({request, response, auth}) {
        const {comentario} = request.all()
        const user = await auth.getUser()
        const publicacaoId = 2

        const comentario = {
            user_id: user.id,
            publicacao_id: publicacaoId,
            comentario: comentario
        }

        const publicacao = await Comentario.create(comentario)

        return response.json({
            status: 'success',
            data: publicacao
        })
    }
}

module.exports = ComentarioController
