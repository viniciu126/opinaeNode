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

  async trocaSenha ({request, auth, response}){
    const usuario = await auth.getUser();

    const verificarSenha = await Hash.verify(
      request.input('password'),
      usuario.password
    );

    if(!verificarSenha){
      return response.status(400).json({
        status: 'erro',
        message: 'Não foi possivel alterar a senha'
      })
    };

    usuario.password = await Hash.make(request.input('newPassword'));
    
    await usuario.save();

    return response.json({
      status:'sucesso',
      message: 'Senha alterada com sucesso'
    });

  };
}

module.exports = UsuarioController
