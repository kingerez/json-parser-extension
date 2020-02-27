import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import { getPalette, ModePalette } from '../paletteManager';
import { Switch } from './Switch';
import { ModeAction } from '../actions/actionTypes';

const getStyles = (palette: ModePalette) => StyleSheet.create({
  wrapper: {
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    right: 0,
    height: '40px',
    borderBottom: `1px solid ${palette.topSectionBorder()}`,
    backgroundColor: palette.topSectionBackground(),
    lineHeight: '40px',
    color: palette.primary(),
    padding: '0 20px',
    boxShadow: '1px 2px 5px rgba(0,0,0, 0.3)',
  },
  switchWrapper: {
    marginLeft: 'auto',
    alignSelf: 'center',
  }
});

export const Top: React.FC = () => {
  const mode = useSelector(store => store.mode);
  const dispatch = useDispatch();
  const palette = getPalette(mode);
  const styles = getStyles(palette);

  const switchCallback = React.useCallback(() => {
    const modeAction: ModeAction = {
      type: 'changeMode',
      mode,
    };

    dispatch(modeAction);
  }, [mode]);

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.switchWrapper)}>
        <Switch rightSwitch="Light side" leftSwitch="Dark side" callback={switchCallback} />
      </div>
    </div>
  );
};
