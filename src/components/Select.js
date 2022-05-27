import React from "react";
import { Field, ErrorMessage } from "formik";
import InputError from "./InputError";
function Select(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <Field
        as="select"
        name={name}
        className="form-control"
        id={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={InputError} />
    </div>
  );
}

export default Select;
