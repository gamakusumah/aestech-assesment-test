import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

export default function Barchart() {
  const [chartData, setChartData] = useState({
    labels: ["Sarah", "Fajrin", "Siska"],
    datasets: [
      {
        label: "Jumlah",
        data: [48, 42, 41],
      },
    ],
  });
  return <Bar data={chartData} />;
}
