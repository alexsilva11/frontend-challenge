import React, { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { v4 as uuid } from 'uuid';

import GlobalStyle from './styles/global';
import logoImg from './assets/logo.png';

import { Container, Content, Header, Search } from './styles';

import Card from './components/Card';
import Modal from './components/Modal';

import { usePlaces } from './hooks/placesContext';

interface Countries {
  name: string;
  translations: {
    pt: string;
  };
  flag: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Countries[]>([]);
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [goal, setGoal] = useState('');
  const [modal, setModal] = useState(false);
  const [identifier, setIdentifier] = useState('');

  const { addPlace, deletePlace, places } = usePlaces();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });
  }, []);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (country === '' || place === '' || goal === '') {
      alert('Voce deve preencher todos os campos');
    } else {
      const id = uuid();

      let flag = '';
      setGoal('s');
      items.map(item => {
        if (item.translations.pt === country) {
          flag = item.flag;
        }
        return flag;
      });

      addPlace({
        id,
        country,
        flag,
        place,
        goal,
      });

      alert('Lugar adicionado com sucesso!');

      setCountry('');
      setPlace('');
    }
  };

  const onOpenModal = (id: string) => {
    setModal(true);

    setIdentifier(id);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <Container className="App">
        <Header>
          <img src={logoImg} alt="logo" style={{ paddingLeft: '53px' }} />
        </Header>
        <Search>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="country">País</label>
                <select
                  id="country"
                  value={country}
                  onChange={evt => {
                    setCountry(evt.target.value);
                  }}
                  placeholder="Selecione"
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {items.map(item => {
                    return (
                      <option key={item.name} value={item.translations.pt}>
                        {item.translations.pt}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="place">Local</label>
                <input
                  id="place"
                  value={place}
                  onChange={evt => setPlace(evt.target.value)}
                  placeholder="Digite o local que deseja conhecer"
                  type="text"
                  name="place"
                />
              </div>
              <div>
                <label>Meta</label>
                <InputMask
                  mask="99/9999"
                  placeholder="mês/ano"
                  value={goal}
                  onChange={evt => setGoal(evt.target.value)}
                />
              </div>
              <button type="submit">Adicionar</button>
            </form>
          </div>
        </Search>
        <Content>
          {places.map(p => {
            return (
              <Card
                key={p.id}
                place={p}
                onHandleDelete={id => deletePlace(id)}
                onOpenModal={id => onOpenModal(id)}
              />
            );
          })}
        </Content>
      </Container>
      {modal && (
        <Modal onCloseModal={() => onCloseModal()} identifier={identifier} />
      )}
      <GlobalStyle />
    </>
  );
};
export default App;
