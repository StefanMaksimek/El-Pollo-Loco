const originalHeight = 1080; // Original size of BackgroundImage

let canvasHeight = 480; // Game window height
let canvasWidth = canvasHeight / 9 * 16; // will set in relation to the canvasHeight

let sizeVariable = 2; // Resizing of characters and items
let scalefactor = 1 / originalHeight * canvasHeight / sizeVariable; // Resizing of all objects related to the game window to the original image height

/**
     * generate random number; use 0.1 to 3
     * but you can use 0 to infinite ( however, that makes no sense)
     * 
     * 
     * @param {Number} min 
     * @param {Number} max 
     * @returns random number between min and max
     */
 function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }