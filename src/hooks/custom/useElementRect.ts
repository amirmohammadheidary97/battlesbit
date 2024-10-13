import {useEffect, useRef, useState} from 'react';

export type BoundingRect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

export const useElementRect = ({
  recalculateCondition,
}: {
  recalculateCondition?: any;
}) => {
  const containerRef: any = useRef();
  const [rect, setTopRect] = useState<BoundingRect | undefined>(undefined);

  const handleSetRect = () => {
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTopRect(rect);
    }
  };

  useEffect(() => {
    //
    let containerRefCurrent = containerRef?.current;
    handleSetRect();
    if (containerRefCurrent) {
      window.addEventListener('resize', handleSetRect);
    }
    //
    return () => {
      if (containerRefCurrent) {
        window.removeEventListener('resize', handleSetRect);
      }
    };
  }, []);

  useEffect(() => {
    if (recalculateCondition !== undefined) {
      handleSetRect();
    }
  }, [recalculateCondition]);

  return {
    containerRef,
    rect,
  };
};
