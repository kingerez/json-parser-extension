export type Mode = 'dark' | 'light';

export const MODES = {
  'DARK': 'dark',
  'LIGHT': 'light',
};

export type PaletteKeys = 'background' | 'primary' | 'topSectionBorder' | 'topSectionBackground' | 'keyColor' | 'objectColor' | 'nullColor' | 'stringColor' | 'numberColor' | 'transparentBackground';

export type Palette = {
  [key in PaletteKeys]: string
};

export const COLORS = {
  BLACK: '#292929',
  DARKGREY: '#333333',
  LIGHTGREY: '#cfcfcf',
  WHITE: '#efefef',
  PURPLE: '#FF6EEC',
  RED: '#E93F3B',
  MAGENTA: '#9980ff',
};
