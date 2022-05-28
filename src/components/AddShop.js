import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import FormikContainer from "./FormikContainer";
import New from "./New";
function AddShop() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <h5>Add Shops</h5>
      <FormikContainer />
      <New />
    </div>
  );
}

export default AddShop;
