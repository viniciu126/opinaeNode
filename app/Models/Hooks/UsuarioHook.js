'use strict'

const UsuarioHook = exports = module.exports = {}
const Hash = use('Hash')
const User = use('App/Models/User')
const Role = use('Role')

UsuarioHook.hashPassword = async (user) => {
  if (user.dirty.password) {
    user.password = await Hash.make(user.password)
  }
}

UsuarioHook.atribuirTipo = async (user) => {
  switch (User.tipo) {
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
