import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

interface JSONNodeOpenerProps {
  value: any
  isOpen: boolean
}

const getStyles = (isOpen: boolean) => StyleSheet.create({
  opener: {
    position: 'relative',
    color: 'darkgrey',
    fontSize: '8px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  caret: {
    position: 'absolute',
    fontSize: '10px',
    top: '-6px',
    left: '-7px',
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
    transition: '250ms',
    transitionTimingFunction: 'ease-out',
  }
});

const hasChildren = (value: any) => {
  return value !== null && typeof value === 'object';
};

export const JSONNodeOpener: React.FunctionComponent<JSONNodeOpenerProps> = (props) => {
  const { value, isOpen } = props;
  const styles = getStyles(isOpen);

  return (
    hasChildren(value) && <span className={css(styles.opener)}><span className={css(styles.caret)}>&#9658;</span></span>
  );
};
