import React, { useEffect, useState } from 'react';
import './App.scss';
import { Select } from './components/Select/Select';
import * as SeriesAPI from "./utils/SeriesAPI";

function App() {
  const [seriesOptions, setSeriesOptions] = useState<string[]>([]);
  const [selectedSeriesData, setSelectedSeriesData] = useState<object[]>([]);
  const [selectedSeriesResults, setSelectedSeriesResults] = useState<object>([]);
  
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
  }, [setSeriesOptions]);

  const handleUpdateSelection = async (e: string) => {
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
  }


  return (
    <div className="app">
      <header className="app--header">
        <h2 className="app--header__title">Web Dashboard</h2>
      </header>
      <div className="app--body">
        <Select options={seriesOptions} handleUpdateSelection={handleUpdateSelection}/>
      </div>
    </div>
  );
}

export default App;
