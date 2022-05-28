import React from "react";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.shopName}</td>
      <td>{data.area}</td>
      <td>{data.category}</td>
      <td>{data.startDate}</td>
      <td>{data.endDate}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, data)}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
