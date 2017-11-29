export function getBrightness(color) {

    function calcSrgb(x) {
      x = x/255
      
      if (x <= 0.03928) {
        x = x/12.82;
      } else {
        x = Math.pow(((x + 0.055)/1.055), 2.4);
      }

      return x
    }
    
    return 0.2126 * calcSrgb(color.red) + 
           0.7152 * calcSrgb(color.green) + 
           0.0722 * calcSrgb(color.blue);
  }