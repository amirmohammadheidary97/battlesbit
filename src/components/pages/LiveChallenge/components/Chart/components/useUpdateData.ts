import {useEffect, useState} from 'react';

import type {chartType} from '../Chart';

type AreaTick = {
  time: string;
  value: number;
};

type candleTick = {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
};

const areaInitialData: AreaTick[] = [
  {time: '2018-12-22', value: 32.51},
  {time: '2018-12-23', value: 31.11},
  {time: '2018-12-24', value: 27.02},
  {time: '2018-12-25', value: 27.32},
  {time: '2018-12-26', value: 25.17},
  {time: '2018-12-27', value: 28.89},
  {time: '2018-12-28', value: 25.46},
  {time: '2018-12-29', value: 23.92},
  {time: '2018-12-30', value: 22.68},
  {time: '2018-12-31', value: 22.67},
];

const candlestickData: candleTick[] = [
  {time: '2018-10-11', open: 50, high: 53, low: 49, close: 52},
  {time: '2018-10-12', open: 52, high: 54, low: 50, close: 51},
  {time: '2018-10-13', open: 51, high: 52, low: 48, close: 51},
  {time: '2018-10-14', open: 51, high: 52, low: 49, close: 50},
  {time: '2018-10-15', open: 50, high: 52, low: 50, close: 51},
  {time: '2018-10-16', open: 51, high: 52, low: 50, close: 51},
];

type Props = {
  chartType: chartType;
  areaSeries: any;
  candleSeries: any;
  seriesCleared: boolean;
};

export const useUpdateData = ({
  chartType,
  areaSeries,
  candleSeries,
  seriesCleared,
}: Props) => {
  const [currentDate] = useState(
    new Date(areaInitialData[areaInitialData.length - 1].time),
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [areaHistory, setAreaHistory] = useState<AreaTick[]>(areaInitialData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [candleHistory, setCandleHistory] =
    useState<candleTick[]>(candlestickData);

  useEffect(() => {
    if (chartType !== 'area' || !areaSeries?.current || seriesCleared) return;
    let intervalId;
    console.log('live area');

    intervalId = setInterval(() => {
      const next = {
        time: new Date(currentDate.setDate(currentDate.getDate() + 1))
          .toISOString()
          .slice(0, 10),
        value: 53 - 2 * Math.random(),
      };
      areaSeries.current.update(next);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [chartType, areaSeries, currentDate, seriesCleared]);

  useEffect(() => {
    if (chartType !== 'candlestick' || !candleSeries?.current || seriesCleared)
      return;
    console.log('live candle');
    let intervalId;

    intervalId = setInterval(() => {
      const newCandle = {
        time: new Date(currentDate.setDate(currentDate.getDate() + 1))
          .toISOString()
          .slice(0, 10),
        open: Math.random() * 100,
        high: Math.random() * 100 + 10,
        low: Math.random() * 100 - 10,
        close: Math.random() * 100,
      };
      candleSeries.current.update(newCandle);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartType, candleHistory, currentDate, seriesCleared]);

  return {areaHistory, candleHistory};
};
