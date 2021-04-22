import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  xAxisDataKey: string;
  areaDataKey: { name: string; persian: string }[];
  title: string;
  data: any[];
}

const ChartBoxAIO = ({ areaDataKey, xAxisDataKey, data, title }: Props) => {
  const colors = ["orange", "blue", "green"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="px-3 py-2 shadow-xl rounded-md"
          style={{
            backgroundColor: "var(--color-text-base)",
            color: "var(--color-text-on-primary)",
          }}
        >
          <h4 className="text-xs sm:text-sm pb-2">{label}</h4>
          {payload.map((p, index) => {
            const payloadData = p["payload"][p["name"]];

            return (
              <p
                key={index}
                style={{ color: colors[index] }}
                className="text-xs sm:text-sm"
              >
                {`${payloadData} :${areaDataKey[index].persian} `}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full text-center h-80 py-1 justify-start flex flex-col items-center">
      <h3 className="p-2 mb-4">{title}</h3>
      <ResponsiveContainer width={"90%"} className="w-full h-full" height={240}>
        <AreaChart
          data={data}
          syncId={`${areaDataKey}-${xAxisDataKey}`}
          className="mt-1   mb-2"
        >
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                style={{ stopColor: "orange" }}
                stopOpacity={0.4}
              />
              <stop
                offset="75%"
                style={{ stopColor: "red" }}
                stopOpacity={0.25}
              />
            </linearGradient>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                style={{ stopColor: "blue" }}
                stopOpacity={0.4}
              />
              <stop
                offset="75%"
                style={{ stopColor: "purple" }}
                stopOpacity={0.25}
              />
            </linearGradient>

            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                style={{ stopColor: "green" }}
                stopOpacity={0.4}
              />
              <stop
                offset="75%"
                style={{ stopColor: "yellow" }}
                stopOpacity={0.25}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            style={{ stroke: "var(--color-text-base)", opacity: 0.25 }}
            strokeDasharray="3 3"
          />
          <XAxis
            tickCount={12}
            tickSize={3}
            tickMargin={6}
            fontSize={14}
            dataKey={xAxisDataKey}
          />
          <YAxis width={10} />
          {/* @ts-ignore */}
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            formatter={(value, entry, index) => (
              <span className="px-1" style={{ color: colors[index] }}>
                {areaDataKey[index].persian}
              </span>
            )}
            verticalAlign="bottom"
            height={36}
          />

          {areaDataKey.map((data, index) => {
            return (
              <Area
                key={data.name}
                type="monotone"
                strokeWidth={2}
                dataKey={data.name}
                stroke={colors[index]}
                fill={`url(#color${(index % 3) + 1})`}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBoxAIO;
