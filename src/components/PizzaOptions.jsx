import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PizzaOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .hamur-secim {
    width: 30%;
  }
`;

const PizzaOptions = ({ pizza, handleChange }) => {
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    if (pizza.size && pizza.doughThickness) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  }, [pizza]);

  return (
    <PizzaOptionsContainer>
      <div className="boyut-secim">
        <h4>
          Boyut Seç {showWarning && <span style={{ color: "red" }}>*</span>}
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
          Hamur Seç {showWarning && <span style={{ color: "red" }}>*</span>}
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
