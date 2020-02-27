import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { JSONNodeTitle } from './JSONNodeTitle';

interface JSONNodeProps {
  data: { [key: string]: any }
  isOpen: boolean
}

const getStyles = (isOpen: boolean, height: number) => {
  return StyleSheet.create({
    valueWrapper: {
      paddingLeft: '10px',
      overflow: 'hidden',
      transition: '150ms',
      height: isOpen ? `${height}px` : 0,
      transitionTimingFunction: 'ease-out',
    },
  })
};

export const JSONNode: React.FC<JSONNodeProps> = (props) => {
  const { data, isOpen } = props;
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState();
  const styles = getStyles(isOpen, height);

  React.useEffect(() => {
    if (ref.current !== null) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref.current, setHeight]);

  return (
    <div className={css(styles.valueWrapper)} ref={ref}>
      {Object.keys(data).map((key, index) => <JSONNodeTitle key={index} field={key} value={data[key]} />)}
    </div>
  );
};
