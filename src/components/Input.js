import React from "react";
import { Field, ErrorMessage } from "formik";
import InputError from "./InputError";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <Field name={name} className="form-control" id={name} {...rest} />
      <ErrorMessage name={name} component={InputError} />
    </div>
  );
}

export default Input;
