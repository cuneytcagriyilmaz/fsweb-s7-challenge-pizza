import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: #ce2829;
  padding: 5px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Nav = styled.nav`
  text-align: center;
  margin-right: 200px;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: none;
      color: white;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 10px;

  &:hover {
    color: #d3d3d3;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <h1>Teknolojik Yemekler</h1>
      <Nav>
        <HeaderLink to="/">Anasayfa</HeaderLink>
        <span>- </span>
        <HeaderLink to="/order">Sipariş Oluştur</HeaderLink>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
