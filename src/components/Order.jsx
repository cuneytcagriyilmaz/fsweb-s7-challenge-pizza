import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import PizzaInfo from "./PizzaInfo";
import PizzaOptions from "./PizzaOptions";
import Materials from "./Materials";
import OrderNote from "./OrderNote";
import Total from "./Total";
import HeaderComponent from "./HeaderComponent";



const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PizzaOrderContainer = styled.div`
  width: 35%;
`;

const Order = () => {
  const [pizza, setPizza] = useState({
    size: "",
    doughThickness: "",
    materials: [],
    note: "",
    name: ""
  });

  const [total, setTotal] = useState(0);
  const [totalMaterials, setTotalMaterials] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [pizza, pizza.materials]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizza({ ...pizza, [name]: value });
  };

  const handleMaterialsChange = (e) => {
    const { name, checked } = e.target;
  
    let updatedMaterials;
    if (checked) {
        updatedMaterials = [...pizza.materials, name];
    } else {
        updatedMaterials = pizza.materials.filter((material) => material !== name);
    }

    setPizza((prevPizza) => ({
      ...prevPizza,
      materials: updatedMaterials,
    }));
};


  const calculateTotal = () => {
    let total = 85.5;

    if (pizza.size === "Küçük") {
      total += 0;
    }

    if (pizza.size === "Orta") {
      total += 5;
    }

    if (pizza.size === "Büyük") {
      total += 10;
    }

    if (pizza.doughThickness === "İnce") {
      total += 0;
    }

    if (pizza.doughThickness === "Orta") {
      total += 5;
    }


    if (pizza.doughThickness === "Kalın") {
      total += 10
    }

    total += pizza.materials.length*5;

    setTotal(total);
    setTotalMaterials(pizza.materials.length*5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", pizza)
      .then((response) => {
        console.log("API Response:", response.data);
        history.push("/Result");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const isButtonDisabled = () => {
    return !(pizza.materials.length >= 4 && pizza.materials.length <= 10 && pizza.name.length >= 3 && pizza.size && pizza.doughThickness);
  };

  return (
    <>
      <HeaderComponent />
      <OrderContainer>
        <PizzaOrderContainer>
          <PizzaInfo />
          <form onSubmit={handleSubmit}>
            <PizzaOptions pizza={pizza} handleChange={handleChange} />
            <Materials pizza={pizza} handleMaterialsChange={handleMaterialsChange} />
            <OrderNote pizza={pizza} handleChange={handleChange} />
            <Total total={total} totalMaterials={totalMaterials} handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />
          </form>
        </PizzaOrderContainer>
      </OrderContainer>
    </>
  );
};

export default Order;
