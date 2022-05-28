import React from "react";

function ReadOnlyRowz({ d, handleEditClick, handleDeleteClick }) {
  return (
    <>
      <tr>
        <td>{d.name}</td>
        <td>{d.select}</td>
        <td>{d.category}</td>
        <td>{d.startDate}</td>
        <td>{d.endDate}</td>
        <td>
          <button type="button" onClick={(event) => handleEditClick(event, d)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(d.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default ReadOnlyRowz;
