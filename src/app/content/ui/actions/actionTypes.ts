import { Mode } from "../styles.const";

export interface Action {
  type: string
}

export interface ModeAction extends Action {
  type: 'changeMode'
  mode: Mode
}

export interface MouseAction extends Action {
  type: 'mouseOver' | 'mouseLeave'
  element: HTMLElement
}
