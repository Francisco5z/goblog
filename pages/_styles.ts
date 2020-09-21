import styled from 'styled-components';

export const Container = styled.div``;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;

  height: calc(100% + 30px);

  padding-top: 140px;

  text-align: center;

  .description {
    text-align: center;

    margin: 0 15px;

    font-size: 1.1rem;

    @media (max-width: 715px) {
      font-size: 0.9rem;
    }
  }
`;

export const Title = styled.h1`
  margin: 0 0 25px 0;

  font-size: max(8rem, 2rem);

  text-align: center;

  letter-spacing: -5px;
  line-height: 1;

  @media (max-width: 715px) {
    font-size: 6rem;
  }
  @media (max-width: 610px) {
    font-size: 4rem;
  }
  @media (max-width: 350px) {
    font-size: 3rem;
  }
`;

export const About = styled.div`
  margin-top: 200px;

  padding: 0 7px;

  p {
    margin-top: 15px;

    a {
      color: ${props => props.theme.colors.unHoveredText};

      transition: 500ms;
      :hover {
        color: ${props => props.theme.colors.text};
      }
    }
  }

  @media (max-width: 715px) {
    margin-top: 150px;
  }
`;