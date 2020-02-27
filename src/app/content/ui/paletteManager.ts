import { useSelector } from 'react-redux';
import { Mode, Palette, COLORS, PaletteKeys } from './styles.const';

export type ModePalette = { [key in PaletteKeys]: (alpha?: number) => string };

const palettes: { [key in Mode]: Palette } = {
  dark: {
    topSectionBorder: '#000000',
    topSectionBackground: COLORS.DARKGREY,
    background: COLORS.BLACK,
    primary: COLORS.WHITE,
    keyColor: COLORS.PURPLE,
    objectColor: COLORS.WHITE,
    nullColor: COLORS.LIGHTGREY,
    stringColor: COLORS.RED,
    numberColor: COLORS.MAGENTA,
    transparentBackground: COLORS.DARKGREY,
  },
  light: {
    topSectionBorder: COLORS.DARKGREY,
    topSectionBackground: COLORS.LIGHTGREY,
    background: COLORS.WHITE,
    primary: COLORS.BLACK,
    keyColor: COLORS.BLACK,
    objectColor: COLORS.BLACK,
    nullColor: COLORS.DARKGREY,
    stringColor: COLORS.RED,
    numberColor: COLORS.MAGENTA,
    transparentBackground: COLORS.LIGHTGREY,
  }
};

const colorMethod = (color: string) => (alpha: number = 1) => {
  var bigint = parseInt(color.replace('#', ''), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const getPalette = (mode: Mode) => {
  const basePalette: Palette = palettes[mode];

  return Object.keys(basePalette).reduce((finalPalette, key) => {
    return {
      ...finalPalette,
      [key]: colorMethod(basePalette[key]),
    };
  }, {} as ModePalette);
};

export const usePalette = () => {
  const mode = useSelector(store => store.mode);
  return getPalette(mode);
};
