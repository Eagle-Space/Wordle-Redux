import React from 'react';

function Keyboard() {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  const buttonStyle = {
    backgroundColor: '#f1f1f1',
    border: '1px solid #ddd',
    borderRadius: '5px',
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '5px',
    padding: '10px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
  };

  return (
    <div>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center' }}>
          {row.map((key, keyIndex) => (
            <button key={keyIndex} style={buttonStyle}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
