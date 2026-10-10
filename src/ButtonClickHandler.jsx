import React from 'react';

function ButtonClickHandler() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <h2>Button Click Event</h2>

      <button onClick={handleClick}>
        Button
      </button>
    </div>
  );
}

export default ButtonClickHandler;