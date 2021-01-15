import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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

  @media (max-width: 768px) {
    height: 320px;
  }

  > div {
    width: 100%;
    padding: 30px;

    @media (max-width: 768px) {
      padding: 10px 30px;
    }
    > form {
      display: flex;
      justify-content: space-between;

      > div {
        height: 70px;

        display: flex;
        flex-direction: column;

        > label {
          margin: 2px;
        }
        > select,
        input {
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
          width: 250px;
        }

        > input#place {
          width: 500px;
        }

        > input#goal {
          width: 250px;
        }
      }
      > button {
        height: 48px;
        width: 150px;
        color: #ffffff;
        margin-top: 20px;
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

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        width: 100%;

        > div {
          height: 75px;
          > select,
          input,
          input#place {
            width: 100%;
          }
        }

        > button {
          width: 100%;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 95%;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
