import React, { useEffect, useState } from 'react';
import Person from '../../components/Person/index';
import PlusButton from '../../components/PlusButton/index';
import { Container } from './styles';
import api from '../../services/api';

function Main() {
  const [people, setPeople] = useState([]);
  const TOKEN = sessionStorage.getItem('token')
  useEffect(() => {
    api.get('admin/people', {
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + TOKEN
      },
    }).then(response => {
      setPeople(response.data.data)
    })
  }, [])

  return (
    <Container>
      <PlusButton />
      {people.map(person => (
        <Person person={person}/>
      ))}
    </Container>
  );
}

export default Main;
