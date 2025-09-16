"use client";

import React, { memo } from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { DirectionStats, CarTypeStats } from "@/hooks/useDashboardData";

// Chart.js 플러그인 등록
ChartJS.register(ArcElement, Title, Tooltip, Legend);

interface ChartjsPieProps {
  data: DirectionStats[] | CarTypeStats[];
  title: string;
  showAsDonut?: boolean;
}

const ChartjsPie = memo(
  ({ data, title, showAsDonut = true }: ChartjsPieProps) => {
    const chartData = {
      labels: data.map((item) => item.name),
      datasets: [
        {
          label: title,
          data: data.map((item) => item.value),
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
          position: "top" as const,
        },
        legend: {
          position: "bottom" as const,
          labels: {
            usePointStyle: true,
            padding: 20,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const label = context.label || "";
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce(
                (acc: number, curr: number) => acc + curr,
                0
              );
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
      cutout: showAsDonut ? "40%" : 0,
      animation: {
        duration: 1000,
      },
    };

    const ChartComponent = showAsDonut ? Doughnut : Pie;

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div style={{ height: "350px" }}>
          <ChartComponent data={chartData} options={options} />
        </div>
      </div>
    );
  }
);

ChartjsPie.displayName = "ChartjsPie";

export default ChartjsPie;
