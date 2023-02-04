import * as classes from './index.css';

export function Spinner({
  id = '',
  className = '',
  color1 = 'green',
  color2 = 'lightGreen',
  text = 'Loading...',
  textColor = '',
  // noGradientText = false,
}) {
  let style = `.${classes.spinnerText} {
    background: linear-gradient(90deg, ${color1}, ${color2});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }`;

  if (textColor !== '') {
    style = `
      .${classes.spinnerText} {
      font-weight: bold;
      color: ${textColor}
      }`;
  }

  return (
    <div id={id} className={`${classes.spinnerWrapper} ${className}`}>
      <div className={classes.spinner}>
        <svg className={classes.viewBox} viewBox='0 0 50 50'>
          <circle
            className={classes.circle}
            cx='25'
            cy='25'
            r='22.5'
            fill='none'
            strokeWidth='5'
            stroke='url(#myGradient)'
          ></circle>
          <defs>
            <linearGradient id='myGradient'>
              <stop offset='0%' stopColor={color1} />
              <stop offset='100%' stopColor={color2} />
            </linearGradient>
          </defs>
        </svg>
        <div className={`gradientText ${classes.spinnerText}`}>{text}</div>
      </div>
      <style>{style}</style>
    </div>
  );
}
