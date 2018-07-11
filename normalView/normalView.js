const pauseButton = document.getElementById("buttonPause");

pauseButton.onclick = function(element) {
     
    const notification = localStorage.getItem("notification");
    const pauseButton = element.target;
    
    //if started -pause
    if (notification === "on") {
        localStorage.setItem("notification","off");
       pauseButton.innerHTML = "Start";
        
    } 
    //if paused -start
    else if (notification === "off") {
        pauseButton.style.backgroundColor = "#fff"
        localStorage.setItem("notification","on");
       pauseButton.innerHTML = "Pause";
      
    } 



};

