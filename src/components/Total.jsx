import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .counter-div {
    flex-grow: 1;
  }
`;

const OrderDetails = styled.div`
  border: 1px solid #5F5F5F;
  padding: 10px;
  
`;

const OrderButton = styled.button`
  background-color: #fdc913;
  padding: 10px 20px;
  border-radius: 28px;
  margin-top: 20px;
  cursor: ${(props) => {
    if (props.disabled) {
      return "not-allowed";
    } else {
      return "pointer";
    }
  }};
  
`;

const Total = ({ total, totalMaterials, handleSubmit, isButtonDisabled }) => {
  const [counterValue, setCounterValue] = useState(1);

  const handleCounterChange = (value) => {
    setCounterValue(value);
  };

  return (
    <TotalContainer>
      <div className="counter-div">
        <Counter onChange={handleCounterChange} />
      </div>

      <OrderDetails>
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler: {totalMaterials * counterValue} TL</p>
        <p>Toplam: {total * counterValue} TL</p>
        <OrderButton className="order-button" type="submit" disabled={isButtonDisabled()} onClick={handleSubmit}>
          Siparişi Tamamla
        </OrderButton>
      </OrderDetails>
    </TotalContainer>
  );
};

export default Total;
