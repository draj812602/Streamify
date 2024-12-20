import React, { useState } from "react";
import Navbar from "../components/NavBar";
import DataTable from "../components/tableComp/DataTable";
import { recentStreams } from "../staticData/mockData";
import { useGlobalContext } from "../contextApi/GlobalContext";
import Search from "../components/SearchComponent";
import useDebounce from "../cuatomHooks/useDebounce";
import Pagination from "../components/Pagination";

const DataTablePage = () => {
  const { searchTerm } = useGlobalContext(); // Get raw search term
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce the search term

  // Filter the data based on the debounced search term
  const filteredData = recentStreams.filter((row) => {
    return (
      row.songName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      row.artist.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      row.date.includes(debouncedSearchTerm) ||
      row.streams.toString().includes(debouncedSearchTerm) ||
      row.userId.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  });
  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="d-flex">
          <h4>Recent Streams</h4>
          <span className="ms-auto w-50">
            <Search />
          </span>
        </div>
        <DataTable data={currentItems} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DataTablePage;
