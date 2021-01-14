import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  height: 85px;
  background-color: #000;
`;

export const Search = styled.div`
  height: 150px;
  background-color: #4f9419;
  display: flex;
  align-items: flex-end;

  > div {
    width: 100%;
    padding: 30px;

    > form {
      display: flex;
      justify-content: space-between;
      > select,
      input,
      button {
        height: 48px;
        background-color: #ffffff;
        border-radius: 7px;
        bottom: 0;
        padding: 10px;
        box-sizing: border-box;
        border: none;

        justify-content: space-between;

        font-size: 16px;
      }

      > select {
        width: 300px;
      }

      > input {
        width: 250px;
      }

      > button {
        background-color: #006c18;
        color: #fff;
      }
    }
  }
`;
