var city = "San Francisco, CA";

$(document).keypress(function(e) {
    if(e.which == 13)
        onClick();
});

if (localStorage.getItem("city") != null)
{
    city = localStorage.getItem("city");
}

function onClick()
{
/*    var cityString = document.getElementById("city").value.split(" ");*/
    
    city = document.getElementById("city").value; 
    
    localStorage.setItem("city", city);
    
    location.reload;
/*    alert(city);*/
};