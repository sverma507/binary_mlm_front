// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import { createChart } from 'lightweight-charts';

// const LineChart = ({ selectedCurrency }) => {
//   const chartContainerRef = useRef();
//   const [chart, setChart] = useState(null);

//   useEffect(() => {
//     if (!chartContainerRef.current) return;

//     // Initialize chart
//     const chart = createChart(chartContainerRef.current, {
//       width: chartContainerRef.current.clientWidth,
//       height: chartContainerRef.current.clientHeight,
//       crossHair: { mode: 0 },
//       layout: { backgroundColor: '#1e1e1e', textColor: '#d1d4dc' },
//       grid: { vertLines: { color: '#555' }, horzLines: { color: '#555' } },
//       priceScale: { borderColor: '#555' },
//       timeScale: { borderColor: '#555' },
//     });

//     setChart(chart);
//     console.log('Chart initialized'); // Debugging line
//   }, [chartContainerRef]);

//   useEffect(() => {
//     if (!chart) return;

//     const fetchLineData = async () => {
//       try {
//         const endTime = Date.now();
//         const startTime = endTime - 86400 * 360 * 1000; // 7 days ago

//         const response = await axios.get(
//           `https://api.binance.com/api/v3/klines?symbol=${selectedCurrency}&interval=1d&startTime=${startTime}&endTime=${endTime}`
//         );

//         console.log('API response:', response.data);

//         const data = response.data.map(([timestamp, open, high, low, close]) => ({
//           time: Math.floor(timestamp / 1000),
//           value: parseFloat(close),
//         }));

//         const lineSeries = chart.addLineSeries({
//           color: 'rgba(100,200,0,1)',  // Green line color
//           lineWidth: 2,
//           crossHairMarker: {
//             color: 'rgba(0,255,0,0.8)',
//             borderColor: 'rgba(0,255,0,0.8)',
//             borderWidth: 2,
//           },
//         });

//         lineSeries.setData(data);

//         // Add points to the chart
//         const pointSeries = chart.addSeries({
//           color: 'rgba(255,0,0,0.8)',  // Red point color
//           size: 4,
//           type: 'scatter',
//         });

//         pointSeries.setData(data.map(point => ({
//           ...point,
//           value: point.value,
//           color: 'rgba(255,0,0,0.8)',
//         })));
        
//       } catch (error) {
//         console.error('Error fetching line chart data:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchLineData();
//   }, [chart, selectedCurrency]);

//   return (
//     <div
//       ref={chartContainerRef}
//       style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#1e1e1e' }}
//     >
//       <style>
//         {`
//           .tv-lightweight-charts-watermark {
//             display: none !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default LineChart;























import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { createChart } from 'lightweight-charts';

const LineChart = ({ selectedCurrency }) => {
  const chartContainerRef = useRef();
  const [chart, setChart] = useState(null);
  const [lineSeries, setLineSeries] = useState(null);
  const [scatterSeries, setScatterSeries] = useState(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Initialize chart
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      crossHair: { mode: 0 },
      layout: { backgroundColor: '#1e1e1e', textColor: '#d1d4dc' },
      grid: { vertLines: { color: '#555' }, horzLines: { color: '#555' } },
      priceScale: { borderColor: '#555' },
      timeScale: { borderColor: '#555' },
    });

    // Create line series
    const lineSeries = chart.addLineSeries({
      color: 'rgba(100,200,0,1)',  // Green line color
      lineWidth: 2,
    });

    // Create scatter series
    const scatterSeries = chart.addLineSeries({
      color: 'rgba(255,0,0,0.8)',  // Red point color
      lineWidth: 0, // No line width for scatter series
      dot: {
        color: 'rgba(255,0,0,0.8)', // Red dot color
        radius: 4, // Dot size
      },
    });

    setChart(chart);
    setLineSeries(lineSeries);
    setScatterSeries(scatterSeries);

    console.log('Chart initialized'); // Debugging line

    // Cleanup function to remove old chart
    return () => {
      chart.remove();
    };
  }, [chartContainerRef]);

  useEffect(() => {
    if (!chart || !lineSeries || !scatterSeries) return;

    const fetchLineData = async () => {
      try {
        const endTime = Date.now();
        const startTime = endTime - 86400 * 360 * 1000; // 360 days ago

        const response = await axios.get(
          `https://api.binance.com/api/v3/klines?symbol=${selectedCurrency}&interval=1d&startTime=${startTime}&endTime=${endTime}`
        );

        console.log('API response:', response.data);

        const data = response.data.map(([timestamp, open, high, low, close]) => ({
          time: Math.floor(timestamp / 1000),
          value: parseFloat(close),
        }));

        lineSeries.setData(data);

        // Update scatter points
        scatterSeries.setData(data.map(point => ({
          time: point.time,
          value: point.value,
        })));

      } catch (error) {
        console.error('Error fetching line chart data:', error.response ? error.response.data : error.message);
      }
    };

    fetchLineData();
  }, [chart, lineSeries, scatterSeries, selectedCurrency]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#1e1e1e' }}
    >
      <style>
        {`
          .tv-lightweight-charts-watermark {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default LineChart;
