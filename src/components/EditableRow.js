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
        <input
          type="text"
          name="area"
          required="required"
          placeholder="Enter the area..."
          value={editFormData.area}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="category"
          required="required"
          placeholder="Enter the category..."
          value={editFormData.category}
          onChange={handleEditFormChange}
        />
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
