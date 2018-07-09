var button = document.getElementById("button1");


var count = 1;


button.addEventListener("click",function() { 

    localStorage.getItem("count",count)
    // var property = document.getElementById("button");
     // if paused start
    if (count == 1) {
         // property.style.backgroundColor = "#a84237"
        button.innerHTML = "Start";
        count=0;
    }
    
    else {
         //  property.style.backgroundColor = "#fff"
        button.innerHTML = "Pause";
        count=1;
    }    
    localStorage.setItem("count",count)
});
