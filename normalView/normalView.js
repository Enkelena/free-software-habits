let button = document.getElementById("button1");
let notification="on";

localStorage.getItem("notification",notification);



//localStorage.setItem("count",count);
button.onclick= function() { 
    // var property = document.getElementById("button");
     // if paused start


      if (notification === "on") {
              notification="off";   
              button.innerHTML = "Start";
   
       }
    

   else if (notification === "off") {
         //  property.style.backgroundColor = "#fff"
         
             notification="on";
            button.innerHTML = "Pause";

   } 

localStorage.setItem("notification",notification);
};




