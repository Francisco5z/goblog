import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;

  padding: 30px 170px;

  background-color: #fff;

  z-index: 2;

  img {
    width: 110px;
    
    :hover {
      cursor: pointer;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 170px;
    height: 35px;

    button {
      height: 100%;
      width: 80px;

      text-decoration: none;

      color: #fff;

      font-size: 1.3rem;

      background-color: ${props => props.theme.colors.primary};

      border-radius: 7px;      
      border: 2px solid ${props => props.theme.colors.primary};

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      transition: 250ms;
      :hover {
        background-color: transparent;

        color: ${props => props.theme.colors.primary};
      }
    }

    a {
      color: #000000;
    }
  }

  @media (max-width: 890px) {
    width: 75%;
  }
  @media (max-width: 750px) {
    width: 85%;
  }
  @media (max-width: 450px) {
    img {
      width: 90px;
    }

    div {
      height: 30px;
      width: 130px;

      button {
        font-size: 1rem;
      }
    }
  }
`;
