import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import FormikContainer from "./FormikContainer";
function AddShop() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Shops
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormikContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShop;
