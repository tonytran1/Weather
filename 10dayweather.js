$("#invalid").dialog({ autoOpen: false, modal: true });
var ul1 = document.createElement('ul1');
document.getElementById("10day").appendChild(ul1);
$.getJSON("http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/forecast10day/q//" + city + ".json", function (resp)
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
            $("#invalid").dialog('open');
            $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'});
    }
});

function logDay(obj)
{
    var li1 = document.createElement('li1');
    li1.style.cssText = "list-style-type: none;width: 200px;text-align: center;font-weight: bold;display: inline-block;color: black;border-radius: 5px 5px 5px 5px;-moz-border-radius: 5px 5px 5px 5px;-webkit-border-radius: 5px 5px 5px 5px;border: 5px solid #000000; box-shadow: 7px 7px 7px #007099; margin: 4px; border-color: #333333";
    ul1.appendChild(li1);
    li1.innerHTML = li1.innerHTML + obj.date.weekday + ', ' + obj.date.monthname + ' ' + obj.date.day + '<br>' + obj.conditions + '<br>';
    li1.innerHTML = li1.innerHTML + '<span class="fa-stack fa-2x"><i id="fa-custom" class="fa fa-circle fa-stack-2x text-primary" style="color:#f2f2f2" ></i><i class="fa fa-stack-1x fa-inverse"><img src="' + obj.icon_url + '"/></i></span>' + '<br>';
    li1.innerHTML = li1.innerHTML + 'Precipitation: ' + obj.pop + '%' + '<br>';
    li1.innerHTML = li1.innerHTML + 'High: ' + obj.high.fahrenheit + '\u00B0' + ' F' + '<br>' + 'Low: ' + obj.low.fahrenheit + '\u00B0' + ' F' + '<br>';
    li1.innerHTML = li1.innerHTML + obj.avewind.dir + ' ' + obj.avewind.mph + ' mph' + '<br>' + '<br>';
    
}

/*
<span class="fa-stack fa-2x">                        
                        <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-home fa-stack-1x fa-inverse"></i></span>*/