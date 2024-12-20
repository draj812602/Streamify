import React from "react";
import Navbar from "../components/NavBar";
import MetricsCard from "../components/MetricsCard";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import { userGrowthData, revenueData, topSongs } from "../staticData/mockData";

const Dashboard = () => (
  <div>
    <Navbar />
    <div className="container mt-3">
      <div className="row g-3">
        <h5 className="text-warning mt-3 bg-secondary rounded px-3 fw-bold">
          Key matrics
        </h5>
        <div className="col-xl-2 col-lg-4 col-md-6 offset-xl-1">
          <MetricsCard
            title="Total Users"
            value="1,200,000"
            icon="bi-people-fill"
            tooltipText="Total number of users registered on the platform."
          />
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6">
          <MetricsCard
            title="Active Users"
            value="800,000"
            icon="bi-person-check-fill"
            tooltipText="The number of users who have streamed at least one song in the last 30 days."
          />
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6">
          <MetricsCard
            title="Total Streams"
            value="50,000,000"
            icon="bi-music-note-list"
            tooltipText="The total number of song streams on the platform"
          />
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6">
          <MetricsCard
            title="Revenue"
            value="$5,000,000"
            icon="bi-currency-dollar"
            tooltipText="The total revenue generated from subscriptions and advertisements"
          />
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6">
          <MetricsCard
            title="Top Artist"
            value="Dua Lipa"
            icon="bi bi-trophy-fill"
            tooltipText="The artist with the most streams in the past 30 days."
          />
        </div>
      </div>

      <h5 className="text-warning mt-3 bg-secondary rounded px-3 fw-bold">
        Data Visualization
      </h5>
      <div className="row g-3">
        <div className="col-6">
          <span className="float-end p-3 text-muted fw-bold">
            User Growth Chart
          </span>

          <div className="shadow-sm border rounded p-4 mt-2">
            <LineChart data={userGrowthData} />
          </div>
        </div>
        <div className="col-6">
          <span className="float-end p-3 text-muted fw-bold">
            Revenue Distribution
          </span>
          <div className="shadow-sm border rounded p-4 mt-2">
            <PieChart data={revenueData} />
          </div>
        </div>

        <div className="col-12">
          <span className="float-end p-3 text-muted fw-bold">
            Top 5 Streamed Songs
          </span>
          <div className="shadow-sm border rounded p-4 mt-2">
            <BarChart data={topSongs} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
