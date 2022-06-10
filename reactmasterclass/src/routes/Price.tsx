import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";
import { stringify } from "querystring";
import PriceItem from "../PriceItem";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  border-radius: 15px;
`;

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

function Price() {
  const coinId = useOutletContext<string>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 20000,
    }
  );

  return (
    <Container>
      {data?.map((price) => (
        <PriceItem
          key={price.time_close}
          time={price.time_close}
          open={price.open}
          high={price.high}
          low={price.low}
          close={price.close}
        ></PriceItem>
      ))}
    </Container>
  );
}

export default Price;