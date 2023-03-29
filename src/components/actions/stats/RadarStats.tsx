import React from "react";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import { data1, data2, data3 } from "~/helpers/stats/previewRadarData";

interface RadarStatsProps {
  dataIndex: number;
}

const RadarStats = (props: RadarStatsProps) => {
  const data = [data1, data2, data3];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Radar
        data={data[props.dataIndex]!}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          elements: {
            line: {
              borderWidth: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default RadarStats;
