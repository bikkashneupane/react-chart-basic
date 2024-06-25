import { Bar } from "react-chartjs-2";
import React from "react";

export const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            responsive: true,
            title: {
              display: true,
              text: "bar Chart 2018-2024",
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};
