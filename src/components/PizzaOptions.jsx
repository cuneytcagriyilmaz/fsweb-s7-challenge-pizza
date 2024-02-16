import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const PizzaOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .hamur-secim {
    width: 30%;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;

const PizzaOptions = ({ pizza, handleChange }) => {
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (pizza.size && pizza.doughThickness) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, [pizza]);

  return (
    <PizzaOptionsContainer>
      <div className="boyut-secim">
        <h4>
          Boyut Seç {showError && <ErrorMessage>*</ErrorMessage>}
        </h4>
        <div>
          <label>
            <input
              type="radio"
              name="size"
              value="Küçük"
              checked={pizza.size === "Küçük"}
              onChange={handleChange}
            />
            Küçük
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="size"
              value="Orta"
              checked={pizza.size === "Orta"}
              onChange={handleChange}
            />
            Orta
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="size"
              value="Büyük"
              checked={pizza.size === "Büyük"}
              onChange={handleChange}
            />
            Büyük
          </label>
        </div>
      </div>
      <div className="hamur-secim">
        <h4>
          Hamur Seç {showError && <ErrorMessage>*</ErrorMessage>}
        </h4>
        <select
          name="doughThickness"
          value={pizza.doughThickness}
          onChange={handleChange}
        >
          <option value="" disabled>
            Hamur Seçin
          </option>
          <option value="İnce">İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </select>
      </div>
    </PizzaOptionsContainer>
  );
};

export default PizzaOptions;
