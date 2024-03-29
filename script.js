
// WEBSITE JUST LAUNCHED
// Code is a little messy

// Built by Jovan Qeleshi

// Initial inspiration and work from Franks Laboratory
// https://www.youtube.com/watch?v=f5ZswIE_SgY

//  ----------
//  Canvas Initializers
//  ----------

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0,0,0,canvas.height);

// Event listener to resize main canvas 
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixEffect.resize(canvas.width,canvas.height);
});

//  ----------
//  Global Variables
//  ----------

let globalFontSize = 25;

class Symbol{ // Manages individual symbols

    constructor(x,y, fontSize, canvasHeight, color, style){

        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.chessChars = '♔♕♖♗♘♙♗♗♗♗♗♗♗♗♘♙♖♚♛♜♝♞♟︎♝♝♝♝♝♝♝♞♟︎♜          ';

        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.style = style;
        this.color = color; // Passed in from the startEffect() function. Sometimes colors are hard coded.

        this.symbol; // This will represent the symbol. Characters, square, or what you decide to draw
        this.canvasHeight = canvasHeight;

    }

            /* --- Theme colors ---
            Movie Green: rgb(10, 251, 14)
            Blue Machine: rgb(0,140,255)
            Red Vibes: rgb(255, 0, 0) */
    
    draw(context){
        
        if(this.style === 'solidColor'){
            // Individual symbols have access to this. (context) argument specifies which canvas to draw on
        this.symbol = this.characters.charAt(Math.floor(Math.random()*this.characters.length));

        context.fillStyle = this.color; // Controls font color
        context.fillText(this.symbol, this.x * this.fontSize, this.y * this.fontSize);

        context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 750, this.fontSize+5, this.fontSize+5);

        context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 950, this.fontSize+5, this.fontSize+5);

        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
            this.y = 0;
        } else {
            this.y += 1;
        }
        //console.log("solidColor: OK")

        } else if (this.style === 'purpleThunder'){

            if(Math.random()>.90){
                context.fillStyle = 'magenta'; // This is a square that "clears" the canvas
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);

                context.fillStyle = 'white'; // This is a square that "clears" the canvas
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 100, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            } else {
                context.fillStyle = 'magenta'; // This is a square that "clears" the canvas
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }

            context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 750, this.fontSize, this.fontSize);
    
            context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 950, this.fontSize, this.fontSize);
    

        } else if (this.style === 'checkered'){

            if(Math.random()>.5){
                context.fillStyle = 'black';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);

                context.fillStyle = 'white';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 100, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            } else if (Math.random()>.55){


                context.fillStyle = 'white';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 425, this.fontSize, this.fontSize);

                if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }
            
            
            else {
                context.fillStyle = 'white'; 
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }

            context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 400, this.fontSize, this.fontSize);
    
            context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 450, this.fontSize, this.fontSize);

        } else if (this.style === 'cozyFire'){

            if(Math.random()>.92){ // Draw Majority of the fire on the bottom

                context.fillStyle = 'red';
                context.fillRect(this.x * this.fontSize, ((((Math.random() * canvas.height / 3))*Math.random())+canvas.height/1.4) , this.fontSize, this.fontSize);

                context.fillStyle = 'orange';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 100, this.fontSize, this.fontSize);

            }
            
            if(Math.random()>.995){
                context.fillStyle = 'red';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
                
        
                if(this.y * this.fontSize < this.canvasHeight && Math.random() > 0.97){
                    this.y = this.canvasHeight / this.fontSize;
                } else {
                    this.y -= 1;
                }

            } else if (Math.random()>.85){
                context.fillStyle = 'rgb(197, 197, 197)';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 425, this.fontSize, this.fontSize);

                if(this.y * this.fontSize < this.canvasHeight && Math.random() > 0.97){
                    this.y = this.canvasHeight / this.fontSize;
                } else {
                    this.y -= 1;
                }
            }            
            else {

                if(Math.random()>.685){
                    context.fillStyle = 'red'; 
                    context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
            
                    if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                        this.y = this.canvasHeight / this.fontSize;
                    } else {
                        this.y -= 1;
                    }
                }
                    
            }

        } else if (this.style === 'chess'){

        

        if(Math.random()>.9601){

            this.fontSize = 25;

            context.fillStyle = 'rgba(92, 92, 92, 0.336)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);

            context.fillStyle = 'rgba(255, 255, 255, 0.336)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 , this.fontSize, this.fontSize);
    
            if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
                this.y = 0;
            } else {
                this.y += 1;
            }
        } 



        this.fontSize = 90;

        // Individual symbols have access to this. (context) argument specifies which canvas to draw on
        this.chessSymbol = this.chessChars.charAt(Math.floor(Math.random()*this.chessChars.length));

        context.fillStyle = 'white'; // Controls font color
        context.font = (this.fontSize) + "px monospace"; // Increase font size by +5
        context.fillText(this.chessSymbol, this.x * this.fontSize, this.y * this.fontSize);

        let drawText = (fontCharacter) => {
            context.fillStyle = 'red'; // Controls font color
            context.font = (this.fontSize) + "px monospace"; // Increase font size by +5
            context.fillText(fontCharacter, this.x * this.fontSize, this.y * this.fontSize);
        }

        // Call the drawText function with the same fontCharacter
        //drawText(this.chessSymbol);

        if(Math.random() > .8625){
            setTimeout(drawText(this.chessSymbol), 1000);
        }


        context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 4250, this.fontSize+5, this.fontSize+5);

        context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 4950, this.fontSize+5, this.fontSize+5);

        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
            this.y = 0;
        } else {
            this.y += 1;
        }

        // context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
        // context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 750, this.fontSize, this.fontSize);

        // context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
        // context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 950, this.fontSize, this.fontSize);
    
        }
    }
}

class Effect{ // Main wrapper, we use this to create, update, and draw all symbols
// Must be aware of canvas size
    constructor(canvasWidth, canvasHeight, color, style){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.fontSize = 25;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];

        // console.log(this.symbols);

        this.color = color;
        this.style = style;

        if(this.style === 'cozyFre'){
            // console.log('cozyFire Starter');
            this.#fireStarter();
        } else {
            // console.log('Initializer');
            this.#initialize();
        }

    }

    #fireStarter(){
        for(let i=0; i < this.columns; i++){
            this.symbols[i] = new Symbol(i, this.canvasHeight/Math.random(), this.fontSize, this.canvasHeight, this.color, this.style);

            if(Math.random()>.70){
                this.symbols[i] = new Symbol(i, this.canvasHeight/Math.random(), this.fontSize, this.canvasHeight, this.color, this.style);
                i++;
            }

        }
    }

    #initialize(){
        for(let i=0; i < this.columns; i++){
            this.symbols[i] = new Symbol(i, this.canvasHeight/Math.random(), this.fontSize, this.canvasHeight, this.color, this.style);
        }
    }

    resize(width,height){
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
    }

    resizeFire(width,height){
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#fireStarter();
    }

}


let lastTime = 0;
const fps = 24;
const nextFrame = 1000/fps
let timer = 0;

let runCounter = 0;

function animate(timeStamp){ // Draws the effect over and over. (Still not sure on exact implementation)

    // timeStamp parameter is passed in automatically by the requestAnimationFrame method when invoked
    
    const deltaTime = timeStamp-lastTime;
    lastTime = timeStamp;

    if(timer > nextFrame){
        ctx.fillStyle = 'rgba(0,0,0,.125)';
        ctx.textAlign = 'center';
        ctx.fillRect(0,0,canvas.width, canvas.height);
        ctx.font = matrixEffect.fontSize + 'px monospace';

        matrixEffect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    // the animate function is then called recursively with the requestAnimationFrame method
    requestAnimationFrame(animate);
}


let animationId = null;

let matrixEffect;

// This function initiates the loop for the animation function
// First it checks if there is an animation running
    // If there is an animation running it cancels it, and starts a new animation with the parameters provided
// The loop then continues in the animate function.

function startEffect(color,style){

    if(animationId !== null){
        cancelAnimationFrame(animationId);
    }
    console.log("Before Call",animationId);

    matrixEffect = new Effect(canvas.width, canvas.height,color,style);
    animationId = requestAnimationFrame(animate);
    
    console.log("After Call",animationId);
};

// ---------------------------
// ---------------------------
// FRONT END Interface starts here
// ---------------------------

// This selects a random effect to initially start

const effectsToStart = [
    function() {
        startEffect('rgb(10, 251, 14)','solidColor'); // Movie Green
    },
    function() {
        startEffect('rgb(0,140,255)','solidColor'); // Blue Machine
    },
    function() {
        startEffect('rgb(255, 0, 0)','solidColor'); // Red Vibes
    },
    function() {
        startEffect('magenta','solidColor'); // Purple Rain
    },
    function(){
        startEffect('rgb(255, 255, 255)','solidColor'); // White Lightnight
    },
    function(){
        startEffect('red','purpleThunder'); // Purple Thunder
    },
    function(){
        startEffect('red','checkered'); // Checkered
    },
    function(){
        startEffect('red','cozyFire'); // Cozy Fire
    },
    function(){
        startEffect('red','chess'); // Chess
    }
];

const randomEffectIndex = Math.floor(Math.random() * effectsToStart.length);
effectsToStart[randomEffectIndex]();



// eventListeners.js activates effects when button is clicked
// eventListeners.js enables "Hover Over Effect" on buttons
// eventListeners.js on Hover Over Hides the "X" and "Full Screen Buttons"

// eventListeners.js enables Full Screen
// eventListeners.js enables "Close Button Functionality" and "Double Click/SPACE" to return Effect Dashboard
// eventListeners.js Allows Hidden Canvas to be same size as .glass


// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// SECOND CANVAS
// -----------------------------


const secondCanvas = document.getElementById('hiddenCanvas');
const cvs = secondCanvas.getContext('2d');

secondCanvas.width = document.getElementById('hiddenCanvas').offsetWidth;
secondCanvas.height = document.getElementById('hiddenCanvas').offsetHeight;


class Symbol2{ // Manages individual symbols
    constructor(x,y, fontSize, secondCanvasHeight, color, style){
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.chessChars = '♔♕♖♗♘♙♗♗♗♗♗♗♗♗♘♙♖♚♛♜♝♞♟︎♝♝♝♝♝♝♝♞♟︎♜          ';

        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.style = style;
        this.color = color; // Passed in from the startEffect() function. Sometimes colors are hard coded.

        this.symbol; // This will represent the symbol. Characters, square, or what you decide to draw
        this.secondCanvasHeight = secondCanvasHeight;
    }

            /* --- Theme colors ---
            Movie Green: rgb(10, 251, 14)
            Blue Machine: rgb(0,140,255)
            Red Vibes: rgb(255, 0, 0) */
    
    draw(context){
        
        if(this.style === 'solidColor'){
            // Individual symbols have access to this. (context) argument specifies which canvas to draw on
        this.symbol = this.characters.charAt(Math.floor(Math.random()*this.characters.length));

        context.fillStyle = this.color; // Controls font color
        context.fillText(this.symbol, this.x * this.fontSize, this.y * this.fontSize);

        context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 750, this.fontSize+5, this.fontSize+5);

        context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 950, this.fontSize+5, this.fontSize+5);

        if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
            this.y = 0;
        } else {
            this.y += 1;
        }

        } else if (this.style === 'purpleThunder'){

            if(Math.random()>.90){
                context.fillStyle = 'magenta'; // This is a square that "clears" the canvas
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);

                context.fillStyle = 'white'; // This is a square that "clears" the canvas
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 100, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            } else {
                context.fillStyle = 'magenta'; // This is a square that "clears" the canvas
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }

            context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 750, this.fontSize, this.fontSize);
    
            context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 950, this.fontSize, this.fontSize);
    

        } else if (this.style === 'checkered'){

            if(Math.random()>.5){
                context.fillStyle = 'black';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);

                context.fillStyle = 'white';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 100, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            } else if (Math.random()>.55){


                context.fillStyle = 'white';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 425, this.fontSize, this.fontSize);

                if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }
            
            
            else {
                context.fillStyle = 'white'; 
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
        
                if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }

            context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 400, this.fontSize, this.fontSize);
    
            context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 450, this.fontSize, this.fontSize);

        } else if (this.style === 'cozyFire'){

            if(Math.random()>.92){ // Draw Majority of the fire on the bottom

                context.fillStyle = 'red';
                context.fillRect(this.x * this.fontSize, ((((Math.random() * secondCanvas.height / 3))*Math.random())+secondCanvas.height/1.4) , this.fontSize, this.fontSize);

                context.fillStyle = 'orange';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 100, this.fontSize, this.fontSize);

            }
            
            if(Math.random()>.995){
                context.fillStyle = 'red';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
                
        
                if(this.y * this.fontSize < this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = this.secondCanvasHeight / this.fontSize;
                } else {
                    this.y -= 1;
                }

            } else if (Math.random()>.85){


                context.fillStyle = 'rgb(197, 197, 197)';
                context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 425, this.fontSize, this.fontSize);

                if(this.y * this.fontSize < this.secondCanvasHeight && Math.random() > 0.97){
                    this.y = this.secondCanvasHeight / this.fontSize;
                } else {
                    this.y -= 1;
                }
            }
            
            
            else {

                if(Math.random()>.685){
                    context.fillStyle = 'red'; 
                    context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);
            
                    if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                        this.y = this.secondCanvasHeight / this.fontSize;
                    } else {
                        this.y -= 1;
                    }
                }
                    
                }
        } else if (this.style === 'chess'){

        if(Math.random()>.9601){

            this.fontSize = 25;

            context.fillStyle = 'rgba(92, 92, 92, 0.336)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2, this.fontSize, this.fontSize);

            context.fillStyle = 'rgba(255, 255, 255, 0.336)'; // This is a square that "clears" the canvas
            context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 , this.fontSize, this.fontSize);
    
            if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
                this.y = 0;
            } else {
                this.y += 1;
            }
        } 

        this.fontSize = 90;

        // Individual symbols have access to this. (context) argument specifies which canvas to draw on
        this.chessSymbol = this.chessChars.charAt(Math.floor(Math.random()*this.chessChars.length));

        context.fillStyle = 'white'; // Controls font color
        context.font = (this.fontSize) + "px monospace"; // Increase font size by +5
        context.fillText(this.chessSymbol, this.x * this.fontSize, this.y * this.fontSize);

        let drawText = (fontCharacter) => {
            context.fillStyle = 'red'; // Controls font color
            context.font = (this.fontSize) + "px monospace"; // Increase font size by +5
            context.fillText(fontCharacter, this.x * this.fontSize, this.y * this.fontSize);
        }

        // Call the drawText function with the same fontCharacter
        //drawText(this.chessSymbol);

        if(Math.random() > .8625){
            setTimeout(drawText(this.chessSymbol), 1000);
        }


        context.fillStyle = 'rgba(0,0,0,.75)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 4250, this.fontSize+5, this.fontSize+5);

        context.fillStyle = 'rgba(0,0,0,1)'; // This is a square that "clears" the canvas
        context.fillRect((this.x * this.fontSize) - this.fontSize / 2, (this.y * this.fontSize) - this.fontSize / 2 - 4950, this.fontSize+5, this.fontSize+5);

        if(this.y * this.fontSize > this.secondCanvasHeight && Math.random() > 0.97){
            this.y = 0;
        } else {
            this.y += 1;
        }

        }
        
    }

}

class Effect2{ // Main wrapper, we use this to create, update, and draw all symbols
// Must be aware of canvas size
constructor(secondCanvasWidth, secondCanvasHeight, color, style){
    this.secondCanvasWidth = secondCanvasWidth;
    this.secondCanvasHeight = secondCanvasHeight;
   
    this.fontSize = 25;
    this.columns = this.secondCanvasWidth/this.fontSize;
    this.symbols = [];

    // console.log(this.symbols);

    this.color = color;
    this.style = style;

    if(this.style === 'cozyFre'){
        // console.log('cozyFire Starter');
        this.#fireStarter();
    } else {
        // console.log('Initializer');
        this.#initialize();
    }

}

#fireStarter(){
    for(let i=0; i < this.columns; i++){
        this.symbols[i] = new Symbol(i, this.secondCanvasHeight/Math.random(), this.fontSize, this.secondCanvasHeight, this.color, this.style);

        if(Math.random()>.70){
            this.symbols[i] = new Symbol(i, this.secondCanvasHeight/Math.random(), this.fontSize, this.secondCanvasHeight, this.color, this.style);
            i++;
        }

    }
}

#initialize(){
    for(let i=0; i < this.columns; i++){
        this.symbols[i] = new Symbol(i, this.secondCanvasHeight/Math.random(), this.fontSize, this.secondCanvasHeight, this.color, this.style);
    }
}

resize(width,height){
    this.secondCanvasWidth = width;
    this.secondCanvasHeight = height;
    this.columns = this.secondCanvasWidth/this.fontSize;
    this.symbols = [];
    this.#initialize();
}

resizeFire(width,height){
    this.secondCanvasWidth = width;
    this.secondCanvasHeight = height;
    this.columns = this.secondCanvasWidth/this.fontSize;
    this.symbols = [];
    this.#fireStarter();
}

}


let matrixEffect2 = new Effect2(secondCanvas.width, secondCanvas.height);

let lastTime2 = 0;
const fps2 = 15;
const nextFrame2 = 1000/fps2
let timer2 = 0;

let runCounter2 = 0;

let isCanvas2Animating = false;

function animate2(timeStamp){ // Draws the effect over and over. (Still not sure on exact implementation)
    // timeStamp is automatically passed by the requestAnimationFrame method

    const deltaTime = timeStamp-lastTime2;
    lastTime = timeStamp;

    if(timer2 > nextFrame2){

        if(!isCanvas2Animating){
            cvs.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
            return;
        }
        cvs.fillStyle = 'rgba(0,0,0,.125)';
        cvs.textAlign = 'center';
        cvs.fillRect(0,0,secondCanvas.width,secondCanvas.height);
        cvs.font = matrixEffect2.fontSize + 'px monospace';

        matrixEffect2.symbols.forEach(symbol => symbol.draw(cvs));
        timer2 = 0;
    } else {
        timer2 += deltaTime;
    }

    requestAnimationFrame(animate2);
}


let animationId2 = null;

function startEffect2(color,style){

    if(animationId2 !== null){
        cancelAnimationFrame(animationId2);
    }

    matrixEffect2 = new Effect2(secondCanvas.width, secondCanvas.height,color,style);
    animationId = requestAnimationFrame(animate2);
};


window.addEventListener('resize',function(){
    secondCanvas.width = document.getElementById('hiddenCanvas').offsetWidth;
    secondCanvas.height = document.getElementById('hiddenCanvas').offsetHeight;
    matrixEffect2.resize(secondCanvas.width, secondCanvas.height);
});


// -----------------------------
// -----------------------------
// -----------------------------