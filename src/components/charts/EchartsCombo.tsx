"use client";

import React, { memo } from "react";
import ReactECharts from "echarts-for-react";
import { TimeStats } from "@/hooks/useDashboardData";

interface EchartsComboProps {
  data: TimeStats[];
  title?: string;
}

const EchartsCombo = memo(
  ({
    data,
    title = "시간대별 차량 통행량 및 평균 속도",
  }: EchartsComboProps) => {
    const option = {
      title: {
        text: title,
        left: "center",
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      legend: {
        data: ["차량 대수", "교통량", "평균 속도"],
        top: "8%",
      },
      xAxis: [
        {
          type: "category",
          data: data.map((item) => item.time),
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "차량 대수 / 교통량",
          position: "left",
          axisLabel: {
            formatter: "{value}",
          },
        },
        {
          type: "value",
          name: "평균 속도 (km/h)",
          position: "right",
          axisLabel: {
            formatter: "{value} km/h",
          },
        },
      ],
      series: [
        {
          name: "차량 대수",
          type: "bar",
          data: data.map((item) => item.vehicleCount),
          itemStyle: {
            color: "#3b82f6",
          },
        },
        {
          name: "교통량",
          type: "bar",
          data: data.map((item) => item.trafficVolume),
          itemStyle: {
            color: "#06b6d4",
          },
        },
        {
          name: "평균 속도",
          type: "line",
          yAxisIndex: 1,
          data: data.map((item) => item.averageSpeed),
          smooth: true,
          lineStyle: {
            color: "#ef4444",
            width: 3,
          },
          itemStyle: {
            color: "#ef4444",
          },
        },
      ],
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      animation: true,
      animationDuration: 1000,
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ReactECharts
          option={option}
          style={{ height: "400px" }}
          opts={{ renderer: "canvas" }}
          notMerge={false}
          lazyUpdate={true}
        />
      </div>
    );
  }
);

EchartsCombo.displayName = "EchartsCombo";

export default EchartsCombo;
