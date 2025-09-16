"use client";

import React, { memo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { DirectionStats, CarTypeStats } from "@/hooks/useDashboardData";

interface RechartsPieProps {
  data: DirectionStats[] | CarTypeStats[];
  title: string;
  showAsDonut?: boolean;
}

const RechartsPie = memo(
  ({ data, title, showAsDonut = true }: RechartsPieProps) => {
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      name,
    }: any) => {
      const RADIAN = Math.PI / 180;
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          fontSize="12"
          fontWeight="bold"
        >
          {`${name}`}
        </text>
      );
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
        <div style={{ height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={showAsDonut ? 40 : 0}
                fill="#8884d8"
                dataKey="value"
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any, name: string) => [
                  `${value} (${(
                    (value / data.reduce((sum, item) => sum + item.value, 0)) *
                    100
                  ).toFixed(1)}%)`,
                  name,
                ]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "20px",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
);

RechartsPie.displayName = "RechartsPie";

export default RechartsPie;
