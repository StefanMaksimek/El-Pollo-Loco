let world;
let keyboard = new Keyboard();


function init() {
    let canvas = document.getElementById('canvas');
    setCanvas()
    world = new World(canvas, keyboard);
}


// set Cavas to 16/9 view format 
function setCanvas() {
    canvas.height = canvasHeight; // to change the resolution, set canvasHeight "1080(= Full-HD)"
    
    canvas.width = canvasWidth
}


window.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight') {
        keyboard.right = true;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.left = true;
    }
    if (e.key == ' ') {
        keyboard.space = true;
    }
    if (e.key == 'Shift' ) {
        keyboard.shift = true;
    }
    if (e.key == 'd' ) {
        keyboard.d = true;
    }
}) 


window.addEventListener('keyup', e => {
    if (e.key == 'ArrowRight') {
        keyboard.right = false;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.left = false;
    }
    if (e.key == ' ') {
        keyboard.space = false;
    }
    if (e.key == 'Shift' ) {
        keyboard.shift = false;
    }
    if (e.key == 'd' ) {
        keyboard.d = false;
    }
}) 
