import React from 'react';

export default (props) => {
    const wpm = (props.symbols/5) / (props.sec/60);
    return (
      <div>{Math.round(wpm)} wpm</div>
    )
  return null;
}