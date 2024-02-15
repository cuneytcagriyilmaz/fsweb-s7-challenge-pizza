import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media screen and (max-width: 768px) {
    height: 100%; 
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const H2 = styled.h2`
  font-family: "Barlow", sans-serif;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const H1 = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #fdc913;
  color: black;
  border: none;
  cursor: pointer;
`;

const Home = () => {
  return (
    <ContainerHome>
      <img src='../Assets/mile1-assets/home-banner.png'/>
      <ContentContainer>
        <H2>Teknolojik Yemekler</H2>
        <H1>KOD ACIKTIRIR</H1>
        <H1>PİZZA, DOYURUR</H1>
        <Link to="/order">
          <Button>ACIKTIM</Button>
        </Link>
      </ContentContainer>
    </ContainerHome>
  );
};

export default Home;
