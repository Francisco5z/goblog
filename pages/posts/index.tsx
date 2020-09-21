import { Container, PostsGrid } from "../../styles/Posts";

import ReactMarkDown from 'react-markdown';

import Header from "../../components/Header";
import Footer from '../../components/Footer';

import { useEffect, useState } from "react";

interface Data {
  title: string;
  author: string;
}

export default function Posts() {
  const [data, setData] = useState<Data[]>([]);

  
  useEffect(() => {
    async function handleRequestPosts() {
      const response = await fetch("/api/posts");
      const responseJson = await response.json();
      
      setData(responseJson);
    }
    
    handleRequestPosts();
  }, []);

  
  return (
    <Container>
      <Header />

      <div className="all-posts">
        <h2> Todos os posts </h2>
      </div>

      <PostsGrid>
        {data?.map(i => (
          <div key={Math.random()}>
            <h3> {i.title} </h3>



            <p> Escrito por {i.author} </p>
          </div>
        ))}
      </PostsGrid>

      <Footer />
    </Container>
  )
}