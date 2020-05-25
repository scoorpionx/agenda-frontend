import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

function NewContact(props) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');

    const history = useHistory();

    async function handleSubmit() {
        let data = { name, nickname, email }
        const TOKEN = sessionStorage.getItem('token')
        console.log(data)
        await api.post('admin/people', data, {
            headers: { 
                Authorization: 'Bearer ' + TOKEN,
                'Content-Type': 'application/json'
            }
        }).then(async res => {
            console.log(res);
            const id = res.data.id;
            let data = {
                person_id: id,
                number: phone,
                type
            }
            await api.post('admin/phones', data, {
                headers: { 
                  Authorization: 'Bearer ' + TOKEN,
                  'Content-Type': 'application/json'
                }
            }).then(res => {
                history.push('/pagina-inicial')
            })
        }).catch(err => {
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
    
    function handleCancel() {
        history.push('/pagina-inicial')
    }

    return (
      <Container>
          <div className="content">
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
                            name="nickname" 
                            className="apelido" 
                            type="text" 
                            placeholder="Apelido"
                            value={nickname}
                            onChange={e => setNickname(e.target.value)}
                        />
                        <input
                            name="phone" 
                            className="telefone" 
                            type="text" 
                            placeholder="Telefone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <input
                            name="type" 
                            className="tipo" 
                            type="text" 
                            placeholder="Tipo de Telefone"
                            value={type}
                            onChange={e => setType(e.target.value)}
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
    );
}

export default NewContact;
