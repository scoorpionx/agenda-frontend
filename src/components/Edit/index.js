import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, PhoneContainer } from './styles';
import api from '../../services/api';

function EditContact(props) {
    const data = props.location.state.person;
    const [name, setName] = useState(data.name);
    const [nickname, setNickname] = useState(data.nickname);
    const [email, setEmail] = useState(data.email);
    const [phones, setPhones] = useState(data.phones);
    const [number, setNumber] = useState(data.phones.number);
    const [type, setType] = useState(data.phones.type);

    var num = [];
    var ty = [];

    const history = useHistory();

    async function handleSubmit() {
        let data = { name, nickname, email }
        const TOKEN = sessionStorage.getItem('token')
        await api.patch('admin/people', data, {
            headers: { 
                Authorization: 'Bearer ' + TOKEN,
                'Content-Type': 'application/json'
            }
        }).then(async res => {
            phones.map(async phone => {
                let { id_phone, num, ty } = phone;
                let data = { num, ty };
                await api.patch(`admin/phones/${id_phone}`, data, {
                    headers: { 
                      Authorization: 'Bearer ' + TOKEN,
                      'Content-Type': 'application/json'
                    }
                })
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
                        {phones ? 
                            phones.map((phone, index) => {
                                setNumber(phones.number);
                                return (
                                <PhoneContainer>
                                    <input
                                        name="phone" 
                                        className="telefone" 
                                        type="text" 
                                        placeholder="Telefone"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                    />
                                    <input
                                        name="type" 
                                        className="tipo" 
                                        type="text" 
                                        placeholder="Tipo de Telefone"
                                        value={ty[index]}
                                        onChange={e => ty[index] = e.target.value}
                                    />
                                </PhoneContainer>
                            )})
                            :
                            <></>
                        }
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

export default EditContact;
