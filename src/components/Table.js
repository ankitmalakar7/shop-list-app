import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Columns } from "./Columns";
function Table(props) {
  let { Name, Area, Category, StartDate, EndDate } = props;
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => [], []);
  return (
    <div className="container">
      {Name}
      {Area}
      {Category}
    </div>
  );
}

export default Table;
