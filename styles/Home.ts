import styled from 'styled-components';

export const Container = styled.div`

`;

export const PageTitle = styled.h1`
  margin: 50px 0 25px 0;

  font-size: 8rem;

  text-align: center;

  letter-spacing: -5px;
  line-height: 1;

  @media (max-width: 765px) {
    font-size: 6rem;
  }
  @media (max-width: 580px) {
    font-size: 5rem;
  }
  @media (max-width: 490px) {
    font-size: 4.5rem;

    margin-top: 40px;
  }
  @media (max-width: 445px) {
    font-size: 3.6rem;

    margin-top: 30px;
  }
  @media (max-width: 400px) {
    font-size: 3rem;

    margin-top: 20px;
  }
  @media (max-width: 320px) {
    font-size: 2.5rem;

    margin-top: 15px;
  }
`;

export const PageDescription = styled.p`
  text-align: center;

  margin: 0 15px;

  font-size: 1.1rem;

  @media (max-width: 765px) {
    font-size: 0.9rem;
  }

  @media (max-width: 490px) {
    font-size: 0.8rem;
  }
  @media (max-width: 445px) {
    font-size: 0.6rem;
  }
  @media (max-width: 320px) {
    font-size: 0.5rem;

    margin: 0 30px;
  }
`;