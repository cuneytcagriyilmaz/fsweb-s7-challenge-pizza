import React, { useState } from "react";
import styled from "styled-components";

const MaterialsContainer = styled.div`
  .materials {
    h3 {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        width: calc(33.33% - 10px);
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        input[type="checkbox"] {
          margin-right: 5px;
        }
      }
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .error-message {
    color: red;
  }
`;

const Materials = ({ pizza, handleMaterialsChange }) => {
  const materialsList = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak"
  ];

  const [showError, setShowError] = useState(false);

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    const selectedMaterialsCount = pizza.materials.length + (checked ? 1 : -1);

    if (selectedMaterialsCount < 4 || selectedMaterialsCount > 10) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    handleMaterialsChange(e);
  };

  return (
    <MaterialsContainer>
      <div className="materials">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <ul>
          {materialsList.map((material, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={material}
                id={material}
                checked={pizza.materials.includes(material)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={material}>{material}</label>
            </li>
          ))}
        </ul>
      </div>
      {showError && <p className="error-message">Malzemelerden en az 4 en çok 10 tanesini seçmelisiniz.</p>}
    </MaterialsContainer>
  );
};

export default Materials;
