import { Container } from "./styles";

import { AiFillGithub } from 'react-icons/ai';

export default function Header() {
  return (
    <Container>
      <img src="/goblog.svg" alt="GoBlog" />


      <div>
        <button> Ler </button>

        <a href="https://github.com/Francisco5z" target="_blanck">
          <AiFillGithub size={30} />
        </a>
      </div>
    </Container>
  )
};