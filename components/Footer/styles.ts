import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: left;

  margin-top: 100px;
  padding: 0 170px;

  border-top: 1px solid rgb(234, 234, 234);

  background-color: ${props => props.theme.colors.footer};

  div {
    ul {
      margin-top: 10px;

      padding: 0 5px;

      list-style: none;

      font-size: 0.9rem;
    }
  }

  @media (max-width: 940px) {
    padding: 0 100px;
  }
  @media (max-width: 500px) {
    padding: 0 50px;
  }
  @media (max-width: 320px) {
    padding: 0 20px;
  }
`;
