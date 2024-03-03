const time = document.getElementById("div")
    setInterval(function (){     //The setInterval() method, offered on the Window interfaces, repeatedly calls a function 
                                 //or executes a code snippet, with a fixed time delay between each call.
         let date = new Date();
        time.innerHTML = date.toLocaleTimeString();
    },1000);
  


