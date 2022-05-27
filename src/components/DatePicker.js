import React from "react";
import { Field, ErrorMessage } from "formik";
import InputError from "./InputError";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DatePicker(props) {
  const { name, label, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <Field name={name} className="form-control">
        {({ field, form }) => {
          return (
            <DateView
              {...field}
              {...rest}
              className="form-control"
              selected={field.value}
              onChange={(date) => form.setFieldValue(name, date)}
              dateFormat="dd/MM/yyyy"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={InputError} />
    </div>
  );
}

export default DatePicker;
