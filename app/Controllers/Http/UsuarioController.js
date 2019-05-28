'use strict'
const Role = use('Role')
const User = use('App/Models/User')
const Hash = use('Hash')

class UsuarioController {

  async cadastrar({ request, response }) {

    const { nome, email, ra, password } = request.all()
    await Hash.make(password)

    const user = await User.create({ nome, email, ra, password })
    await this.atribuirPermissaoAluno(user)

    const role = await user.getRoles()

    return response.status(200).send({
      Usuario: user,
      Tipo: role
    })

  }

  async atribuirPermissaoAluno(user) {

    const aluno = await Role.findBy('slug', 'aluno')
    await user.roles().attach([aluno.id])

    const roles = await user.getRoles()

    console.log('O', user, 'é um ', roles)

  }

}

module.exports = UsuarioController
