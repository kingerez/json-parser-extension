import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MouseAction } from '../actions/actionTypes';

export const useHoverState = (): React.MutableRefObject<HTMLDivElement> => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const element = useSelector(state => state.hovering);

  const onHover = React.useCallback((e) => {
    e.stopPropagation();
    if (element && element === ref.current) {
      return;
    }

    const action: MouseAction = {
      type: 'mouseOver',
      element: ref.current,
    };
    dispatch(action);
  }, [dispatch, useSelector]);

  const onBlur = React.useCallback(() => {
    const action: MouseAction = {
      type: 'mouseLeave',
      element: ref.current,
    };
    dispatch(action);
  }, [dispatch]);

  React.useEffect(() => {
    ref.current.addEventListener('mouseleave', onBlur);
    ref.current.addEventListener('mouseenter', onHover);
    ref.current.addEventListener('mouseover', onHover);

    return () => {
      ref.current.removeEventListener('mouseenter', onHover);
      ref.current.removeEventListener('mouseleave', onBlur);
      ref.current.removeEventListener('mouseover', onHover);
    };
  }, [ref]);

  return ref;
};
