import {useEffect, useState} from 'react';
// import gsap from 'gsap';
import type {IChartApi, ISeriesApi} from 'lightweight-charts';

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
  chart?: IChartApi;
};
//#region
// const animateUpdate = newData => {
//   const totalSteps = 30; // Number of animation steps
//   const interval = 16; // ~60fps
//   let step = 0;

//   const oldData = currentData;
//   const interpolatedData = [];

//   // Interpolate the data
//   for (let i = 0; i < newData.length; i++) {
//     const oldPoint = oldData[i] || {time: newData[i].time, value: 0};
//     const newPoint = newData[i];
//     const steps = [];

//     for (let j = 1; j <= totalSteps; j++) {
//       steps.push({
//         time: newPoint.time,
//         value:
//           oldPoint.value + ((newPoint.value - oldPoint.value) * j) / totalSteps,
//       });
//     }

//     interpolatedData.push(...steps);
//   }

//   const updateStep = (areaSeriesRef, interpolatedData) => {
//     if (step < interpolatedData.length) {
//       const currentStepData = interpolatedData.slice(0, step + 1);
//       areaSeriesRef.current.setData(currentStepData);
//       step++;
//       setTimeout(updateStep, interval);
//     } else {
//       setCurrentData(newData);
//     }
//   };

//   updateStep();
// };
//#endregion
export const useUpdateData = ({
  chartType,
  areaSeries,
  candleSeries,
  seriesCleared,
  // chart,
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
      // const d = new Date(currentDate.setDate(currentDate.getDate() + 1));
      const next = {
        // time: {
        //   year: d.getFullYear(),
        //   month: d.getMonth(),
        //   day: d.getDate(),
        // },
        time: new Date(currentDate.setDate(currentDate.getDate() + 1))
          .toISOString()
          .slice(0, 10),
        value: 53 - 30 * Math.random(),
      };
      // requestAnimationFrame(() =>
      (areaSeries.current as ISeriesApi<'Area'>).update(next);
      // );

      // const currentData = areaSeries.current.data();
      // console.log(currentData);

      // gsap.to(currentData, {
      //   // 0.5 seconds animation duration
      //   duration: 0.5,
      //   data: [next], // Target the new data
      //   onUpdate: dd => {
      //     console.log(dd);

      //     areaSeries.current.update(currentData); // Update the chart with intermediate values
      //     // chart.timeScale().requestUpdate(); // Request redraw
      //   },
      //   ease: 'power1.inOut',
      // });
      // (chart as IChartApi).timeScale().requestUpdate();
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
