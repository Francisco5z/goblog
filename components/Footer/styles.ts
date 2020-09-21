import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: left;

  margin-top: 100px;

  border-top: 1px solid rgb(234, 234, 234);

  background-color: ${props => props.theme.colors.footer};

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 700px;

    width: 100%;
  }

  @media (max-width: 780px) {
    padding: 0 50px;
  }
  @media (max-width: 430px) {
    padding: 0 20px;
  }
  @media (max-width: 320px) {
    .footer-content {
      img {
        width: 110px;
      }

      h1 {
        font-size: 0.8rem;
      }
    }
  }
`;
