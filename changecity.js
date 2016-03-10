var city = "San_Francisco";
var state = "CA";

$(document).keypress(function(e) {
    if(e.which == 13)
        onClick();
});

if (localStorage.getItem("city") != null && localStorage.getItem("state") != null)
{
    city = localStorage.getItem("city");
    state = localStorage.getItem("state");
}

function onClick()
{
    var cityString = document.getElementById("city").value.split(" ");
    
    city = document.getElementById("city").value; 
    state = document.getElementById("state").value;
    
    if (cityString.length == 2)
        city = cityString[0] + "_" + cityString[1];
    
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    
    console.log(city);
    var url = window.location.href;
    window.location.href = url;
};

