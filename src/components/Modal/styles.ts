import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 600px;
  height: 300px;

  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #4f9419;

  box-shadow: 0px 0px 10px #000;

  > h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const FormContainer = styled.form`
  width: 90%;
  margin: 0 auto;

  > input {
    height: 48px;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 7px;
    bottom: 0;
    padding: 10px;
    box-sizing: border-box;

    font-size: 16px;
  }

  > input#place {
    width: 90%;
  }

  > input#goal {
    width: 20%;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    box-sizing: border-box;
    > button {
      height: 48px;
      width: 100px;
      color: #ffffff;
      margin: 10px 20px;
      background-color: #006c18;
      border-radius: 7px;
      bottom: 0;
      padding: 10px;
      box-sizing: border-box;

      font-size: 16px;

      &:hover {
        background-color: #4f9419;
        border: 1px solid #000;
      }
    }
  }
`;
