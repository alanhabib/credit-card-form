import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../utils/format";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
  position: relative;
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 460px;
  border-radius: 10px;
  margin: 0 20px;
  -webkit-box-shadow: 0 0 30px #000;
  box-shadow: 0 0 30px #000;
`;

const Input = styled.input`
  margin: 20px 0 0 0;
  height: 40px;
  width: 80%;
  border-radius: 10px;
  border: 1px solid lightGrey;
  padding: 0 0 0 16px;
  &:focus {
    outline-color: #89f3ff;
    border-radius: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  & > input {
    margin: 20px 8px 60px 8px;
  }
`;

const Form = () => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });

  const [inputFocused, setInputFocused] = useState("");

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  return (
    <Wrapper>
      <Card
        number={data?.number}
        name={data?.name}
        expiry={data?.expiry}
        cvc={data?.cvc}
        focused={inputFocused}
      />
      <FormWrapper>
        <Input
          value={data.number || ""}
          autoFocus
          onFocus={(e) => setInputFocused(e.currentTarget.name)}
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          required
        />
        <Input
          value={data.name || ""}
          autoFocus
          onFocus={(e) => setInputFocused(e.currentTarget.name)}
          type="text"
          name="name"
          placeholder="Card Name"
          onChange={handleInputChange}
          required
        />
        <Row>
          <Input
            value={data.expiry || ""}
            autoFocus
            onFocus={(e) => setInputFocused(e.currentTarget.name)}
            type="tel"
            name="expiry"
            placeholder="Expire date"
            pattern="\d\d/\d\d"
            onChange={handleInputChange}
            required
          />
          <Input
            value={data.cvc || ""}
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            autoFocus
            onFocus={(e) => setInputFocused(e.currentTarget.name)}
            onBlur={() => setInputFocused("")}
            required
          />
        </Row>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
