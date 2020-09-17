import Footer from "../components/Footer";
import Header from "../components/Header";

import { Container, MainContent, Title, About } from '../styles/Home';
import resolveClassTitle from "../utils/classTitle";

export default function Home() {
  const currentYear = new Date().getFullYear()

  const currentClass = resolveClassTitle(currentYear); 

  return (
    <Container>
      <Header />
      <MainContent>
        <Title> The blog of <br /> {currentClass} </Title>
        <p className="description"> O GoBlog te dá o maior acervo de pérolas da {currentClass} capturadas nas aulas da queridíssima sora Paula. </p>

        <About className="about">
          <h1 className="about-goblog"> Sobre o GoBlog </h1>
          <p> Criado e mantido por <a href="https://github.com/Francisco5z"> Francisco5g </a> </p>
        </About>
        <Footer />
      </MainContent>
    </Container>  
  )
}
