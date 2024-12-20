import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../contextApi/GlobalContext"; // Import the global context
import useDebounce from "../cuatomHooks/useDebounce"; // Import the custom hook

const SearchComponent = () => {
  const { setSearchTerm } = useGlobalContext();
  const [inputValue, setInputValue] = useState(""); // Local input state
  const debouncedValue = useDebounce(inputValue, 200); // Debounce with 200ms delay

  useEffect(() => {
    setSearchTerm(debouncedValue); // Update global context only after debouncing
  }, [debouncedValue, setSearchTerm]);
  const handleSearchChange = (e) => {
    setInputValue(e.target.value); // Update local state
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by Song, Artist, Date, Stream Count, or User ID"
        value={inputValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchComponent;
