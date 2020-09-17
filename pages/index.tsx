import Header from "../components/Header";

import { Container, PageTitle, PageDescription } from '../styles/Home';

export default function Home() {
  return (
    <Container>
      <Header />
      <PageTitle> The Blog of <br /> AF8A </PageTitle>
      <PageDescription> O GoBlog te dá o maior acervo de pérolas da AF8A capturadas nas aulas da queridíssima sora Paula. </PageDescription>
    </Container>  
  )
}
