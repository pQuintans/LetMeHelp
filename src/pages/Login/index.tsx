import React from 'react';

import LoginImage from '../../assets/login-image.svg';
import Logo from '../../assets/logo.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import LoginIcon from '../../assets/login-icon.svg';

import './styles.scss'

export function Login() {
  return(
    <div id="login-page">
      <div className="first-segment">
        <div className="text">
          <h1>Sua plataforma de cuidados à saude mental.</h1>
          <h4>Conecte-se com profissionais e cuide de si mesmo.</h4>
        </div>
        <img src={LoginImage} alt="Desenho de uma psicóloga fazendo um atendimento" />
      </div>
      <div className="last-segment">        
        <div className="login-area">
          <img src={Logo} alt="Logo da LetMeHelp" className="logo-image" />
          <button className="login-google">
            <img src={GoogleIcon} alt="Logo do Google" />
            Entre com o Google
          </button>
          <p className="separator">ou entre com o seu email</p>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <div className="form-footer">
              <p>Primeira vez aqui? <br /> Crie uma conta de graça</p>
              <button>
                <img src={LoginIcon} alt="login" />
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}