import React, { useState, Fragment } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const New = () => {
  const [datas, setDatas] = useState([]);
  const [addFormData, setAddFormData] = useState({
    shopName: "",
    area: "",
    category: "",
    startDate: "",
    endDate: "",
  });

  const [editFormData, setEditFormData] = useState({
    shopName: "",
    area: "",
    category: "",
    startDate: "",
    endDate: "",
  });

  const [editDataId, setEditDataId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
      shopName: addFormData.shopName,
      area: addFormData.area,
      category: addFormData.category,
      startDate: addFormData.startDate,
      endDate: addFormData.endDate,
    };
    if (newData.endDate < newData.startDate) {
      alert("End Date must be greater than Start Date");
    } else {
      const newDatas = [...datas, newData];
      setDatas(newDatas);
    }
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editDataId,
      shopName: editFormData.shopName,
      area: editFormData.area,
      category: editFormData.category,
      startDate: editFormData.startDate,
      endDate: editFormData.endDate,
    };
    const newDatas = [...datas];
    const index = datas.findIndex((data) => data.id === editDataId);
    newDatas[index] = editedContact;
    setDatas(newDatas);
    setEditDataId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditDataId(data.id);
    const formValues = {
      shopName: data.shopName,
      area: data.area,
      category: data.category,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditDataId(null);
  };
  const handleDeleteClick = (dataId) => {
    const newDatas = [...datas];
    const index = datas.findIndex((data) => data.id === dataId);
    newDatas.splice(index, 1);
    setDatas(newDatas);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Area</th>
                <th>Category</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data) => (
                <Fragment>
                  {editDataId === data.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      data={data}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <div className="cont">
        <h2>Add a Shop</h2>
        <form onSubmit={handleAddFormSubmit}>
          <h6>Enter Shop Name</h6>
          <input
            type="text"
            name="shopName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
            pattern="^[a-zA-Z]+$"
          />
          <h6>Enter Shop Area</h6>
          <select name="area" id="area" onChange={handleAddFormChange} required>
            <option value="">None</option>
            <option value="thane">Thane</option>
            <option value="pune">Pune</option>
            <option value="mumbai suburban">Mumbai Suburban</option>
            <option value="nashik">Nashik</option>
            <option value="nagpur">Nagpur</option>
            <option value="ahmednagar">Ahmednagar</option>
            <option value="solapur">Solapur</option>
          </select>
          <h6>Enter Shop Category</h6>
          <select
            name="category"
            id="category"
            onChange={handleAddFormChange}
            required
          >
            <option value="">None</option>
            <option value="grocery">Grocery</option>
            <option value="butcher">Butcher</option>
            <option value="baker">Baker</option>
            <option value="chemist">Chemist</option>
            <option value="stationery shop">Stationery Shop</option>
          </select>
          <h6>Enter Shop Starting Date</h6>
          <input
            type="date"
            name="startDate"
            required="required"
            placeholder="Enter an startDate..."
            onChange={handleAddFormChange}
            value={addFormData.startDate}
          />
          <h6>Enter Shop End Date</h6>
          <input
            type="date"
            name="endDate"
            required="required"
            placeholder="Enter an End Date..."
            min={editFormData.startDate}
            onChange={handleAddFormChange}
            value={addFormData.endDate}
          />
          <div className="my-4">
            <button type="submit" className="btn btn-sm btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default New;
