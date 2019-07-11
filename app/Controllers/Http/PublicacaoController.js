'use strict'
const Publicacao = use('App/Models/Publicacao')
const Comentario = use('App/Models/Comentario')
const Database = use('Database')

class PublicacaoController {
  async store ({ request, auth }) {
      const { textoPublicacao } = request.all()

      const user = await auth.getUser()

      const publicacao = {
          user_id: user.id,
          publicacao: textoPublicacao
      }

      return Publicacao.create(publicacao)
  }

  async show () {
      return Publicacao.query()
          .with('comentarios')
          .fetch()
  }
}

module.exports = PublicacaoController
