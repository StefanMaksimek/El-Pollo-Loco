let world;
let keyboard = new Keyboard();
let play = false;


function init() {
    let canvas = document.getElementById('canvas');
    setCanvas()
    world = new World(canvas, keyboard);
}


// set Cavas to 16/9 view format 
function setCanvas() {
    canvas.height = canvasHeight; // to change the resolution, set canvasHeight "1080(= Full-HD)"
    canvas.width = canvasWidth;
}



window.addEventListener('keydown', e => {
    //console.log(e)
    if (e.key == 'ArrowRight') {
        keyboard.right = true;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.left = true;
    }
    if (e.key == ' ') {
        keyboard.space = true;
    }
    if (e.key == 'Shift') {
        keyboard.shift = true;
    }
    if (e.key == 'd') {
        keyboard.d = true;
    }
    if (e.key == 'Escape') {
        keyboard.esc = true
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
    if (e.key == 'Shift') {
        keyboard.shift = false;
    }
    if (e.key == 'd') {
        keyboard.d = false;
    }
    if (e.key == 'Escape') {
        keyboard.esc = false;
    }
})


// Mobile Control
/**
 * 
 */
document.getElementById("canvas").addEventListener('touchstart', e => {
    e.preventDefault()
})

document.getElementById("m-left").addEventListener('touchstart', e => {
    e.preventDefault()
    keyboard.left = true;
})

document.getElementById('m-right').addEventListener('touchstart', e => {
    e.preventDefault()
    keyboard.right = true;
})

document.getElementById('m-d').addEventListener('touchstart', e => {
    e.preventDefault()
    keyboard.d = true;
})

document.getElementById('m-space').addEventListener('touchstart', e => {
    e.preventDefault()
    keyboard.space = true;
})



document.getElementById('m-left').addEventListener('touchend', e => {
    keyboard.left = false;
})

document.getElementById('m-right').addEventListener('touchend', e => {
    keyboard.right = false;
})

document.getElementById('m-d').addEventListener('touchend', e => {
    keyboard.d = false;
})

document.getElementById('m-space').addEventListener('touchend', e => {
    keyboard.space = false;
})

function setMobileControle() {
    document.getElementById('mobile-control').style.display = 'flex';
}


function startGame() {
    if ('ontouchstart' in window) {
        setTimeout(setMobileControle(), 1000);
    }
    if (!play) {
        fullscreen();
        document.getElementById('start-img').style.display = 'none';
        document.getElementById('canvas').style.display = 'flex';
        document.getElementById('start').innerHTML = `Neu Laden`;
        play = true
    } else {
        window.location.reload();   
    }
}


function fullscreen() {

    let elem = document.getElementById('canvas');

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox 
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera 
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge 
        elem.msRequestFullscreen();
    } else if (elem.webkitEnterFullScreen) {
        elem.webkitEnterFullScreen();
    }
}


/**
* this fn is the global fn for a stoppable setInterval 
* 
* @param {function} fn 
* @param {time} t milliseconds
*/
function setStoppableInterval(fn, t) {
    let id = setInterval(fn, t);
    intervalIds.push(id);
}


function stoppAllIntervalls() {
    intervalIds.forEach(clearInterval);
}


if (document.addEventListener) {
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}


function exitHandler() {
    if (document.webkitIsFullScreen === false) {
        return true
    }
    else if (document.mozFullScreen === false) {
        return true
    }
    else if (document.msFullscreenElement === false) {
        return true
    } else {
        return false
    }
} 