import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  xAxisDataKey: string;
  areaDataKey: string[];
  title: string;
  data: any[];
}

const ChartBoxAIOSync = ({ areaDataKey, xAxisDataKey, data, title }: Props) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const payloadData = payload[0]["payload"][payload[0]["name"]];
      return (
        <div
          className="px-3 py-2 shadow-xl rounded-md"
          style={{
            backgroundColor: "var(--color-text-base)",
            color: "var(--color-text-on-primary)",
          }}
        >
          <h4 className="text-xs sm:text-sm pb-2">{label}</h4>
          <p className="text-xs sm:text-sm">{`${payloadData} م.ل`} </p>
        </div>
      );
    }
    return null;
  };

  const colors = ["orange", "blue", "green"];

  return (
    <div className="w-full text-center h-80 py-1 justify-start flex flex-col items-center">
      <h3 className="p-2 mb-4">{title}</h3>
      <ResponsiveContainer width={"99%"} className="w-full h-full" height={240}>
        <AreaChart
          data={data}
          syncId={`${areaDataKey}-${xAxisDataKey}`}
          className="mt-1  ms-6 mb-2"
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
          <XAxis color="red" dataKey={xAxisDataKey} />
          <YAxis />
          {/* @ts-ignore */}
          <Tooltip content={<CustomTooltip />} />
          {areaDataKey.map((data, index) => {
            return (
              <Area
                key={data}
                type="monotone"
                dataKey={data}
                style={{ stroke: colors[index] }}
                fill={`url(#color${(index % 3) + 1})`}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBoxAIOSync;
