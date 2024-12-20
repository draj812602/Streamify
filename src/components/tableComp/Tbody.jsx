import React from "react";

const TableBody = ({ data }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={index} className="table-row">
        <td>{row.songName}</td>
        <td>{row.artist}</td>
        <td>{row.date}</td>
        <td>{row.streams}</td>
        <td>{row.userId}</td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
