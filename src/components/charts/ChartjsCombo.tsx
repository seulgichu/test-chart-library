"use client";

import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { TimeStats } from "@/hooks/useDashboardData";

// Chart.js 플러그인 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartjsComboProps {
  data: TimeStats[];
  title?: string;
}

const ChartjsCombo = memo(
  ({
    data,
    title = "시간대별 차량 통행량 및 평균 속도",
  }: ChartjsComboProps) => {
    const chartData = {
      labels: data.map((item) => item.time),
      datasets: [
        {
          type: "bar" as const,
          label: "차량 대수",
          data: data.map((item) => item.vehicleCount),
          backgroundColor: "#3b82f6",
          borderColor: "#3b82f6",
          yAxisID: "y",
        },
        {
          type: "bar" as const,
          label: "교통량",
          data: data.map((item) => item.trafficVolume),
          backgroundColor: "#06b6d4",
          borderColor: "#06b6d4",
          yAxisID: "y",
        },
        {
          type: "line" as const,
          label: "평균 속도",
          data: data.map((item) => item.averageSpeed),
          borderColor: "#ef4444",
          backgroundColor: "#ef4444",
          borderWidth: 3,
          tension: 0.3,
          yAxisID: "y1",
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: title,
          font: {
            size: 16,
            weight: "bold" as const,
          },
        },
        legend: {
          position: "top" as const,
        },
        tooltip: {
          mode: "index" as const,
          intersect: false,
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "시간",
          },
        },
        y: {
          type: "linear" as const,
          display: true,
          position: "left" as const,
          title: {
            display: true,
            text: "차량 대수 / 교통량",
          },
        },
        y1: {
          type: "linear" as const,
          display: true,
          position: "right" as const,
          title: {
            display: true,
            text: "평균 속도 (km/h)",
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
      animation: {
        duration: 1000,
      },
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div style={{ height: "400px" }}>
          <Chart type="bar" data={chartData} options={options} />
        </div>
      </div>
    );
  }
);

ChartjsCombo.displayName = "ChartjsCombo";

export default ChartjsCombo;
