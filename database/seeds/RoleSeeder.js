'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')

class RoleSeeder {
  async run () {
    const admin = new Role()
    admin.name = 'Admin'
    admin.slug = 'admin'
    admin.description = 'Administrador do Sistema'

    await admin.save()

    const professor = new Role()
    professor.name = 'Professor'
    professor.slug = 'professor'
    professor.description = 'Professor da Universidade'

    await professor.save()

    const aluno = new Role()
    aluno.name = 'Aluno'
    aluno.slug = 'aluno'
    aluno.description = 'Aluno da Universidade'

    await aluno.save()
  }
}

module.exports = RoleSeeder
