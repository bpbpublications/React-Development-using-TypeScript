import React from "react";
import ReactApexChart from "react-apexcharts";

export const CandlestickChart = ({ data }) => {
  const series = [
    {
      data: data.map((item) => ({
        x: new Date(item.date).getTime(),
        y: [item.price, item.price, item.price, item.price]
      }))
    }
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350
    },
    title: {
      text: "Candlestick Chart",
      align: "left"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};
