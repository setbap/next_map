import html2canvas from "html2canvas";
import FileSaver from "file-saver";
import React, { useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  // @ts-ignore
} from "recharts";

interface Props {
  xAxisDataKey: string;
  areaDataKey: string;
  title: string;
  data: any[];
}

const ChartBox = ({ areaDataKey, xAxisDataKey, data, title }: Props) => {
  const ref = useRef();
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const payloadData = payload[0]["payload"][payload[0]["name"]];
      return (
        <div
          className=" py-2 shadow-xl rounded-md"
          style={{
            backgroundColor: "var(--color-text-base)",
            color: "var(--color-text-on-primary)",
            minWidth: 80,
          }}
        >
          <h4 className="text-xs sm:text-sm pb-2">{label}</h4>
          <p className="text-xs sm:text-sm">{`${payloadData}`} </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="w-full  text-center  py-1 justify-start flex flex-col items-center"
      id={title}
    >
      <div
        className="py-2 flex "
        onClick={async () => {
          // domtoimage
          //   .toBlob(document.getElementById(title), {
          //     style: { background: "var(--color-text-on-primary)" },
          //   })
          //   .then(function (blob) {
          //     fileDownload(blob, "dom-to-image.jpg");
          //   });
          const data = await html2canvas(
            // @ts-ignore
            ref.current.container as HTMLElement,
            {}
          ).then((canvas) => canvas.toDataURL("image/png", 1.0));
          FileSaver.saveAs(data, "myChart.png");
        }}
      >
        <button className="px-2 underline text-xs flex">
          <p> ذخیره</p>
          <AiOutlineDownload />
        </button>
      </div>
      <ResponsiveContainer
        width={"90%"}
        className="w-full  h-full overflow-hidden"
      >
        <AreaChart
          ref={ref}
          data={data}
          syncId={`${areaDataKey}-${xAxisDataKey}`}
          className="mt-1 mb-2"
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                style={{ stopColor: "var(--color-primary)" }}
                stopOpacity={0.4}
              />
              <stop
                offset="75%"
                style={{ stopColor: "var(--color-primary)" }}
                stopOpacity={0.05}
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
          <Legend
            content={
              <div>
                <div className="relative">
                  <h3 className=" py-2 text-skin-secondary justify-center flex">
                    {title}
                  </h3>
                </div>
              </div>
            }
            wrapperStyle={{ bottom: 5 }}
          />
          {/* @ts-ignore */}
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={areaDataKey}
            style={{ stroke: "var(--color-secondary)" }}
            fill="url(#color)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBox;
