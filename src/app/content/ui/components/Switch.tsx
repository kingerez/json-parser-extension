import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { ModePalette, usePalette } from '../paletteManager';

interface SwitchProps {
  rightSwitch: string
  leftSwitch: string
  callback: (checked: boolean) => any
}

const getStyles = (palette: ModePalette) => StyleSheet.create({
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '14px',
    position: 'relative',
  },
  input: {
    position: 'absolute',
    opacity: 0,
    width: 0,
    height: 0,
  },
  switch: {
    position: 'relative',
    border: `1px solid ${palette.primary()}`,
    height: '20px',
    width: '40px',
    borderRadius: '20px',
    margin: '0 10px',
    transition: '250ms',
  },
  inner: {
    position: 'absolute',
    backgroundColor: palette.primary(0.6),
    width: '18px',
    height: '18px',
    borderRadius: '100%',
    top: '1px',
    transition: '250ms',
  },
  left: {
    left: '1px',
  },
  right: {
    left: '21px',
  }
});

export const Switch: React.FC<SwitchProps> = (props) => {
  const { rightSwitch, leftSwitch, callback } = props;
  const [checked, setChecked] = React.useState(false);
  const palette = usePalette();
  const styles = getStyles(palette);

  const onChange = React.useCallback(() => {
    setChecked(!checked)
    callback(!checked);
  }, [checked, setChecked, callback]);

  const switchSideClassName = checked ? styles.right : styles.left;

  return (
    <label className={css(styles.wrapper)}>
      <span>{leftSwitch}</span>
      <input type="checkbox" className={css(styles.input)} checked={checked} onChange={onChange} />
      <div className={css(styles.switch)}>
        <div className={css(styles.inner, switchSideClassName)} />
      </div>
      <span>{rightSwitch}</span>
    </label>
  );
};
