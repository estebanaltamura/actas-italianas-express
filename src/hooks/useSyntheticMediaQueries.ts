// ** React import
import { useRef } from 'react';

export const useSyntheticMediaQueries = (): {
  wasTriggeredMediaQuery(currentWidth: number, lastWidth: number): boolean;
  getCurrentAndLastWidth(currentScreenWidth: number): [number, number];
} => {
  const lastAndCurrentWidthRef = useRef<number[]>([]);

  const wasTriggeredMediaQuery = (currentWidth: number, lastWidth: number): boolean => {
    if (currentWidth > 767 && lastWidth < 768) {
      return true;
    } else if (currentWidth < 768 && lastWidth > 767) {
      return true;
    } else return false;
  };

  const getCurrentAndLastWidth = (currentScreenWidth: number): [number, number] => {
    const lastAndCurrentWidth = lastAndCurrentWidthRef.current;

    if (lastAndCurrentWidth.length < 2) {
      lastAndCurrentWidth.push(currentScreenWidth);
    } else {
      lastAndCurrentWidth[0] = lastAndCurrentWidth[1];
      lastAndCurrentWidth[1] = currentScreenWidth;
    }

    const currentWidth = lastAndCurrentWidth[1];
    const lastWidth = lastAndCurrentWidth[0];

    return [currentWidth, lastWidth];
  };

  return {
    wasTriggeredMediaQuery,
    getCurrentAndLastWidth,
  };
};
