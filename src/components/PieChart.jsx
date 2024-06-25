import { Pie } from "react-chartjs-2";

export const PieChart = ({ chartData }) => {
  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              displayColors: true,
            },
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
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
