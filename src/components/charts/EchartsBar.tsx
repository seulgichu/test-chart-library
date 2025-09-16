"use client";

import React, { memo } from "react";
import ReactECharts from "echarts-for-react";
import { EventStats } from "@/hooks/useDashboardData";

interface EchartsBarProps {
  data: EventStats[];
  title?: string;
}

const EchartsBar = memo(
  ({ data, title = "이벤트별 발생 건수" }: EchartsBarProps) => {
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
          type: "shadow",
        },
        formatter: (params: any) => {
          const param = params[0];
          return `${param.name}<br/>${param.seriesName}: ${param.value}건`;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%",
        top: "15%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: data.map((item) => item.event),
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 0,
          fontSize: 12,
        },
      },
      yAxis: {
        type: "value",
        name: "발생 건수",
        axisLabel: {
          formatter: "{value}건",
        },
      },
      series: [
        {
          name: "이벤트 발생",
          type: "bar",
          barWidth: "60%",
          data: data.map((item) => ({
            value: item.count,
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
            position: "top",
            formatter: "{c}건",
            fontSize: 12,
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

EchartsBar.displayName = "EchartsBar";

export default EchartsBar;
