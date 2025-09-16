"use client";

import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { EventStats } from "@/hooks/useDashboardData";

// Chart.js 플러그인 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartjsBarProps {
  data: EventStats[];
  title?: string;
}

const ChartjsBar = memo(
  ({ data, title = "이벤트별 발생 건수" }: ChartjsBarProps) => {
    const chartData = {
      labels: data.map((item) => item.event),
      datasets: [
        {
          label: "이벤트 발생",
          data: data.map((item) => item.count),
          backgroundColor: data.map((item) => item.color),
          borderColor: data.map((item) => item.color),
          borderWidth: 2,
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
          display: false, // 단일 데이터셋이므로 범례 숨김
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              return `${context.dataset.label}: ${context.parsed.y}건`;
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "이벤트 유형",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "발생 건수",
          },
          ticks: {
            callback: function (value: any) {
              return value + "건";
            },
          },
        },
      },
      animation: {
        duration: 1000,
      },
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div style={{ height: "350px" }}>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    );
  }
);

ChartjsBar.displayName = "ChartjsBar";

export default ChartjsBar;
