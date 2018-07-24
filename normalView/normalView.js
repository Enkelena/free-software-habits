const pauseButton = document.getElementById("buttonPause");
const showMoreButton = document.getElementById("buttonShowMore");

//set paused text according to state saved in localStorage
const notification = localStorage.getItem("notification");
if (notification === "on"){
    pauseButton.innerHTML = "Pause";
} else {
    pauseButton.innerHTML = "Start";
}

//change text when button is clicked
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

//open project webpage
 showMoreButton.onclick = function() {
    window.open('https://github.com/Enkelena/free-software-habits','_blank');
} 