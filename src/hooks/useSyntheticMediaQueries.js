import { useRef } from "react";

export const useSyntheticMediaQueries = () => {  
  
  const currentAndLastWidthRef = useRef([])   
  
  const wasTriggeredMediaQuery = (currentWidth, lastWidth) => {
    if (currentWidth > 767 && lastWidth < 768) {
      return true;
    } else if (currentWidth < 768 && lastWidth > 767) {
      return true;
    } else return false;
  };

  const getCurrentAndLastWidth = (currentScreenWidth) => {
    if (currentAndLastWidthRef.length < 2) {
      currentAndLastWidthRef.push(currentScreenWidth);
    } else {
      currentAndLastWidthRef[0] = currentAndLastWidthRef[1]; 
      currentAndLastWidthRef[1] = currentScreenWidth;
    }

    const currentWidth = currentAndLastWidthRef[1];
    const lastWidth = currentAndLastWidthRef[0];

    return [currentWidth, lastWidth];
  };

  return {      
    wasTriggeredMediaQuery,
    getCurrentAndLastWidth 
  };
};
