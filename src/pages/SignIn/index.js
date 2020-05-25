import React, { useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';

function SignIn({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const data = { name, email, password };
    
    function handleCancel() {
        history.push('/');
    }

    async function handleSubmit() {
        await api.post('auth/register', data).then(res => {
            alert(`${name} cadastrado com sucesso`)
            history.push('/');
        })
        .catch(err => {
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
    <div className="SignIn">
        <Container>
            <div className="content">
                <h1>Cadastro</h1>
                <div className="div-form">
                    <div
                        className="gform"
                    >
                        <input 
                            name="name" 
                            className="nome" 
                            type="text" 
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
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
                                className="cancel"
                                onClick={handleCancel}
                            >Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default SignIn;
