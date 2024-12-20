import React, { useEffect } from "react";
import "../styles/MetricsCard.scss";
import * as bootstrap from "bootstrap";

const MetricsCard = ({ title, value, icon, tooltipText }) => {
  useEffect(() => {
    // Initialize all tooltips on the page
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <div
      className="card text-center metrics-card shadow-sm border border-none"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title={tooltipText} // Tooltip text passed dynamically
    >
      <div className="card-body">
        <div className="mb-0 text-success">
          <i className={`bi ${icon}`} style={{ fontSize: "2rem" }}></i>
        </div>
        <div className="card-title text-dark fw-bold fs-6">{title}</div>
        <p className="card-text text-muted fs-5">{value}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
