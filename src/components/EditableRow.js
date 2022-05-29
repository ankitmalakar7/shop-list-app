import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="shopName"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.shopName}
          onChange={handleEditFormChange}
          pattern="^[a-zA-Z]+$"
        />
      </td>
      <td>
        <select
          name="area"
          id="area"
          value={editFormData.area}
          onChange={handleEditFormChange}
          required
        >
          <option value="">None</option>
          <option value="thane">Thane</option>
          <option value="pune">Pune</option>
          <option value="mumbai suburban">Mumbai Suburban</option>
          <option value="nashik">Nashik</option>
          <option value="nagpur">Nagpur</option>
          <option value="ahmednagar">Ahmednagar</option>
          <option value="solapur">Solapur</option>
        </select>
      </td>
      <td>
        <select
          name="category"
          id="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
          required
        >
          <option value="">None</option>
          <option value="grocery">Grocery</option>
          <option value="butcher">Butcher</option>
          <option value="baker">Baker</option>
          <option value="chemist">Chemist</option>
          <option value="stationery shop">Stationery Shop</option>
        </select>
      </td>
      <td>
        <input
          type="date"
          name="startDate"
          required="required"
          placeholder="Enter a startDate..."
          value={editFormData.startDate}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="date"
          name="endDate"
          required="required"
          placeholder="Enter an End Date..."
          value={editFormData.endDate}
          onChange={handleEditFormChange}
          min={editFormData.startDate}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
