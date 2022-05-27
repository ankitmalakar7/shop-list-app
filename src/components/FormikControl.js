import React from "react";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Select from "./Select";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select1":
      return <Select {...rest} />;
    case "select2":
      return <Select {...rest} />;
    case "date1":
      return <DatePicker {...rest} />;
    case "date2":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
