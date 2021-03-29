export const validate = (values) => {
  let errors = {};
  if (!values.cvc) {
    errors.cvc = "CVC is required";
  } else if (!/^[0-9]{3,4}$/.test(values.cvc)) {
    errors.cvc = "CVC is required";
  }

  if (!values.expiry) {
    errors.expiry = "Expiry date is required";
  } else if (!/^\d{2}\/\d{2}$/.test(values.expiry)) {
    errors.expiry = "Expiry date is required";
  }
  return errors;
};
