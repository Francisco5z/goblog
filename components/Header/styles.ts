import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 110px;

  background-color: #fff;

  z-index: 2;
  position: fixed;
  top: 0px;

  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 1000px;
    min-width: 250px;

    padding: 0 20px;

    width: 100%;

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

    max-width: 170px;
    min-width: 130px;
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
  }

  @media (max-width: 710px) {
    .header-content {
      padding: 0 40px;
    }
  }
  @media (max-width: 320px) {
    .header-content {
      padding: 0 15px;
    }
  }
`;
