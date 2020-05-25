import React, { useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';

function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = { email, password };

    function handleSignIn() {
        history.push('/signin');
    }
    async function handleSubmit() {
        await api.post('auth/login', data).then(res => {
            sessionStorage.setItem('token', res.data.token)
            history.push('/pagina-inicial');
        })
        .catch(err => {
            console.log(err)
            if(err.response.status === 400) {
                alert('Todos os campos são obrigatórios')
            } else if(err.response.status === 401) {
                alert('Não foi possível realizar a autenticação. Verifique seus dados e tente novamente.')
            } else {
                alert('Erro de comunicação com o servidor.')
            }
        })
    }
  return (
    <div className="Login">
        <Container>
            <div className="content">
                <h1>Login</h1>
                <div className="div-form">
                    <div
                        className="gform"
                    >
                        <input
                            name="email" 
                            className="email" 
                            type="email" 
                            placeholder="E-mail" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            name="password" 
                            className="senha" 
                            type="password" 
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="div-btns">
                            <button 
                                className="confirm"
                                onClick={handleSubmit}
                            >Confirmar</button>
                            <button 
                                className="signin"
                                onClick={handleSignIn}
                            >Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Login;
