import React from 'react';
import * as classes from './index.css';

export function Dots({
  dotColors = ['blue', 'violet', 'red', 'orange', 'yellow', 'green'],
  text = 'Loading...',
  id = '',
  className = '',
}) {
  // Setup newColors array
  const newColors = [];
  let dotColorsIndex = 0;
  let newColorsIndex = 0;
  while (newColorsIndex <= 5) {
    if (dotColors[dotColorsIndex]) {
      newColors.push(dotColors[dotColorsIndex]);
      newColorsIndex += 1;
      dotColorsIndex += 1;
    } else {
      dotColorsIndex = 0;
    }
  } // Setup array of dot elements

  let dots = new Array(6).fill('').map((e, index) => {
    return (
      <div
        key={index}
        className={classes.dot}
        style={{
          backgroundColor: newColors[index],
          animationDelay: `0.${index}s`,
        }}
      ></div>
    );
  });

  return (
    <div id={id} className={`${classes.dotsWrapper} ${className}`}>
      <div className={classes.dots}>{dots}</div>
      <div className={classes.dotsText}>{text}</div>
    </div>
  );
}
