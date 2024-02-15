import React, { useState } from "react";
import styled from "styled-components";

const OrderNoteContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
`;

const OrderNote = ({ pizza, handleChange }) => {
  const [nameError, setNameError] = useState("");

  const handleNameChange = (e) => {
    const name = e.target.value;
    if (name.length < 3) {
      setNameError("İsim en az 3 karakter olmalıdır.");
    } else {
      setNameError("");
    }
    handleChange(e);
  };

  return (
    <OrderNoteContainer>
      <h4 htmlFor="name">İsim</h4>
      <Input
        type="text"
        name="name"
        onChange={handleNameChange}
      />
      {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
      <h4 htmlFor="note">Sipariş Notu</h4>
      <TextArea
        name="note"
        id="note"
        value={pizza.note}
        onChange={handleChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      ></TextArea>
    </OrderNoteContainer>
  );
};

export default OrderNote;
