'use strict'
const Role = use('Role')
const User = use('App/Models/User')
const Hash = use('Hash')

class UsuarioController {

  async cadastrar({ request, response }) {
    try {
      const { nome, email, ra, password } = request.all()
      await Hash.make(password)

      const user = await User.create({ nome, email, ra, password })
      const userRole = await Role.findBy('slug', 'aluno')

      // Associa o userRole ao usuário
      await user.roles().attach([userRole])

      console.log(user.HasRole, user.roles, user.roles)

      return user.toJSON()
    } catch (e) {
      return e
    }
  }

}

module.exports = UsuarioController
