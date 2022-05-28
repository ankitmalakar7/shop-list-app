import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import FormikContainer from "./FormikContainer";
import New from "./New";
function AddShop() {
  return (
    <>
      {/* <h5>Add Shops</h5> */}
      {/* <FormikContainer /> */}
      <New />
    </>
  );
}

export default AddShop;
