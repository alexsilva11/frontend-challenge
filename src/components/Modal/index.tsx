import React, { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';

import { Container, FormContainer, ModalBody } from './styles';

import { usePlaces } from '../../hooks/placesContext';

interface ModalProps {
  onCloseModal(): void;
  // eslint-disable-next-line no-unused-vars
  identifier: string;
}

const Modal: React.FC<ModalProps> = ({ onCloseModal, identifier }) => {
  const [place, setPlace] = useState('');
  const [goal, setGoal] = useState('');

  const { editPlace } = usePlaces();

  const onHandleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const id = identifier;

    const newPlace = place;

    const newGoal = goal;

    editPlace(id, newPlace, newGoal);
  };
  return (
    <Container>
      <ModalBody>
        <h1>Editar Lugar</h1>
        <FormContainer onSubmit={onHandleSubmit}>
          <input
            value={place}
            onChange={evt => setPlace(evt.target.value)}
            id="place"
            name="place"
            type="text"
            placeholder="Lugar"
          />
          <InputMask
            id="goal"
            name="goal"
            mask="99/9999"
            placeholder="mês/ano"
            value={goal}
            onChange={evt => setGoal(evt.target.value)}
          />
          <div>
            <button onClick={() => onCloseModal()} type="button">
              Cancelar
            </button>
            <button type="submit">Editar</button>
          </div>
        </FormContainer>
      </ModalBody>
    </Container>
  );
};
export default Modal;
