var ul = document.createElement('ul');
document.getElementById("hourly").appendChild(ul);
$.getJSON("http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/hourly/q//" + city + ".json", function (resp)
{
    $.each(resp.hourly_forecast, function ()
    {
        logTime(this);
    });
});
function logTime(obj)
{
    var li = document.createElement('li');
    li.style.cssText = "list-style-type: none;width: 200px;text-align: center;font-weight: bold;display: inline-block;color: black;border-radius: 5px 5px 5px 5px;-moz-border-radius: 5px 5px 5px 5px;-webkit-border-radius: 5px 5px 5px 5px;border: 5px solid #000000; box-shadow: 7px 7px 7px #007099; margin: 4px; border-color: #333333";
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + obj.FCTTIME.weekday_name + ', ' + obj.FCTTIME.month_name + ' ' + obj.FCTTIME.mday + '<br>' + obj.FCTTIME.civil + '<br>';
    li.innerHTML = li.innerHTML + '<span class="fa-stack fa-2x"><i id="fa-custom" class="fa fa-circle fa-stack-2x text-primary" style="color:#f2f2f2" ></i><i class="fa fa-stack-1x fa-inverse"><img src="' + obj.icon_url + '"/></i></span>' + '<br>';
    li.innerHTML = li.innerHTML + obj.condition + '<br>';
    li.innerHTML = li.innerHTML + obj.temp.english + '\u00B0' + ' F' + '<br>' + '<br>';
}