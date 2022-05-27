import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const AreaOptions = [
  { value: "select", label: "Select Your Area" },
  { value: "thane", label: "Thane" },
  { value: "pune", label: "Pune" },
  { value: "mumbai suburban", label: "Mumbai Suburban" },
  { value: "nashik", label: "Nashik" },
  { value: "nagpur", label: "Nagpur" },
  { value: "ahmednagar", label: "Ahmednagar" },
  { value: "solapur", label: "Solapur" },
];
const CategoryOptions = [
  { value: "select", label: "Select Your Category" },
  { value: "grocery", label: "Grocery" },
  { value: "butcher", label: "Butcher" },
  { value: "baker", label: "Baker" },
  { value: "chemist", label: "Chemist" },
  { value: "stationery shop", label: "Stationery Shop" },
];
function FormikContainer(props) {
  const [text, setText] = useState("");
  const initialValues = {
    name: "",
    select: "",
    category: "",
    startDate: "",
    endDate: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    select: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date()
      .min(Yup.ref("startDate"), "Start Date should be before than End Date")
      .required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
    setText(values.name);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              name="name"
              label="Name"
              type="text"
            />
            <FormikControl
              control="select1"
              name="select"
              label="Area"
              options={AreaOptions}
            />
            <FormikControl
              control="select2"
              name="category"
              label="Category"
              options={CategoryOptions}
            />
            <FormikControl
              control="date1"
              name="startDate"
              label="Start Date"
            />
            <FormikControl control="date2" name="endDate" label="End Date" />
            <button type="submit" className="btn btn-primary my-3">
              Add
            </button>
          </Form>
        )}
      </Formik>
      <p>{text}</p>
    </>
  );
}

export default FormikContainer;
