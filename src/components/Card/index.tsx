import React from 'react';
import { Container, Header, Content } from './styles';

import EditIcon from '../../assets/editar.png';
import DeleteIcon from '../../assets/excluir.png';
import Flag from '../../assets/br.png';

const Card: React.FC = () => {
  return (
    <Container>
      <Header>
        <div id="flag">
          <img src={Flag} alt="bandeira" />
          <span>Brasil</span>
        </div>
        <div id="options">
          <button type="button">
            <img src={EditIcon} alt="editar" />
          </button>
          <button type="button">
            <img src={DeleteIcon} alt="excluir" />
          </button>
        </div>
      </Header>
      <Content>
        <span>Local: Balneário Camboriu</span>
        <span>Meta: 04/2022</span>
      </Content>
    </Container>
  );
};

export default Card;
