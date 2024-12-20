import React from "react";

const TableHead = ({ sortField, sortOrder, onSort }) => {
  const getSortIcon = (field) => {
    if (sortField === field) {
      return sortOrder === "asc" ? "▲" : "▼";
    }
    return "↕"; // Default unsorted state
  };

  return (
    <thead className="table-success fs-6">
      <tr>
        <th onClick={() => onSort("songName")} className="cursor-pointer">
          Song Name {getSortIcon("songName")}
        </th>
        <th onClick={() => onSort("artist")} className="cursor-pointer">
          Artist {getSortIcon("artist")}
        </th>
        <th>Date Streamed</th>
        <th onClick={() => onSort("streams")} className="cursor-pointer">
          Stream Count {getSortIcon("streams")}
        </th>
        <th>User ID</th>
      </tr>
    </thead>
  );
};
export default TableHead;
