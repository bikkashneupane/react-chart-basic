import { Line } from "react-chartjs-2";
import React from "react";

export const LineGraph = ({ chartData }) => {
  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Income/Expenses",
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
