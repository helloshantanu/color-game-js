function randomColor(){
    return Math.floor(Math.random() * 255)+1;
}
function randomRGB()
{return "rgb"+"("+randomColor()+", "+ randomColor()+", "+ randomColor()+")";
}


var colors =[randomRGB(),randomRGB(),randomRGB(),randomRGB(),randomRGB(),randomRGB()];

var squares= document.querySelectorAll(".square");
var banner= document.getElementsByClassName("top_banner");

console.log(colors);

var pickedColor = colors[Math.floor(Math.random()*6)] ;
var colorDisplay = document.getElementById("top");
colorDisplay.textContent = pickedColor;


for (var i=0;i<squares.length;i++){
    //add colors to baground
    squares[i].style.backgroundColor=colors[i];
    //add onclick Event

    squares[i].addEventListener("click",function(){
        //compare color of clicked with picked color
       var bgColor= this.style.backgroundColor;
       console.log(bgColor, pickedColor);
       if (bgColor===pickedColor){
        banner[0].style.backgroundColor=pickedColor;
        changeColor(pickedColor);   
       }
       else{
           this.style.backgroundColor="aliceblue";
           this.style.borderColor="aliceblue";

       }

    })
};

function changeColor(color){
    
    

    for (i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
        squares[i].style.borderColor="black";
       
    
    }
};


