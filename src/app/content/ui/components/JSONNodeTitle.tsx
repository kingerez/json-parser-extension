import * as React from 'react';
import { StyleSheet, css, StyleDeclaration, CSSProperties } from 'aphrodite/no-important';
import { useSelector } from 'react-redux';
import { JSONNode } from './JSONNode';
import { JSONNodeOpener } from './JSONNodeOpenner';
import { usePalette, ModePalette } from '../paletteManager';
import { useHoverState } from './hover.utils';
import { copyToClipboard } from './clipboard.utils';

interface JSONNodeTitleProps {
  field: string
  value: any
}

interface Styles {
  hover: CSSProperties
  primitiveContainer: CSSProperties
  wrapper: CSSProperties
  value: CSSProperties
  field: CSSProperties
  object: CSSProperties
  null: CSSProperties
}

const getStyles = (palette: ModePalette) => StyleSheet.create({
  hover: {
    position: 'relative',
    backgroundColor: palette.transparentBackground(),
    ':before': {
      position: 'absolute',
      content: '"Click to copy"',
      top: 0,
      right: 0,
      color: 'white',
      fontSize: '12px',
      backgroundColor: 'black',
      padding: '2px 4px',
    }
  },
  primitiveContainer: {
    display: 'flex',
  },
  wrapper: {
    paddingLeft: '7px',
    cursor: 'pointer',
  },
  value: {
    paddingLeft: '7px',
    cursor: 'pointer',
  },
  field: {
    color: palette.keyColor(),
  },
  object: {
    color: palette.objectColor(),
  },
  null: {
    color: palette.nullColor(),
  },
  string: {
    color: palette.stringColor(),
  },
  number: {
    color: palette.numberColor(),
  }
});

const getValue = (value: any) => {
  if (!value) return;

  if (typeof value === 'object') {
    return Array.isArray(value) ? `Array[${value.length}]` : 'Object';
  }

  if (typeof value === 'string') {
    return <span>{`"${value}"`}</span>;
  }

  return <span>{value}</span>;
};

const valueForCopy = (value: any) => {
  if (typeof value === 'undefined' || value === null) return value;
  if (typeof value === 'object') return JSON.stringify(value);
  if (typeof value === 'string') return value.slice(0, value.length);
  return value;
};

const getNextNode = (value: any, isOpen: boolean) => {
  if (!value) return;
  return typeof value === 'object' && <JSONNode data={value} isOpen={isOpen} />;
};

const getClassNameByValue = (value: any, styles: StyleDeclaration<Styles>) => {
  if (value === null || typeof value === 'undefined') return styles.null;
  return styles[typeof value];
};

const getFieldText = (field: string) => {
  return field ? `${field}:` : '';
};

export const JSONNodeTitle: React.FunctionComponent<JSONNodeTitleProps> = (props) => {
  const { field, value } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const hovering = useSelector(state => state.hovering);
  const styles = getStyles(usePalette()) as Styles;
  const isPrimitive = typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';

  const ref = useHoverState();

  const toggleOpen = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const containerClasses = [];
  isPrimitive && containerClasses.push(styles.primitiveContainer);
  hovering !== null && hovering === ref.current && containerClasses.push(styles.hover);

  const onClickCopy = (e) => {
    e.stopPropagation();
    copyToClipboard(valueForCopy(value));
  };

  return (
    <div className={css(...containerClasses)} ref={ref} onClick={onClickCopy}>
      <span className={css(styles.wrapper)} onClick={toggleOpen}>{<JSONNodeOpener value={value} isOpen={isOpen} />}<span className={css(styles.field)}>{getFieldText(field)}</span></span>
      <span className={css(styles.value, getClassNameByValue(value, styles))}>{getValue(value)}</span>
      {getNextNode(value, isOpen)}
    </div>
  );
};
