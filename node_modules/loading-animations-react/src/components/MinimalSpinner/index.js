import * as classes from './index.css';

export function MinimalSpinner({
  text = 'Loading...',
  color = 'blue',
  id = '',
  className = '',
}) {
  const style = `
    .${classes.minimalSpinner} {
      border-color: transparent ${color} transparent ${color};
    }
    .${classes.minimalSpinnerText} {
      color: ${color};
    }`;
  return (
    <div id={id} className={`${classes.minimalSpinnerWrapper} ${className}`}>
      <div className={classes.minimalSpinner}>
        <div className={classes.minimalSpinnerText}>{text}</div>
      </div>
      <style>{style}</style>
    </div>
  );
}
