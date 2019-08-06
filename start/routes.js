'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  //falta validator
  Route.resource('usuario', 'UsuarioController')
      .only(['store'])
      .validator(new Map([
        ['usuario.store','storeUsuario']
      ]))

  Route.resource('publicacao', 'PublicacaoController')
      .only(['index', 'store', 'show'])

  Route.resource('comentario', 'ComentarioController')
      .only(['store'])

  Route.post('login', 'LoginController.login').validator('Login')

  Route.post('logout', 'LoginController.logout')

}).prefix('api')
