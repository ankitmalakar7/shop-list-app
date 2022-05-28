import React, { useState, useMemo, Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import Table from "./Table";
import { useTable } from "react-table";
import { Columns } from "./Columns";
import ReadOnlyRowz from "./ReadOnlyRowz";
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
  const [addFormData, setAddFormData] = useState({
    name: "",
    select: "",
    category: "",
    startDate: "",
    endDate: "",
  });
  const [editFormData, setEditFormData] = useState(initialValues);
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (values) => {
    const newData = {
      name: addFormData.name,
      select: addFormData.select,
      category: addFormData.category,
      startDate: addFormData.startDate,
      endDate: addFormData.endDate,
    };
    setData([...data, newData]);
    console.log(newData);
  };
  const handleEditFormSubmit = (values) => {
    const newData = data.map((item) => {
      if (item.id === editContactId) {
        return { ...item, ...values };
      }
      return item;
    });
    setData(newData);
    setEditFormData(initialValues);
    setEditContactId(null);
  };
  const handleDeleteClick = (id) => {
    const newData = [...data];
    const index = newData.findIndex((item) => item.id === id);
    newData.splice(index, 1);
    setData(newData);
  };
  // const columns = useMemo(() => Columns, []);
  // const columnData = useMemo(() => data, []);
  // const tableInstance = useTable({ columns, data: columnData });
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;
  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Select</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <Fragment>
                {editContactId === d.id ? null : ( //   /> //     handleCancelClick={handleCancelClick} //     handleEditFormChange={handleEditFormChange} //     editFormData={editFormData} //   <EditableRow
                  <ReadOnlyRowz
                    d={d}
                    // handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAddFormSubmit}
        onChange={handleAddFormChange}
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
