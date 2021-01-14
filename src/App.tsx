import React from 'react';

import GlobalStyle from './styles/global';
import logoImg from './assets/logo.png';

import { Container, Header, Search } from './styles';

import Card from './components/Card';

const App: React.FC = () => {
  return (
    <>
      <Container className="App">
        <Header>
          <img src={logoImg} alt="logo" style={{ paddingLeft: '53px' }} />
        </Header>
        <Search>
          <div>
            <form>
              <select>
                <option>Brasil</option>
                <option>Brasil</option>
                <option>Brasil</option>
                <option>Brasil</option>
              </select>
              <input type="text" name="" id="" />
              <input type="month" name="" id="" />
              <button type="submit">Pesquisar</button>
            </form>
          </div>
        </Search>
        <Card />
      </Container>
      <GlobalStyle />
    </>
  );
};
export default App;
