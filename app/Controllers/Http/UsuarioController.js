'use strict'
const Role = use('Role')
const User = use('App/Models/User')
const Hash = use('Hash')

class UsuarioController {
  async store ({ request, response }) {
    const { nome, email, ra, password, tipo } = request.all()

    //Encriptografando senha
    await Hash.make(password)

    await User.setTipo(tipo)

    let user = await User.create({ nome, email, ra, password })

    const role = await user.getRoles()
    user.tipo = role

    return response.json({
      status: 'success',
      data: user
    })

  }
}

module.exports = UsuarioController
