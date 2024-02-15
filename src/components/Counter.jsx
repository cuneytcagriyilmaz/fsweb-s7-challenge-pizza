import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  background-color: #fdc913;
  color: black;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const StyledCounterContainer = styled.div`
  display: flex;
`;

const Counter = ({ onChange }) => {
  const [counter, setCounter] = useState(1);

  const handleCounterChange = (amount) => {
    const newCounterValue = counter + amount;
    setCounter(newCounterValue);
    onChange(newCounterValue);
  };

  return (
    <StyledCounterContainer>
      <StyledButton type="button" onClick={() => handleCounterChange(-1)}>-</StyledButton>
      <p>{counter}</p>
      <StyledButton type="button" onClick={() => handleCounterChange(1)}>+</StyledButton>
    </StyledCounterContainer>
  );
};

export default Counter;
