import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const ToggleBtn = styled.button``;

function Chart() {
  const params = useParams();
  const coinId = useOutletContext<string>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 20000,
    }
  );

  const [isCandle, setCandle] = useState(false);
  const isDark = useRecoilValue(isDarkAtom);

  const lineChartOptions: ApexOptions = {
    theme: {
      mode: "dark",
    },
    chart: {
      type: "line",
      height: 500,
      width: 500,
      toolbar: { show: false },
      background: "transparent",
    },
    grid: { show: false },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      type: "datetime",
      categories: data?.map((price) => price.time_close),
    },
    fill: {
      type: "gradient",
      gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
    },
    colors: ["#0fbcf9"],
    tooltip: {
      y: {
        formatter: (value) => `$ ${value.toFixed(3)}`,
      },
    },
  };

  const candleOptions: ApexOptions = {
    theme: {
      mode: isDark ? "dark" : "light",
    },
    chart: {
      type: "candlestick",
      height: 500,
      width: 500,
      // toolbar: { show: false },
      background: "transparent",
    },
    // title: {
    //   text: "CandleStick Chart",
    //   align: "left",
    // },
    xaxis: {
      labels: {
        // show: false,
        format: "M/dd",
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      type: "datetime",
    },
    yaxis: {
      // show: false,
      tooltip: {
        enabled: true,
      },
    },
  };

  const lineSeries: ApexAxisChartSeries = [
    {
      name: "price",
      data: data?.map((price) => price.close) as number[],
    },
  ];

  const candleSeries: ApexAxisChartSeries = [
    {
      name: "price",
      data: data?.map((price) => {
        return {
          x: price.time_close.slice(0, 10),
          y: [
            price.open.toFixed(3),
            price.high.toFixed(3),
            price.low.toFixed(3),
            price.close.toFixed(3),
          ],
        };
      }) as unknown as number[],
    },
  ];

  let currentSeries = candleSeries;
  let currentOptions = candleOptions;
  let currentType = "candlestick";

  const changeChart = () => {
    setCandle(!isCandle);
    // if (isCandle) {
    //   currentSeries = candleSeries;
    //   currentOptions = candleOptions;
    // } else {
    //   currentSeries = lineSeries;
    //   currentOptions = lineChartOptions;
    // }
  };

  return (
    <Container>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          series={currentSeries}
          options={currentOptions}
          type="candlestick"
        />
      )}
      {/* <ToggleBtn onClick={changeChart}>Change</ToggleBtn> */}
    </Container>
  );
}

export default Chart;