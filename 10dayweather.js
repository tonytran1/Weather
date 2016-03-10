var ul1 = document.createElement('ul1');
document.getElementById("10day").appendChild(ul1);
$.getJSON("http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/forecast10day/q/"+ state + "/" + city + ".json", function (resp)
{
    try
    {
        $.each(resp.forecast.simpleforecast.forecastday, function ()
        {
            logDay(this);
        });
    }
    catch (error)
    {
            alert("That was an invalid location");
            $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'});
    }
});

function logDay(obj)
{
    var li1 = document.createElement('li1');
    li1.style.cssText = "list-style-type: none;width: 200px;text-align: center;font-weight: bold;display: inline-block;color: black;border-radius: 10px 10px 10px 10px;-moz-border-radius: 10px 10px 10px 10px;-webkit-border-radius: 10px 10px 10px 10px;border: 5px solid #000000;";
    ul1.appendChild(li1);
    li1.innerHTML = li1.innerHTML + obj.date.weekday + ', ' + obj.date.monthname + ' ' + obj.date.day + '<br>' + obj.conditions + '<br>';
    li1.innerHTML = li1.innerHTML + '<img src="' + obj.icon_url + '"/>' + '<br>';
    li1.innerHTML = li1.innerHTML + 'Precipitation: ' + obj.pop + '%' + '<br>';
    li1.innerHTML = li1.innerHTML + 'High: ' + obj.high.fahrenheit + '\u00B0' + ' F' + '<br>' + 'Low: ' + obj.low.fahrenheit + '\u00B0' + ' F' + '<br>';
    li1.innerHTML = li1.innerHTML + obj.avewind.dir + ' ' + obj.avewind.mph + ' mph' + '<br>' + '<br>';
    
}
