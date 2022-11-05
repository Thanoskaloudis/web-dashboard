import React from 'react';
import { ISelect } from './Select.model';
import './Select.scss';

export const Select = (props: ISelect) => {

  const handleSeriesSelection = (e: string) => {
    props.handleUpdateSelection(e);
  }

  return (
    <div className="select">
      <h3 className="select--header">Select Series</h3>
      <select className="select--selection" onChange={(e) => handleSeriesSelection(e.target.value)}>
        {props.options.map(option => 
           <option className="select--selection__option" value={option} key={option}>{option}</option>
        )}
      </select>
    </div>
  )
}
