import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="song" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="streams" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
