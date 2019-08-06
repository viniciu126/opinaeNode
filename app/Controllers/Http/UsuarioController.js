'use strict'
const Role = use('Role')
const User = use('App/Models/User')
const Hash = use('Hash')

class UsuarioController {
  async store ({ request, response }) {
    const data = request.only(['nome', 'email', 'ra', 'password'])
    
    //Encriptografando senha
    await Hash.make(data.password)

    await User.setTipo(request.input('tipo'))

    let user = await User.create(data)

    const role = await user.getRoles()
    user.tipo = role

    return response.json({
      status: 'success',
      data: user
    })

  }
}

module.exports = UsuarioController
