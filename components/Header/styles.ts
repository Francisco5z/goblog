import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 65%;

  margin: 0 auto;

  padding: 30px 0;

  background-color: #fff;

  z-index: 2;

  img {
    width: 110px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 170px;

    button {
      height: 100%;
      width: 80px;

      color: #fff;

      background-color: ${props => props.theme.colors.primary};
      
      border: 2px solid ${props => props.theme.colors.primary};

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
