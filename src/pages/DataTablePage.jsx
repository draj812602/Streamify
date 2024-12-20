import React from "react";
import Navbar from "../components/NavBar";
import DataTable from "../components/tableComp/DataTable";
import { recentStreams } from "../staticData/mockData";
import { useGlobalContext } from "../contextApi/GlobalContext";
import Search from "../components/SearchComponent";
import useDebounce from "../cuatomHooks/useDebounce";

const DataTablePage = () => {
  const { searchTerm } = useGlobalContext(); // Get raw search term
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
        <DataTable data={filteredData} />
      </div>
    </div>
  );
};

export default DataTablePage;
