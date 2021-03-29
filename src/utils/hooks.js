import { useState, useEffect } from "react";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./format";

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleInputChange = ({ target, persist }) => {
    persist();
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  };
};
