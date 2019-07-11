'use strict'

const Publicacao = use('App/Models/Publicacao')

class PublicacaoController {
  async index () {
    return Publicacao.query()
        .with('comentarios')
        .fetch()
  }

  async store ({ request, response, auth }) {
      const { textoPublicacao } = request.all()
      const user = await auth.getUser()

      const publicacao = await Publicacao.create({
        user_id: user.id,
        publicacao: textoPublicacao
      })

      return response.json({
        status: 'sucess',
        data: publicacao
      })
  }

  async show ({ params }) {
    return Publicacao.query()
      .where('id', params.id)
      .with('comentarios')
      .fetch()
  }
}

module.exports = PublicacaoController
