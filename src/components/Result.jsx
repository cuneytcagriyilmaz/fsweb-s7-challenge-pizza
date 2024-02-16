import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  background-color: #CE2829;
  color: #ffffff;
  font-family: "Barlow", sans-serif;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 2rem; 
  line-height: 1.5;
  font-family: "Roboto Condensed", sans-serif;
`;

const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1; 
`;

function Result() {
  return (
    <ResultContainer>
      <Title>Teknolojik Yemekler</Title>
      <CenterDiv>
        <Paragraph>TEBRİKLER!</Paragraph>
        <Paragraph>SİPARİŞİNİZ ALINDI!</Paragraph>
      </CenterDiv>
    </ResultContainer>
  );
}
export default Result;
