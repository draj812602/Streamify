import React, { useState, useMemo } from "react";
import TableHead from "../tableComp/thead";
import TableBody from "../tableComp/Tbody";

const Table = ({ data }) => {
  const [sortField, setSortField] = useState(""); // Current field to sort
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order: 'asc' or 'desc'

  // Function to handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle sorting order if same field is clicked
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // Memoized sorted data for performance
  const sortedData = useMemo(() => {
    if (!sortField) return data; // Return unsorted data if no sortField
    return [...data].sort((a, b) => {
      const valueA = a[sortField]?.toString().toLowerCase() || "";
      const valueB = b[sortField]?.toString().toLowerCase() || "";

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortOrder]);

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped">
        {/* Pass sorting state and handler to TableHeader */}
        <TableHead
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
        {/* Render the sorted data in TableBody */}
        <TableBody data={sortedData} />
      </table>
    </div>
  );
};

export default Table;
