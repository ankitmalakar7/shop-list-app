import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  area: "",
  category: "",
  startDate: "",
  endDate: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  area: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  startDate: Yup.string().required("Required"),
  endDate: Yup.string().required("Required"),
});
function AddShop() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Shops
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter shop name"
                    required
                  />
                  <ErrorMessage name="name" />
                </div>
                <div class="form-group">
                  <label for="area">Area</label>
                  <select class="form-select">
                    <option selected>Select area</option>
                    <option value="1">Thane</option>
                    <option value="2">Pune</option>
                    <option value="3">Mumbai Suburban</option>
                    <option value="4">Nashik</option>
                    <option value="5">Nagpur</option>
                    <option value="5">Solapur</option>
                    <option value="5">Ahmednagar</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option selected>Select category</option>
                    <option value="1">Grocery</option>
                    <option value="2">Butcher</option>
                    <option value="3">Baker</option>
                    <option value="4">Chemist</option>
                    <option value="5">Stationery shop</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="startDate">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div class="form-group">
                  <label for="endDate">End Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <button type="submit" class="btn btn-primary my-3">
                  Add
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default AddShop;
