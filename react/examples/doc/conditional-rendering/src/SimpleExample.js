import React from 'react';

function SimpleExample() {
  const showContent = true;

  return (
    <div className="App">
      {showContent
        ? <div>Show Content is True</div>
        : <div>Show Content is False</div>
      }
    </div>
  );
}

export default SimpleExample;
