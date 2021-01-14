import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  margin: 30px;
  box-shadow: 0px 5px 5px #ababab;
`;

export const Header = styled.div`
  height: 40%;

  display: flex;
  justify-content: center;

  > div {
    width: 46%;
    height: 100%;
    border-bottom: 2px solid #ababab;
  }

  > div#flag {
    display: flex;
    flex-direction: column;
    padding: 10px;

    > img {
      width: 56px;
    }

    > span {
      color: #4f9419;
      text-transform: uppercase;
      font-weight: 700;

      margin-top: 20px;
    }
  }

  > div#options {
    display: flex;
    justify-content: flex-end;

    > button {
      width: 24px;
      height: 24px;
      border: none;
      background-color: #fff;
      margin: 10px;
      box-sizing: border-box;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    width: 80%;
    margin: 10px 0;
  }
`;
