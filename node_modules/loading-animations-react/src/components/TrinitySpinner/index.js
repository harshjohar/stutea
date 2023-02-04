import * as classes from './index.css';

export function TrinitySpinner({
  color = 'red',
  text = 'Loading...',
  id = '',
  className = '',
}) {
  const style = `.${classes.trinitySpinnerText} { color: ${color} }`;
  return (
    <div id={id} className={`${classes.trinitySpinnerWrapper} ${className}`}>
      <div className={classes.trinitySpinner}>
        <svg className={classes.spinner} viewBox='0 0 100 100'>
          <defs>
            <filter id='shadow'>
              <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='black' />
            </filter>
          </defs>
          <circle
            className={classes.circle}
            style={{
              fill: 'transparent',
              stroke: color,
              strokeWidth: '7px',
              strokeLinecap: 'round',
              filter: 'url(#shadow)',
            }}
            cx='50'
            cy='50'
            r='45'
          />
        </svg>
        <div className={classes.trinitySpinnerText}>{text}</div>
      </div>
      <style>{style}</style>
    </div>
  );
}
