'use strict'
const Role = use('Role')
const User = use('App/Models/User')
const Hash = use('Hash')

class UsuarioController {

  async cadastrar({ request, response }) {
    const { nome, email, ra, password, tipo } = request.all()

    //Encriptografando senha
    await Hash.make(password)

    let user = await User.create({ nome, email, ra, password })
    await this.atribuirTipo(tipo, user)

    const role = await user.getRoles()
    user.tipo = role

    return response.status(200).send({
      user
    })

  }

  async atribuirTipo(tipo, user) {
    switch (tipo) {
      case 'admin':
        const admin = await Role.findBy('slug', 'admin')

        await user.roles().attach([admin.id])
        break;
      case 'professor':
        const professor = await Role.findBy('slug', 'professor')

        await user.roles().attach([professor.id])
        break;
      case 'aluno':
        const aluno = await Role.findBy('slug', 'aluno')

        await user.roles().attach([aluno.id])
        break;
      default:
        console.log('Por favor, digite um tipo para o usuário!')
    }
  }
}

module.exports = UsuarioController
