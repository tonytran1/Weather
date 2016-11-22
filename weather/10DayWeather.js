$("#invalid").dialog({ autoOpen: false, modal: true });
var dayWeather = document.createElement('ul');
document.getElementById("10day").appendChild(dayWeather);
$.getJSON("http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/forecast10day/q//" + city + ".json", function (resp) {
  try {
    $.each(resp.forecast.simpleforecast.forecastday, function () {
      logDay(this);
    });
  }
  catch (error) {
    $("#invalid").dialog('open');
    $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'});
  }
});

function logDay(obj) {
  var day = document.createElement('li');
  day.setAttribute('class', 'weather');
  dayWeather.appendChild(day);
  day.innerHTML += obj.date.weekday + ', ' + obj.date.monthname + ' ' + obj.date.day + '<br>' + obj.conditions + '<br>';
  day.innerHTML += '<span class="fa-stack fa-2x"><i id="fa-custom" class="fa fa-circle fa-stack-2x text-primary" style="color:#f2f2f2" ></i><i class="fa fa-stack-1x fa-inverse"><img src="' + obj.icon_url + '"/></i></span>' + '<br>';
  day.innerHTML += 'Precipitation: ' + obj.pop + '%' + '<br>';
  day.innerHTML += 'High: <font size="3">' + obj.high.fahrenheit + '\u00B0' + ' F</font>' + '<br>' + 'Low: <font size="3">' + obj.low.fahrenheit + '\u00B0' + ' F</font>' + '<br>';
  day.innerHTML += obj.avewind.dir + ' ' + obj.avewind.mph + ' mph';
}
