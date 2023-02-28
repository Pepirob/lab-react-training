import React from 'react';

function BoxColor({ r, g, b }) {
  const colorStyles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div>
      <p style={colorStyles}>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;
