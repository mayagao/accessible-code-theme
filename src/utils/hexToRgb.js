export function hexToRgb(hex) {
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
