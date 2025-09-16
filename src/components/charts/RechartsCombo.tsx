"use client";

import React, { memo } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TimeStats } from "@/hooks/useDashboardData";

interface RechartsComboProps {
  data: TimeStats[];
  title?: string;
}

const RechartsCombo = memo(
  ({
    data,
    title = "시간대별 차량 통행량 및 평균 속도",
  }: RechartsComboProps) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
        <div style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value: any, name: string) => {
                  if (name === "평균 속도") {
                    return [`${value} km/h`, name];
                  }
                  return [value, name];
                }}
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="vehicleCount"
                fill="#3b82f6"
                name="차량 대수"
              />
              <Bar
                yAxisId="left"
                dataKey="trafficVolume"
                fill="#06b6d4"
                name="교통량"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="averageSpeed"
                stroke="#ef4444"
                strokeWidth={3}
                name="평균 속도"
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
);

RechartsCombo.displayName = "RechartsCombo";

export default RechartsCombo;
