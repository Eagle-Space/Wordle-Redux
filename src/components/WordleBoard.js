import React from 'react';

function WordleBoard() {
  const words = ['M I G H T', 'F L O O D', 'S T R A Y', '_ _ _ _ _', '_ _ _ _ _', '_ _ _ _ _'];
  const boardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  };
  const cellStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ddd',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 5px',
  };

  return (
    <div style={boardStyle}>
      {words.map((word, index) => (
        <div key={index} style={rowStyle}>
          {word.split(' ').map((letter, letterIndex) => (
            <div key={letterIndex} style={cellStyle}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WordleBoard;
