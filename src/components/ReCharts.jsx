import {
  Cell,
  Legend,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { barData } from "../utils/data";

const ReChart = () => {
  // Extracting total income and total expenses from chartData
  const totalIncome = barData
    .filter((data) => data.income)
    .reduce((acc, curr) => {
      return acc + curr.income;
    }, 0);

  const totalExpenses = barData
    .filter((data) => data.expenses)
    .reduce((acc, curr) => {
      return acc + curr.expenses;
    }, 0);

  // Format data for doughnut chart
  const data = [
    { name: "Income", value: totalIncome, color: "#8884d8" },
    { name: "Expenses", value: totalExpenses, color: "#82ca9d" },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((item) => (
            <Cell key={`cell-${item?.id}`} fill={item.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ReChart;
