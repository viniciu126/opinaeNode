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

  Route.resource('publicacao', 'PublicacaoController')
      .only(['store'])

  Route.resource('comentario', 'ComentarioController')
      .only(['store'])

  Route.post('login', 'LoginController.login')

  Route.post('logout', 'LoginController.logout')

}).prefix('api')
