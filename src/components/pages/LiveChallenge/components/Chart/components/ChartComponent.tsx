import {useEffect, useRef, useState} from 'react';
import {ColorType, createChart} from 'lightweight-charts';

import {useUpdateData} from './useUpdateData';

import {theme} from '@/config/theme';

const colors = {
  backgroundColor: theme.palette.background.paper,
  lineColor: '#2962FF',
  textColor: '#fff',
  areaTopColor: '#2962FF',
  areaBottomColor: 'rgba(41, 98, 255, 0.28)',
};

const {areaBottomColor, areaTopColor, backgroundColor, lineColor, textColor} =
  colors;

export const ChartComponent = ({chartType, prevoisChartType}: any) => {
  const chart: any = useRef();

  const chartContainerRef: any = useRef();
  const [seriesCleared, setSeriesCleared] = useState(true);

  const areaSeries: any = useRef(undefined);
  const candleSeries: any = useRef(undefined);

  useEffect(() => {
    if (
      !chartContainerRef?.current ||
      !chartContainerRef?.current?.clientWidth ||
      !chartContainerRef?.current?.clientHeight
    )
      return;
    const handleResize = () => {
      chart.current.applyOptions({
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
      });
    };
    chart.current = createChart(chartContainerRef.current, {
      layout: {
        background: {type: ColorType.Solid, color: backgroundColor},
        textColor,
        fontSize: 8,
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      grid: {
        horzLines: {
          visible: false,
        },
        vertLines: {
          visible: false,
        },
      },
    });
    chart.current.timeScale().fitContent();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  useEffect(() => {
    if (!seriesCleared) {
      console.log('Clear Series');
      if (prevoisChartType === 'area') {
        chart?.current.removeSeries(areaSeries.current);
        areaSeries.current = undefined;
      }
      if (prevoisChartType === 'candlestick') {
        chart?.current.removeSeries(candleSeries.current);
        areaSeries.current = undefined;
      }
      setSeriesCleared(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartType]);

  const {areaHistory, candleHistory} = useUpdateData({
    areaSeries,
    candleSeries,
    chartType,
    seriesCleared,
  });

  useEffect(() => {
    if (
      areaHistory &&
      chart?.current &&
      seriesCleared &&
      chartType === 'area'
    ) {
      console.log('add area');
      setSeriesCleared(false);
      areaSeries.current = chart.current.addAreaSeries({
        lineColor,
        topColor: areaTopColor,
        bottomColor: areaBottomColor,
      });
      areaSeries.current.setData(areaHistory);
    }
  }, [areaHistory, chart, chartType, seriesCleared]);

  useEffect(() => {
    if (
      candleHistory &&
      chart?.current &&
      seriesCleared &&
      chartType === 'candlestick'
    ) {
      console.log('add candle');
      setSeriesCleared(false);
      candleSeries.current = chart.current.addCandlestickSeries({
        lineColor,
        topColor: areaTopColor,
        bottomColor: areaBottomColor,
      });
      candleSeries.current.setData(candleHistory);
    }
  }, [candleHistory, chart, seriesCleared, chartType]);

  return (
    <div
      style={{
        width: '100%',
        height: 'calc(35vh - 3.5rem)',
      }}
      ref={chartContainerRef}
    />
  );
};
