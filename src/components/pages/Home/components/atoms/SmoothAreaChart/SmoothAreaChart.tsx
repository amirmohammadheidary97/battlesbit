import {useEffect, useRef} from 'react';
import {createChart, LineType} from 'lightweight-charts';

const SmoothAreaChart = () => {
  const chartContainerRef = useRef<any>(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 113,
      height: 49,
      layout: {
        background: {color: 'transparent'},
        textColor: 'transparent',
      },
      grid: {
        vertLines: {visible: false},
        horzLines: {visible: false},
      },
      rightPriceScale: {
        visible: false,
        borderVisible: false,
        scaleMargins: {
          top: 0,
          bottom: 0,
        },
      },
      timeScale: {
        visible: false,
        borderVisible: false,
      },
      crosshair: {
        vertLine: {visible: false},
        horzLine: {visible: false},
      },
      handleScroll: false,
      handleScale: false,
    });

    const areaSeries = chart.addAreaSeries({
      topColor: 'rgba(255, 215, 0, 0.6)',
      bottomColor: 'rgba(255, 215, 0, 0)',
      lineColor: '#FFD700',
      lineWidth: 1,
      priceLineVisible: false,
      lineType: LineType.Curved,
    });

    areaSeries.setData([
      {time: '2022-01-01', value: 10},
      {time: '2022-01-02', value: 18},
      {time: '2022-01-03', value: 30},
      {time: '2022-01-04', value: 25},
      {time: '2022-01-05', value: 22},
      {time: '2022-01-06', value: 28},
      {time: '2022-01-07', value: 26},
      {time: '2022-01-08', value: 40},
      {time: '2022-01-09', value: 38},
      {time: '2022-01-10', value: 50},
    ]);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: '113px',
        height: '49px',
        overflow: 'hidden',
        background: 'transparent',
        pointerEvents: 'none',
        borderRadius: '8px',
      }}
    />
  );
};

export default SmoothAreaChart;
