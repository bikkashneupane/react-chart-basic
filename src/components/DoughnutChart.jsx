import { Doughnut } from "react-chartjs-2";
import React from "react";

export const DoughnutChart = ({ chartData }) => {
  return (
    <div>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
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
