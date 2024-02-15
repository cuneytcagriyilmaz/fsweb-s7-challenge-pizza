import React from "react";
import styled from "styled-components";

const PizzaInfoContainer = styled.div`


  .pizza-info p {
    font-weight: 10;
    font-family: "Roboto Condensed", sans-serif;
    color: #5F5F5F;
    font-size: small;
  }
`;

const PizzaInfo = () => {
  return (
    <PizzaInfoContainer>
      <div className="pizza-info">
        <h3>Position Absolute Acı Pizza</h3>
        <h2>85.50₺</h2>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir firinda yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </PizzaInfoContainer>
  );
};

export default PizzaInfo;
