import * as React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';
import { JSONNode } from './JSONNode';
import { JSONNodeTitle } from './JSONNodeTitle';

const getStyles = () => StyleSheet.create({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
    marginTop: '45px',
    padding: '0 10px',
  },
});

export const JSONContainer: React.FC = (props) => {
  const json = useSelector(state => state.json);
  const styles = getStyles();

  return (
    <div className={css(styles.wrapper)}>
      <JSONNodeTitle field="" value={json} />
    </div>
  );
};
