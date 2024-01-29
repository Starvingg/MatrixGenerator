
// Functionality for on click, to start classic effects
// Classic Effects Buttons

document.getElementById('btnMovieGreen').addEventListener('click', function() {
    startEffect('rgb(10, 251, 14)','solidColor');
});

document.getElementById('btnBlueMachine').addEventListener('click', function() {
    startEffect('rgb(0,140,255)','solidColor');
});

document.getElementById('btnRedVibes').addEventListener('click', function() {
    startEffect('rgb(255, 0, 0)','solidColor');
});

document.getElementById('btnPurpleRain').addEventListener('click', function() {
    startEffect('magenta','solidColor');
});

document.getElementById('btnWhiteLightning').addEventListener('click', function() {
    startEffect('rgb(255, 255, 255)','solidColor');
});


// Functionality for on click, to start speciality effects

document.getElementById('btnPurpleThunder').addEventListener('click', function() {
    startEffect('red','purpleThunder');
});

document.getElementById('btnCheckerBoard').addEventListener('click', function() {
    startEffect('red','checkered');
});

document.getElementById('btnCozyFire').addEventListener('click', function() {
    startEffect('red','cozyFire');
});

document.getElementById('btnChess').addEventListener('click', function() {
    startEffect('red','chess');
});


// Classic Effects - Hover over.
// Applied to .hiddenCanvasDiv
// On Hover Over Hides the "X" and "Full Screen Buttons"

// ---
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnMovieGreen').addEventListener('mouseover', function() {
        const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
        glass.classList.add('movieGreenHoverEffect');

        const fullScreenBtn = document.getElementById('fullscreenBtn');
        const hideBtn = document.getElementById('hideBtn');
        fullScreenBtn.style.display = "none";
        hideBtn.style.display = "none";
    });
});
  
document.getElementById('btnMovieGreen').addEventListener('mouseout', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.remove('movieGreenHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnBlueMachine').addEventListener('mouseover', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.add('blueMachineHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnBlueMachine').addEventListener('mouseout', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.remove('blueMachineHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnRedVibes').addEventListener('mouseover', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.add('redVibesHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnRedVibes').addEventListener('mouseout', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.remove('redVibesHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnPurpleRain').addEventListener('mouseover', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.add('purpleRainHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnPurpleRain').addEventListener('mouseout', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.remove('purpleRainHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnWhiteLightning').addEventListener('mouseover', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.add('whiteLightningHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnWhiteLightning').addEventListener('mouseout', function() {
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.remove('whiteLightningHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});


// Speciality Effects - Hover over.
// Applied to .hiddenCanvasDiv
// On Hover Over Hides the "X" and "Full Screen Buttons"

document.getElementById('btnPurpleThunder').addEventListener('mouseover', function() {
    isCanvas2Animating = true;
    startEffect2('red','purpleThunder');
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    
    // Hides the close and full screen buttons.

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";

});
  
document.getElementById('btnPurpleThunder').addEventListener('mouseout', function() {
    isCanvas2Animating = false;
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection

    // Hides the close and full screen buttons.

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";

});


// ---
document.getElementById('btnPurpleThunder').addEventListener('mouseover', function() {
    isCanvas2Animating = true;
    startEffect2('red','purpleThunder');
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.add('purpleRainHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnPurpleThunder').addEventListener('mouseout', function() {
    isCanvas2Animating = false;
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    glass.classList.remove('purpleRainHoverEffect');

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnCheckerBoard').addEventListener('mouseover', function() {
    isCanvas2Animating = true;
    startEffect2('red','checkered');
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    
    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnCheckerBoard').addEventListener('mouseout', function() {
    isCanvas2Animating = false;
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnCozyFire').addEventListener('mouseover', function() {
    isCanvas2Animating = true;
    startEffect2('red','cozyFire');
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    
    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnCozyFire').addEventListener('mouseout', function() {
    isCanvas2Animating = false;
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});

// ---
document.getElementById('btnChess').addEventListener('mouseover', function() {
    isCanvas2Animating = true;
    startEffect2('red','chess');
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection
    
    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "none";
    hideBtn.style.display = "none";
});
  
document.getElementById('btnChess').addEventListener('mouseout', function() {
    isCanvas2Animating = false;
    const glass = document.getElementsByClassName('hiddenCanvasDiv')[0]; // Access the first element in the collection

    const fullScreenBtn = document.getElementById('fullscreenBtn');
    const hideBtn = document.getElementById('hideBtn');
    fullScreenBtn.style.display = "";
    hideBtn.style.display = "";
});


// --START-- Full Screen and Hide Button Functionality

// Initalize Variables
const fullScreenButton = document.getElementById('fullscreenBtn');
const hideButton = document.getElementById('hideBtn');
const glassDiv = document.getElementsByClassName('glass')[0];
const fullScreenInfo = document.getElementById('fullScreenInfo');

// Full Screen Button Functionality
// Works across web browsers

fullScreenButton.addEventListener('click', function() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});


// Below makes the "How to get back card, slowly fade out" after clikcing "Close" or "X" button

let fullScreenTimeout;

hideButton.addEventListener('click', function(){
    let fullScreenInfo = document.getElementById('fullScreenInfo');
    fullScreenInfo.style.display = 'block';
    
    glassDiv.style.display = 'none';

    fullScreenTimeout = setTimeout(function() {
        let op = 1;  // initial opacity
        let timer = setInterval(function () {
            if (op <= 0.2){
                clearInterval(timer);
                fullScreenInfo.style.display = 'none';
                fullScreenInfo.style.opacity = 1; // Set opacity back to 100%
            }
            fullScreenInfo.style.opacity = op;
            fullScreenInfo.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.05;
        }, 30);
        fullScreenTimeout = null;
        fullScreenInfo.style.opacity = 1; // Set opacity back to 100%
    }, 2000); // Delay the start of the fade out by 2 seconds
    fullScreenInfo.style.opacity = 1; 
});


// Brings back Effect Dashboard on Key press

document.addEventListener('keydown', function(event) {
    // Check if the key pressed was ESC or SPACE
    if (event.key === 'Escape' || event.key === ' ') {
        glassDiv.style.display = 'block';
        fullScreenInfo.style.display = 'none';
        clearTimeout(fullScreenTimeout);
    }
});

// Brings back Effect Dashboard on Double Click

document.addEventListener('dblclick', function() {
    glassDiv.style.display = 'block';
    fullScreenInfo.style.display = 'none';
    clearTimeout(fullScreenTimeout);
});


// --END-- Full Screen and Hide Button Functionality


// The below keeps hidden canvas same size as .glass.

window.onload = function() {
    const glassDiv = document.querySelector('.glass');
    const hiddenCanvasDiv = document.getElementById('hiddenCanvasDiv');

    hiddenCanvasDiv.style.height = getComputedStyle(glassDiv).height;
    
    window.addEventListener('resize', () => {
        hiddenCanvasDiv.style.height = getComputedStyle(glassDiv).height;
    });
};

