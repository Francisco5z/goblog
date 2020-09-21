import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from "./styles";

import { AiFillGithub } from 'react-icons/ai';

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <div className="header-content">
        <Link href="/">
          <img src="/goblog.svg" alt="GoBlog" />
        </Link>


        <div>
          <button onClick={() => router.push('/posts')}> Ler </button> 

          <a href="https://github.com/Francisco5z/goblog" target="_blanck">
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
    </Container>
  )
};