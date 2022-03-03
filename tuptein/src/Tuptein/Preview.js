import React from 'react';

export default (props) => {

  const text = props.text.split('');

  return (
    <div className="border rounded p-3 mb-4">
      {
        text.map((s,i) => {
          let color;
          if (i < props.userInput.length) {
            color = s === props.userInput[i] ? '#ffffff' : '#FA8072';
          }
          return <span key={i} style={{color: color}}>{s}</span>
        })
      }
    </div>
  )
}