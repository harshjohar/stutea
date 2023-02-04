import * as classes from './index.css';

export function ProgressBar({
  text = 'Loading...',
  borderColor = 'navy',
  sliderColor = 'white',
  sliderBackground = 'red',
  id = '',
  className = '',
}) {
  const style = `
    .${classes.progressBar} {
      background-color: ${borderColor};
    }
    .${classes.sliderBackground} {
      background-color: ${sliderBackground};
    }
    .${classes.slider} {
      background-color: ${sliderColor};
    }`;
  return (
    <div id={id} className={`${classes.progressBarWrapper} ${className}`}>
      <div className={classes.progressBar}>
        <div className={classes.sliderBackground}>
          <div className={classes.slider}></div>
        </div>
      </div>
      <div className={classes.progressBarText}>{text}</div>
      <style>{style}</style>
    </div>
  );
}
