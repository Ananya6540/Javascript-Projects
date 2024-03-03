const changeColor = function(){
    const hex = "0123456ABCDEF" ;
    let color = "#";
    for(let i = 0; i< 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChangingColor =function (){
   intervalId =  setInterval(changeBgcolor,1000);
    function changeBgcolor(){
        document.body.style.backgroundColor = changeColor();
    }
};


const stopChangingColor = function (){
    clearInterval(intervalId)
    

};
document.getElementById("start").addEventListener("click",startChangingColor)
document.getElementById("stop").addEventListener("click",stopChangingColor)