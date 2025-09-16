"use client";

import React, { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { EventStats } from "@/hooks/useDashboardData";

interface RechartsBarProps {
  data: EventStats[];
  title?: string;
}

const RechartsBar = memo(
  ({ data, title = "이벤트별 발생 건수" }: RechartsBarProps) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
        <div style={{ height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="event" />
              <YAxis
                tickFormatter={(value) => `${value}건`}
                label={{
                  value: "발생 건수",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                formatter={(value: any, name: string) => [
                  `${value}건`,
                  "이벤트 발생",
                ]}
                labelFormatter={(label) => `이벤트: ${label}`}
              />
              <Bar dataKey="count" name="이벤트 발생" animationDuration={1000}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
);

RechartsBar.displayName = "RechartsBar";

export default RechartsBar;
