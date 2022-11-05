import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Predictions.scss';

interface IPredictions {
  data: object[]
}

export const Predictions = (props: IPredictions) => {
  return (
    <div className="predictions">
      <h3 className="predictions--header">Actual vs Predictions Plot</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={props.data}>
          <XAxis/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="actual" stroke="#8884d8" />
          <Line type="monotone" dataKey="predictions" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  )
}
