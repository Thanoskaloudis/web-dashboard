import React, { useEffect } from 'react';
import './App.scss';
import * as SeriesAPI from "./utils/SeriesAPI";

function App() {
  
  useEffect(() => {
    const getSeries = async () => {
      try {
        const res = await SeriesAPI.getSeries();
        console.log(res);

      } catch(error) {
        console.log('Fetch error: ', error);
      }
    };

    getSeries();
  }, []);

  return (
    <div className="app">
      <header className="app--header">
        <h2 className="app--header__title">Web Dashboard</h2>
      </header>
      <div className="app--body">

      </div>
    </div>
  );
}

export default App;
