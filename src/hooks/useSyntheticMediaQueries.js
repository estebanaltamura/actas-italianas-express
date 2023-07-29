export const useSyntheticMediaQueries = () => {
  const wasTriggeredMediaQuery = (currentWidth, lastWidth) => {
    if (currentWidth > 374 && lastWidth < 375) {
      return true;
    } else if (currentWidth < 375 && lastWidth > 374) {
      return true;
    } else if (currentWidth > 767 && lastWidth < 768) {
      return true;
    } else if (currentWidth < 768 && lastWidth > 767) {
      return true;
    } else return false;
  };

  const getCurrentAndLastWidth = (currentAndLastWidth, screenWidth) => {
    if (currentAndLastWidth.length < 2) {
      currentAndLastWidth.push(screenWidth);
    } else {
      currentAndLastWidth[0] = currentAndLastWidth[1];
      currentAndLastWidth[1] = screenWidth;
    }

    const currentWidth = currentAndLastWidth[1];
    const lastWidth = currentAndLastWidth[0];

    return [currentWidth, lastWidth];
  };

  return {
    wasTriggeredMediaQuery,
    getCurrentAndLastWidth,
  };
};
