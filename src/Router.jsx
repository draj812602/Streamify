import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DataTablePage from "./pages/DataTablePage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/data-table" element={<DataTablePage />} />
    </Routes>
  </Router>
);

export default AppRouter;
