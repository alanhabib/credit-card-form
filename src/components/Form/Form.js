import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";
import { useForm } from "../../utils/hooks";
import { validate } from "../../utils/validate";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
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
  max-height: 700px;
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
  margin-bottom: 20px;
  & > input {
    margin: 20px 8px 0 8px;
  }
`;

const JsonWrapper = styled.div`
  width: 80%;
  margin-bottom: 12px;
  & > pre {
    position: relative;
    border: 1px solid #ccc;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 10px;
  }
`;

const Error = styled.p`
  color: red;
  text-align: center;
  margin: 0;
  padding: 4px;
`;

const Button = styled.button`
  padding: 12px 32px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: #89f3ff;
  border: 1px solid lightGrey;
`;

const Form = () => {
  const { values, errors, handleInputChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const [inputFocused, setInputFocused] = useState("");

  function submit() {
    console.log("### SUBMIT PAYMENT");
  }

  return (
    <Wrapper>
      <Card
        number={values?.number}
        name={values?.name}
        expiry={values?.expiry}
        cvc={values?.cvc}
        focused={inputFocused}
      />
      <FormWrapper>
        <Input
          value={values.number || ""}
          autoFocus
          onFocus={(e) => setInputFocused(e.currentTarget.name)}
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          required
        />
        <Input
          value={values.name || ""}
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
            value={values.expiry || ""}
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
            value={values.cvc || ""}
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
        {errors.cvc && <Error>{errors.cvc}</Error>}
        {errors.expiry && <Error>{errors.expiry}</Error>}
        <Button onClick={() => handleSubmit()} type="submit">
          Submit
        </Button>
        <JsonWrapper>
          <h3>Values</h3>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </JsonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
