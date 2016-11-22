var weatherRecords = document.createElement('ul');
document.getElementById("records").appendChild(weatherRecords);
jQuery(document).ready(function ($) {
  $.ajax({
    url: "http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/almanac/q//" + city + ".json",
    dataType: "jsonp",
    success: function (parsed_json) {
      grab(parsed_json);
    }
  });
});

function grab(obj) {
  document.getElementById("city_name").innerHTML = obj['location']['city'];
  var normHigh = obj['almanac']['temp_high']['normal']['F'];
  var recHigh = obj['almanac']['temp_high']['record']['F'];
  var recHighYear = obj['almanac']['temp_high']['recordyear'];
  var normLow = obj['almanac']['temp_low']['normal']['F'];
  var recLow = obj['almanac']['temp_low']['record']['F'];
  var recLowYear = obj['almanac']['temp_low']['recordyear'];
  send(recHigh, recHighYear, recLow, recLowYear, normHigh, normLow);
}

function send(recHigh, recHighYear, recLow, recLowYear, normHigh, normLow) {
  var recHighText = document.createElement('li');
  var recHighValue = document.createElement('li');
  var recLowText = document.createElement('li');
  var recLowValue = document.createElement('li');
  var normHighText = document.createElement('li');
  var normHighValue = document.createElement('li');
  var normLowText = document.createElement('li');
  var normLowValue = document.createElement('li');

  recHighText.setAttribute('class', 'recordText');
  recLowText.setAttribute('class', 'recordText');
  normHighText.setAttribute('class', 'recordText');
  normLowText.setAttribute('class', 'recordText');

  recHighValue.setAttribute('class', 'recordHigh');
  recLowValue.setAttribute('class', 'recordLow');
  normHighValue.setAttribute('class', 'recordHigh');
  normLowValue.setAttribute('class', 'recordLow');


  weatherRecords.appendChild(recHighText);
  weatherRecords.appendChild(recHighValue);
  weatherRecords.appendChild(recLowText);
  weatherRecords.appendChild(recLowValue);
  weatherRecords.appendChild(normHighText);
  weatherRecords.appendChild(normHighValue);
  weatherRecords.appendChild(normLowText);
  weatherRecords.appendChild(normLowValue);

  recHighText.innerHTML = "The highest recorded: <br>";
  recHighValue.innerHTML = recHigh + '\u00B0' + "F in " + recHighYear + " <br><br>";

  recLowText.innerHTML = "The lowest recorded: <br>";
  recLowValue.innerHTML = recLow + '\u00B0' + "F in " + recLowYear + " <br><br>";

  normHighText.innerHTML = "Average highs: <br>";
  normHighValue.innerHTML = normHigh + '\u00B0' + "F <br><br>";

  normLowText.innerHTML = "Average lows: <br>";
  normLowValue.innerHTML = normLow + '\u00B0' + "F <br><br>";
}
