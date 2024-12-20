import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap"; // Importing Bootstrap Pagination component

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const pages = [];
  const maxPagesToShow = 5; // Number of page numbers to show at a time
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  if (endPage - startPage < maxPagesToShow - 1) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    } else {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <BootstrapPagination>
      <BootstrapPagination.First
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      />
      <BootstrapPagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {pages[0] > 1 && (
        <>
          <BootstrapPagination.Ellipsis />
          {pages[0] > 2 && (
            <BootstrapPagination.Item onClick={() => handlePageChange(1)}>
              1
            </BootstrapPagination.Item>
          )}
        </>
      )}

      {pages.map((pageNumber) => (
        <BootstrapPagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </BootstrapPagination.Item>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          <BootstrapPagination.Ellipsis />
          {pages[pages.length - 1] < totalPages - 1 && (
            <BootstrapPagination.Item
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </BootstrapPagination.Item>
          )}
        </>
      )}

      <BootstrapPagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <BootstrapPagination.Last
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
