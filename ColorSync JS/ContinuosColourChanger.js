// In this project, on clicking the "START" button, the background color starts changing automatically and on tapping "STOP" the color stops changing, this project signifies the use of "setInterval" and "eventListeners"

// setTimeout, setInterval, these are a part of asynchronous code themselve, asynchronous code doesn't only mean, to send request to the web, asynchronous code is itself baked in the javascript itself.

let randomColor= function(){
    const hex= '0123456789ABCDEF'
    let color='#';
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalID;
const startChangingColor= function(){
    if(!intervalID){ //this condition because as we are setting intervalID= null , thus intervalID comes as null causing problem of website freezing, stop button would not work after once. 
    intervalID= setInterval(changeColor, 1000)
    }
    function changeColor(){
        document.body.style.backgroundColor= randomColor();
    }
}

const stopChangingColor= function(){
    clearInterval(intervalID);
    intervalID=null; //to clearout some memory after the task is done
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)