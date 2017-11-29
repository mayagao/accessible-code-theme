export const calcContrast = (foreground, background) => {

  function hexToRgb(hex) {
  var r, g, b;
  if (hex.length === 4) {
    r = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
    g = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);
    b = parseInt(hex.substring(3, 4) + hex.substring(3, 4), 16);
  } else {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
    return {"red": r, "green": g, "blue": b};
  }

  function calcSrgb(x) {
    x = x/255
    if (x <= 0.03928) {
      x = x/12.82;
    } else {
      x = Math.pow(((x + 0.055)/1.055), 2.4);
    }
    return x
  }

  function calcRelativeLum(color) {
    return 0.2126 * calcSrgb(color.red) + 0.7152 * calcSrgb(color.green) + 0.0722 * calcSrgb(color.blue);
  }
 
  foreground = hexToRgb(foreground);
  background = hexToRgb(background);

  let contrastRatio = null;
  let rating = '';
  let foregroundLum = calcRelativeLum(foreground);
  let backgroundLum = calcRelativeLum(background);

  contrastRatio = ((foregroundLum+0.05)/(backgroundLum+0.05)).toFixed(2);
  rating = contrastRatio >= 7 ? "AAA" : contrastRatio >= 4.5 ? "AA" : "Low";

  return [contrastRatio, rating];
   
}