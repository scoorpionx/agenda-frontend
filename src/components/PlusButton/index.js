import React from 'react';
import { useHistory } from 'react-router-dom';
import { Div } from './styles.js';
import { FaPlus } from 'react-icons/fa';
import { Fab } from '@material-ui/core';
import { Container } from 'react-floating-action-button';

function PlusButton() {
  const history = useHistory();
  return(
    <Div>
      <Container className="Container">
        <Fab 
          className="btn"
          tooltip="Adicione um contato"
          onClick={() => {
            history.push('/novo')
          }}
        >
          <FaPlus className="plus-icon"/>
        </Fab>
      </Container>
    </Div>
  )
};

export default PlusButton;
