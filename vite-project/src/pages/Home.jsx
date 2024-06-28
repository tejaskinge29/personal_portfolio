import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
// import '@fontsource/great-vibes';

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo>Tejas Kinge</Logo>
        <Icons>
          <a href="mailto:tejaskinge29@gmail.com"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/tejaskinge" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </Icons>
      </Header>
      <Content>
        <h1>Hi, I'm <Highlight color="transparent">Tejas Kinge</Highlight> <SpeechBubble>💬</SpeechBubble></h1>
        <p>
          I design <AnimatedHighlight color="#d2f8ff">Elegant</AnimatedHighlight> and <AnimatedHighlight color="#ffd2d2">Intuitive</AnimatedHighlight> solutions to make 
        </p>
        <p>complex problems simple.</p>
        <SubText>Currently in my 4th year <a href='https://ycce.edu/' target='_blank'>@YCCE</a> studying <i>Information Technology</i> 🎓</SubText>
      </Content>
    </Container>
  );
};

const fillBackground = keyframes`
  from {
    background-size: 0 100%;
  }
  to {
    background-size: 100% 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  font-family: 'Arial, sans-serif';
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 10px 20px;
`;

const Logo = styled.div`
  font-family: 'Dancing Script', cursive; 
  font-size: 1.5em;
  font-weight: bold;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  
  a {
    color: black;
    font-size: 1.2em;
    transition: color 0.3s;

    &:hover {
      color: gray;
    }
  }
`;

const Content = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 50px;

  h1 {
    font-size: 2.5em;
    font-family: 'Nunito', cursive; 
  }

  p {
    font-family: 'Nunito', cursive;
    font-size: 2.0em;
    margin: 0; /* Remove default margin */
  }
`;

const Highlight = styled.span`
  background-color: ${props => props.color || 'transparent'};
  padding: 0 5px;
  // color: black; /* Set the text color to black */
`;

const AnimatedHighlight = styled(Highlight)`
  background: linear-gradient(to right, ${props => props.color} 60%, transparent 100%);
  background-size: 0 100%;
  background-position: 0 0;
  display: inline-block;
  animation: ${fillBackground} 1s forwards;
  animation-delay: 2s;
`;

const SpeechBubble = styled.span`
  display: inline-block;
  transform: translateY(-5px);
`;

const SubText = styled.div`
  margin-top: 5%;
  font-family: 'Nunito', cursive;  
  font-size: 1.0em;
  color: gray;

  a {
    color: inherit; 
    text-decoration: none; 
    cursor: pointer; 
    display: inline-block; 
  }
`;

export default Home;
