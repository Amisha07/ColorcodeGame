var numSquare = 6;

var colors = generateRandomColors(numSquare);

var squares = document.querySelectorAll(".square");
var pickColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquare = 3;
    colors = generateRandomColors(numSquare);
    pickColor = pickedColor();
    colorDisplay.textContent = pickColor;

    for(var i = 0; i< squares.length; i++){
       if(colors[i]){ 
        squares[i].style.backgroundColor = colors[i];
       }
        else{
         squares[i].style.display = "none";
        }
    }
    msgDisplay.textContent = "";
   //  body.style.backgroundColor =  "rgb(48, 47, 47)";

});


hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickColor = pickedColor();
    colorDisplay.textContent = pickColor;

    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
       }
       msgDisplay.textContent = "";
      // body.style.backgroundColor =  "rgb(48, 47, 47)";
    //  h1.style.backgroundColor = "rgb(48, 47, 47)";

});


resetButton.addEventListener("click", function(){
    
    colors = generateRandomColors(numSquare);
    pickColor = pickedColor(); 
    colorDisplay.textContent = pickColor;
    for (var i = 0; i < squares.length; i++){
        //inital colors
        squares[i].style.backgroundColor = colors[i];
    }
//   h1.style.backgroundColor = "rgb(48, 47, 47)";
    //body.style.backgroundColor =  "rgb(48, 47, 47)";
    msgDisplay.textContent = "";
});

    colorDisplay.textContent = pickColor;

for (var i = 0; i<squares.length; i++){
    //inital colors
    squares[i].style.backgroundColor = colors[i];
    
    //onclick squares
    squares[i].addEventListener("click", function(){
        
    //clicked squae color
    var clickColor = this.style.backgroundColor;
   
    // console.log(clickColor, pickColor)

        //compare with the picked color
        if(clickColor == pickColor ){
           // document.body.style.backgroundColor = clickColor;
            msgDisplay.textContent = "Correct!!";
            changeColor(clickColor);
            // h1.style.backgroundColor = clickColor;
            resetButton.textContent = "Play Again";
        }
        else{
            this.style.backgroundColor =  "rgb(48, 47, 47)";
            // body.style.backgroundColor = "red";
            msgDisplay.textContent = "Wrong!";
            

        }
    })
}

function changeColor(color){
    //loop all square to change to the click colors
    for (var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
        
    }
    
}

function pickedColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make array add random color and retun
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;  
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}