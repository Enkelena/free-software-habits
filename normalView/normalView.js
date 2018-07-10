const pauseButton = document.getElementById("button1");
pauseButton.onclick = function(element) {
    //* get notification state from localStorage *
    const notification = localStorage.getItem("notification");
    const pauseButton = element.target;
    // if paused start
    if (notification === "on") {
        localStorage.setItem("notification","off");
        pauseButton.innerHTML = "Start";
    } else if (notification === "off") {
        pauseButton.style.backgroundColor = "#fff"
        localStorage.setItem("notification","on");
        pauseButton.innerHTML = "Pause";
    } 
};
