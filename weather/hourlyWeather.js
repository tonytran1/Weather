var hourlyWeather = document.createElement('ul');
document.getElementById("hourly").appendChild(hourlyWeather);
$.getJSON("http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/hourly/q//" + city + ".json", function (resp) {
  $.each(resp.hourly_forecast, function () {
      logTime(this);
  });
});
function logTime(obj) {
  var hourly = document.createElement('li');
  hourly.setAttribute('class', 'weather');
  hourlyWeather.appendChild(hourly);
  hourly.innerHTML += obj.FCTTIME.weekday_name + ', ' + obj.FCTTIME.month_name + ' ' + obj.FCTTIME.mday + '<br><font size="3">' + obj.FCTTIME.civil + '</font><br>';
  hourly.innerHTML += '<span class="fa-stack fa-2x"><i id="fa-custom" class="fa fa-circle fa-stack-2x text-primary" style="color:#f2f2f2" ></i><i class="fa fa-stack-1x fa-inverse"><img src="' + obj.icon_url + '"/></i></span>' + '<br>';
  hourly.innerHTML += '<font size="2">' + obj.condition + '</font><br>';
  hourly.innerHTML += '<font size="4">' + obj.temp.english + '\u00B0' + ' F</font>';
}
