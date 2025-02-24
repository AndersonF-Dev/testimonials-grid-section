
import React from 'react';
import { Container } from './styles';
import Daniel from '../../components/Depoimentos/Daniel';
import Jonathan from '../../components/Depoimentos/Jonathan';
import Kira from '../../components/Depoimentos/Kira';
import Jeanette from '../../components/Depoimentos/Jeanette';
import Patrick from '../../components/Depoimentos/Patrick';

const Home = () => {
  return (
    <Container>
        <Daniel />
        <Jonathan />
        <Kira />
        <Jeanette />
        <Patrick />
    </Container>
  )
}

export default Home;
