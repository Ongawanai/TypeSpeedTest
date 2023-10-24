export const countAccuracy = (mistakes: number, pressingCount: number): string => {
  if (pressingCount) {
    return (100 - (mistakes / pressingCount) * 100).toFixed(2);
  }

  return "0.00";
};

export const countSpeed = (correctLetters: number, time: number): string => {
  if (time) {
    const minutes = time / 60;
    return (correctLetters / minutes).toFixed(2);
  }

  return "0.00";
};
