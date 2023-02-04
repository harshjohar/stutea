import * as classes from './index.css';

export function Waves({
  backgroundColor = '#000',
  waveColor = 'cyan',
  text = 'Loading...',
  id = '',
  className = '',
}) {
  const style = `
    .${classes.waves} {
      background-color: ${backgroundColor}
    }
    .${classes.wave} {
      background: linear-gradient(45deg, ${waveColor}, #fff)
    }`;
  // Setup array of wave elements
  const waves = new Array(10).fill('').map((e, index) => {
    return (
      <div
        key={index}
        className={classes.wave}
        style={{ animationDelay: `0.${index}s` }}
      ></div>
    );
  });

  return (
    <div id={id} className={`${classes.wavesWrapper} ${className}`}>
      <div className={classes.waves}>{waves}</div>
      <div className={classes.wavesText}>{text}</div>
      <style>{style}</style>
    </div>
  );
}
