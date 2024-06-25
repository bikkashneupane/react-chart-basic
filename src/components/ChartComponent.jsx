import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { Col, Container, Row } from "react-bootstrap";

import { BarChart } from "./BarChart.jsx";
import { DoughnutChart } from "./DoughnutChart.jsx";
import { LineGraph } from "./LineGraph.jsx";
import { PieChart } from "./PieChart.jsx";
import ReChart from "./ReCharts.jsx";
import { barData } from "../utils/data";
import { useState } from "react";

Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  BarElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

const initialState = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      label: "Income",
      data: [
        barData
          .filter((data) => data.income)
          .reduce((acc, curr) => {
            return acc + curr.income;
          }, 0),
        barData
          .filter((data) => data.expenses)
          .reduce((acc, curr) => {
            return acc + curr.expenses;
          }, 0),
      ],
      backgroundColor: [
        // "rgba(255, 99, 132, 0.8)", // Bright Red
        // "rgba(54, 162, 235, 0.8)", // Bright Blue
        "rgba(255, 206, 86, 0.8)", // Bright Yellow
        "rgba(75, 192, 192, 0.8)", // Bright Teal
        "rgba(153, 102, 255, 0.8)", // Bright Purple
        "rgba(255, 159, 64, 0.8)", // Bright Orange
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)", // Red
        "rgba(54, 162, 235, 1)", // Blue
        // "rgba(255, 206, 86, 1)", // Yellow
        // "rgba(75, 192, 192, 1)", // Teal
        // "rgba(153, 102, 255, 1)", // Purple
        // "rgba(255, 159, 64, 1)", // Orange
      ],
      borderWidth: 3,
    },
    // {
    //   label: "Expenses",
    //   data: barData.map((data) => data.expenses),
    //   backgroundColor: [
    //     "rgba(255, 99, 132, 0.8)", // Bright Red
    //     "rgba(54, 162, 235, 0.8)", // Bright Blue
    //     "rgba(255, 206, 86, 0.8)", // Bright Yellow
    //     "rgba(75, 192, 192, 0.8)", // Bright Teal
    //     "rgba(153, 102, 255, 0.8)", // Bright Purple
    //     "rgba(255, 159, 64, 0.8)", // Bright Orange
    //   ],
    //   borderColor: [
    //     "rgba(255, 99, 132, 1)", // Red
    //     "rgba(54, 162, 235, 1)", // Blue
    //     "rgba(255, 206, 86, 1)", // Yellow
    //     "rgba(75, 192, 192, 1)", // Teal
    //     "rgba(153, 102, 255, 1)", // Purple
    //     "rgba(255, 159, 64, 1)", // Orange
    //   ],
    //   borderWidth: 2,
    // },
  ],
};

export const ChartComponent = () => {
  const [chartData, setChartData] = useState(initialState);

  return (
    <Container>
      {/* <Row>
        <Col md={6}>
          <PieChart chartData={chartData} />
        </Col>
        <Col md={6}>
          <DoughnutChart chartData={chartData} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BarChart chartData={chartData} />
        </Col>
        <Col>
          <LineGraph chartData={chartData} />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <ReChart chartData={chartData} />
        </Col>
        <Col>
          <ReChart chartData={chartData} />
        </Col>
      </Row>
    </Container>
  );
};
