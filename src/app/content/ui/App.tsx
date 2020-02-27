import * as React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Mode } from './styles.const';
import { getPalette, ModePalette } from './paletteManager';
import { Top } from './components/Top';
import { JSONContainer } from './components/JSONContainer';

const getStyles = (palette: ModePalette) => StyleSheet.create({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: palette.background(),
    overflow: 'auto',
  },
});

export const App: React.FC = () => {
  const mode = useSelector(state => state.mode);
  const palette = getPalette(mode);
  const styles = getStyles(palette);
  const fontStyle = `
    * { 
      font-family: sans-serif;
      font-size: 14px;
      line-height: 18px;
    }
  `;

  return (
    <div className={css(styles.wrapper)}>
      <style>{fontStyle}</style>
      <Top />
      <JSONContainer />
    </div>
  );
};
