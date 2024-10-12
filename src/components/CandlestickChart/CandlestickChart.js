
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { createChart } from 'lightweight-charts';

const CandlestickChart = ({ selectedCurrency }) => {
  const chartContainerRef = useRef();
  const [chart, setChart] = useState(null);
  const [candlestickSeries, setCandlestickSeries] = useState(null);

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
    //   watermark: { visible: false },
    });

    setChart(chart);
    console.log('Chart initialized'); // Debugging line
  }, [chartContainerRef]);

  useEffect(() => {
    if (!chart) return;

    const fetchCandleData = async () => {
      try {
        const endTime = Date.now();
        const startTime = endTime - 86400 * 360 * 1000; // 7 days ago

        const response = await axios.get(
          `https://api.binance.com/api/v3/klines?symbol=${selectedCurrency}&interval=1d&startTime=${startTime}&endTime=${endTime}`
        );

        console.log('API response:', response.data);

        const data = response.data.map(([timestamp, open, high, low, close]) => ({
          time: Math.floor(timestamp / 1000),
          open: parseFloat(open),
          high: parseFloat(high),
          low: parseFloat(low),
          close: parseFloat(close),
        }));

        // Clear existing series before adding new data
        if (candlestickSeries) {
          chart.removeSeries(candlestickSeries);
        }

        const newCandlestickSeries = chart.addCandlestickSeries({
          upColor: 'rgba(0,255,0,0.8)',
          borderUpColor: 'rgba(0,255,0,0.8)',
          wickUpColor: 'rgba(0,255,0,0.8)',
          downColor: 'rgba(255,0,0,0.8)',
          borderDownColor: 'rgba(255,0,0,0.8)',
          wickDownColor: 'rgba(255,0,0,0.8)',
        });

        newCandlestickSeries.setData(data);
        setCandlestickSeries(newCandlestickSeries);

      } catch (error) {
        console.error('Error fetching candlestick data:', error.response ? error.response.data : error.message);
      }
    };

    fetchCandleData();
  }, [chart, selectedCurrency]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#1e1e1e' }}
    >
    
    </div>
  );
};

export default CandlestickChart;



