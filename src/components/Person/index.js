import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import api from '../../services/api';

function Person(props) {
  const history = useHistory();
  const phones = props.person.phones;

  async function handleDelete() {
    let TOKEN = sessionStorage.getItem('token');
    if (window.confirm(`Você realmente quer excluir o contato ${props.person.name}?`)) { 
      await api.delete(`admin/people/${props.person.id}`, {
        headers: { 
            Authorization: 'Bearer ' + TOKEN
        }
      }).then(res => {
        alert(`${props.person.name} deletado com sucesso!`)
        history.push('/');
        history.push('/pagina-inicial');
      })
      .catch(err => {
          console.log(err)
          if(err.response.status === 400) {
              alert('Não foi possível excluir esse contato no momento!')
          } else if(err.response.status === 401) {
              alert('Não foi possível realizar a autenticação. Verifique seus dados e tente novamente.')
          } else {
              alert('Erro de comunicação com o servidor.')
          }
      })
    }
  }

  function handleEdit() {
    history.push({
      pathname: '/editar',
      state: {person: props.person}
    });
  }
  return (
    <Container>
      <div className="content">
        <div className="icons">
          <FaTrashAlt 
            className="trash"
            onClick={handleDelete}
          />
          <FaEdit 
            className="edit"
            onClick={handleEdit}
          />
        </div>
        <div className="name">
          <span>Nome: <span>{props.person.name}</span></span>
        </div>
        <span>Apelido: <span>{props.person.nickname}</span></span>
        <span>Email: <span>{props.person.email}</span></span>
        {phones ? 
          phones.map(phone => (
            <>
              <span>Número de telefone: <span>{phone.number}</span></span>
              <span>Tipo de telefone: <span>{phone.type}</span></span>
            </>
          ))
          :
          <></>
        }
      </div>
    </Container>
  );
}

export default Person;
