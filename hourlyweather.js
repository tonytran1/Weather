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
    li.style.cssText = "list-style-type: none;width: 200px;text-align: center;font-weight: bold;display: inline-block;color: white;border-radius: 5px 5px 5px 5px;-moz-border-radius: 5px 5px 5px 5px;-webkit-border-radius: 5px 5px 5px 5px;border: 5px solid #000000; box-shadow: 10px 10px 10px #007099; margin: 4px; border-color: #0d0d0d; background: #333333; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + obj.FCTTIME.weekday_name + ', ' + obj.FCTTIME.month_name + ' ' + obj.FCTTIME.mday + '<br><font size="3">' + obj.FCTTIME.civil + '</font><br>';
    li.innerHTML = li.innerHTML + '<span class="fa-stack fa-2x"><i id="fa-custom" class="fa fa-circle fa-stack-2x text-primary" style="color:#f2f2f2" ></i><i class="fa fa-stack-1x fa-inverse"><img src="' + obj.icon_url + '"/></i></span>' + '<br>';
    li.innerHTML = li.innerHTML + '<font size="2">' + obj.condition + '</font><br>';
    li.innerHTML = li.innerHTML + '<font size="4">' + obj.temp.english + '\u00B0' + ' F</font>' + '<br>' + '<br>';
}