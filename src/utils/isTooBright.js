import { hexToRgb } from './hexToRgb'
import { getBrightness } from './getBrightness'

const brightnessThreshhold = 0.8;

export function isTooBright(color) {
  color = hexToRgb(color);

  let brightness = getBrightness(color);

  if (brightness > brightnessThreshhold) {
    return true;
  } else {
    return false;
  }
}