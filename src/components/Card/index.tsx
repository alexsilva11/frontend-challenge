import React from 'react';
import { Container, Header, Content } from './styles';

import EditIcon from '../../assets/editar.png';
import DeleteIcon from '../../assets/excluir.png';

import { Place } from '../../App';

interface CardProps {
  place: Place;
  // eslint-disable-next-line no-unused-vars
  onHandleDelete(data: string): void;
  // eslint-disable-next-line no-unused-vars
  onOpenModal(data: string): void;
}

const Card: React.FC<CardProps> = ({ place, onHandleDelete, onOpenModal }) => {
  return (
    <Container>
      <Header>
        <div id="flag">
          <img src={place.flag} alt="bandeira" />
          <span>{place.country}</span>
        </div>
        <div id="options">
          <button onClick={() => onOpenModal(place.id)} type="button">
            <img src={EditIcon} alt="editar" />
          </button>
          <button onClick={() => onHandleDelete(place.id)} type="button">
            <img src={DeleteIcon} alt="excluir" />
          </button>
        </div>
      </Header>
      <Content>
        <span>
          Local:
          {` ${place.place}`}
        </span>
        <span>
          Meta:
          {` ${place.goal}`}
        </span>
      </Content>
    </Container>
  );
};

export default Card;
