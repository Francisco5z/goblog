import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  margin-top: 120px;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  flex-direction: column;

  .all-posts {
    padding: 0 300px;
  }
`;

export const PostsGrid = styled.div`
  display: flex;

  width: 100%;

  div {
    width: 450px;

    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    
    border-radius: 7px;

    padding: 20px;

    h3 {

    }
    p {
      color: ${props => props.theme.colors.description};
    }
    
    transition: 250ms;

    :hover {
    }
  }
`;