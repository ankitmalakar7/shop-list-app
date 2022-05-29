import React, { useState, useMemo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useTable } from "react-table";
import { Columns } from "./Columns";
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
  const [data, setData] = useState([]);
  const onSubmit = (values) => {
    setData([...data, values]);
    console.log(data);
  };
  // const columns = useMemo(() => Columns, []);
  // const columnData = useMemo(() => data, []);
  // const tableInstance = useTable({ columns, data: columnData });
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;
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
              value={formik.values.name}
            />
            <FormikControl
              control="select1"
              name="select"
              label="Area"
              options={AreaOptions}
              value={formik.values.select}
            />
            <FormikControl
              control="select2"
              name="category"
              label="Category"
              options={CategoryOptions}
              value={formik.values.category}
            />
            <FormikControl
              control="date1"
              name="startDate"
              label="Start Date"
              value={formik.values.startDate}
            />
            <FormikControl
              control="date2"
              name="endDate"
              label="End Date"
              value={formik.values.endDate}
            />
            <button type="submit" className="btn btn-primary my-3">
              Add
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormikContainer;
