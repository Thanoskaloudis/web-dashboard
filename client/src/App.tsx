import React, { useEffect, useState } from 'react';
import './App.scss';
import { Select } from './components/Select/Select';
import { Predictions } from './components/Widgets/Predictions/Predictions';
import * as SeriesAPI from "./utils/SeriesAPI";

function App() {
  const [seriesOptions, setSeriesOptions] = useState<string[]>([]);
  const [selectedSeriesData, setSelectedSeriesData] = useState<object[]>([]);
  const [selectedSeriesResults, setSelectedSeriesResults] = useState<object>([]);
  const [selectedSeries, setSelectedSeries] = useState('');
  const [compareData, setCompareData] = useState<object[]>([]);
  
  useEffect(() => {
    const getSeries = async () => {
      try {
        const res = await SeriesAPI.getSeries();
        setSeriesOptions(res);

      } catch(error) {
        console.log('Fetch error: ', error);
      }
    };

    getSeries();
    createPredictionData();
  }, [setSeriesOptions, selectedSeriesData, selectedSeriesResults]);

  const handleUpdateSelection = async (e: string) => {
    setSelectedSeries(e);

    try {
      const data = await SeriesAPI.getData(e);
      const results = await SeriesAPI.getResults(e);
      console.log(results);
      console.log(data);
      setSelectedSeriesData(data);
      setSelectedSeriesResults(results);

    } catch(error) {
      console.log('Fetch error: ', error);
    }

    createPredictionData();
  }

  const createPredictionData = () => {
    const data = [];
    const length = selectedSeriesData.length;

    for (let i = 0; i < length; i++) {
      data.push({
          predictions:(selectedSeriesResults as any).predictions[i].prediction,
          actual: +(selectedSeriesData[i] as any)[selectedSeries],
      });
    }

    setCompareData(data);
  }


  return (
    <div className="app">
      <header className="app--header">
        <h2 className="app--header__title">Web Dashboard</h2>
      </header>
      <div className="app--body">
        <Select options={seriesOptions} handleUpdateSelection={handleUpdateSelection}/>
        <Predictions data={compareData}/>
      </div>
    </div>
  );
}

export default App;
