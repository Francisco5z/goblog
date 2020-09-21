import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div className="footer-content">
        <img src="/goblog.svg" alt="GoBlog"/>
      	
        <h4> Powered by <a target="_blanck" href="https://nextjs.org/"> Next.js </a> </h4>
      </div>
    </Container>
  )
}