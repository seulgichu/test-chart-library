"use client";

import React, { memo } from "react";
import ReactECharts from "echarts-for-react";
import { DirectionStats, CarTypeStats } from "@/hooks/useDashboardData";

interface EchartsPieProps {
  data: DirectionStats[] | CarTypeStats[];
  title: string;
  showAsDonut?: boolean;
}

const EchartsPie = memo(
  ({ data, title, showAsDonut = true }: EchartsPieProps) => {
    const option = {
      title: {
        text: title,
        left: "center",
        top: "5%",
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "horizontal",
        bottom: "5%",
        left: "center",
        type: "scroll",
      },
      series: [
        {
          name: title,
          type: "pie",
          radius: showAsDonut ? ["40%", "70%"] : "70%",
          center: ["50%", "50%"],
          data: data.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: {
              color: item.color,
            },
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            show: true,
            formatter: "{b}\n{d}%",
            fontSize: 12,
          },
          labelLine: {
            show: true,
          },
        },
      ],
      animation: true,
      animationDuration: 1000,
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ReactECharts
          option={option}
          style={{ height: "350px" }}
          opts={{ renderer: "canvas" }}
          notMerge={false}
          lazyUpdate={true}
        />
      </div>
    );
  }
);

EchartsPie.displayName = "EchartsPie";

export default EchartsPie;
