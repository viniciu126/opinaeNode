'use strict'

const Comentario = use('App/Models/Comentario')

class ComentarioController {
    async store({request, response, auth}) {
        const { textComentario } = request.all()
        const user = await auth.getUser()

        const comentario = await Comentario.create({
          user_id: user.id,
          publicacao_id: 1,
          comentario: textComentario
        })

        return response.json({
            status: 'success',
            data: comentario
        })
    }
}

module.exports = ComentarioController
