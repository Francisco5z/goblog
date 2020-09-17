import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <img src="/goblog.svg" alt="GoBlog"/>
      	
      <h4> Powered by <a href="https://nextjs.org/"> Next.js </a> </h4>

      {/* <div>
        <h3> Créditos </h3>
        <ul>
          <li> <a href="https://www.instagram.com/profapaula/?hl=pt-br"> Prof. Paula </a> </li>
        </ul>
      </div> */}
    </Container>
  )
}