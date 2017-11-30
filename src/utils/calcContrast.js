import { hexToRgb } from './hexToRgb'
import { getBrightness } from './getBrightness'

export const calcContrast = (foreground, background) => {
 
  foreground = hexToRgb(foreground);
  background = hexToRgb(background);

  let contrastRatio = null;
  let rating = '';
  let foregroundLum = getBrightness(foreground);
  let backgroundLum = getBrightness(background);

  if (foregroundLum > backgroundLum) {
    contrastRatio = ((foregroundLum+0.05)/(backgroundLum+0.05));
  } else {
    contrastRatio = ((backgroundLum+0.05)/(foregroundLum+0.05));
  }

  contrastRatio = contrastRatio.toFixed(2);
  rating = contrastRatio >= 7 ? "AAA" : contrastRatio >= 4.5 ? "AA" : contrastRatio >= 3 ? "" : "Low";

  return [contrastRatio, rating];
   
}