import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import styled from '@emotion/styled';
import data from './data';
import { useState, useRef, useEffect, useCallback } from 'react';
import Nav from './components/Nav';

const Container = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  margin: auto;
  width: clamp(200px, 90vw, 500px);
  height: clamp(300px, 90vw, 800px);
  position: relative;
`

function App() {
  const controls = useAnimation()
  const [imagesRemoved, setImagesRemoved] = useState(0)
  const [background, setBackground] = useState('gray')
  const bgColor = useMotionValue('rgba(255,255,255,1)')

  useEffect(() => {
    animate(bgColor, background, {
        duration: 0.8
    })
  }, [background])

  return (
    <Container style={{ background: bgColor }}>
      <Nav setBackground={setBackground}/>
    </Container>
  );
}

export default App;