var ul = document.createElement('ul');
document.getElementById("hourly").appendChild(ul);
$.getJSON("http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/hourly/q/"+ state + "/" + city + ".json", function (resp)
{
    $.each(resp.hourly_forecast, function ()
    {
        logTime(this);
    });
});
function logTime(obj)
{
    var li = document.createElement('li');
    li.style.cssText = "list-style-type: none;width: 200px;text-align: center;font-weight: bold;display: inline-block;color: black;border-radius: 10px 10px 10px 10px;-moz-border-radius: 10px 10px 10px 10px;-webkit-border-radius: 10px 10px 10px 10px;border: 5px solid #000000;";
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + obj.FCTTIME.weekday_name + ', ' + obj.FCTTIME.month_name + ' ' + obj.FCTTIME.mday + '<br>' + obj.FCTTIME.civil + '<br>';
    li.innerHTML = li.innerHTML + '<img src="' + obj.icon_url + '"/>' + '<br>';
    li.innerHTML = li.innerHTML + obj.condition + '<br>';
    li.innerHTML = li.innerHTML + obj.temp.english + '\u00B0' + ' F' + '<br>' + '<br>';
}