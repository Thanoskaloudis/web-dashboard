import React, { useEffect, useState } from 'react';
import './App.scss';
import { Select } from './components/Select/Select';
import * as SeriesAPI from "./utils/SeriesAPI";

function App() {
  const [seriesOptions, setSeriesOptions] = useState<string[]>([]);
  
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

  const handleUpdateSelection = (e: string) => {
    console.log(e)
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
