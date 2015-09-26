var ul2 = document.createElement('ul2');
document.getElementById("records").appendChild(ul2);
jQuery(document).ready(function ($) 
{
    $.ajax({
        url: "http://api.wunderground.com/api/a8c6c1abaa4a5040/geolookup/almanac/q/CA/San_Francisco.json",
        dataType: "jsonp",
        success: function (parsed_json)
        {
            grab(parsed_json);
        }
    });
    });

    
    function grab(obj)
            {
                var normHigh = obj['almanac']['temp_high']['normal']['F'];
                var recHigh = obj['almanac']['temp_high']['record']['F'];
                var recHighYear = obj['almanac']['temp_high']['recordyear'];
                var normLow = obj['almanac']['temp_low']['normal']['F'];
                var recLow = obj['almanac']['temp_low']['record']['F'];
                var recLowYear = obj['almanac']['temp_low']['recordyear'];
                send(recHigh,recHighYear,recLow,recLowYear,normHigh,normLow);
            }
            
    function send(recHigh,recHighYear,recLow,recLowYear,normHigh,normLow)
            {
                var li2 = document.createElement('li2');
                var li3 = document.createElement('li2');
                var li4 = document.createElement('li2');
                var li5 = document.createElement('li2');
                var li6 = document.createElement('li2');
                var li7 = document.createElement('li2');
                var li8 = document.createElement('li2');
                var li9 = document.createElement('li2');
                
                li2.setAttribute('style','text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li3.setAttribute('style','color: red;text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li4.setAttribute('style','text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li5.setAttribute('style','color: blue;text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li6.setAttribute('style','text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li7.setAttribute('style','color: red;text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li8.setAttribute('style','text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                li9.setAttribute('style','color: blue;text-align: center;font-family: arial, sans-serif;font-size: 20px;font-weight: bold;letter-spacing: 2.8pt;word-spacing: -1.4pt;line-height: 1.4;display:block;');
                
                ul2.appendChild(li2);
                ul2.appendChild(li3);
                ul2.appendChild(li4);
                ul2.appendChild(li5);
                ul2.appendChild(li6);
                ul2.appendChild(li7);
                ul2.appendChild(li8);
                ul2.appendChild(li9);
                   
                li2.innerHTML = "The highest recorded: <br>";
                li3.innerHTML = recHigh + '\u00B0' + "F in " + recHighYear + " <br><br>";
                
                li4.innerHTML = "The lowest recorded: <br>";
                li5.innerHTML = recLow + '\u00B0' + "F in " + recLowYear + " <br><br>";
                
                li6.innerHTML = "Average highs: <br>";
                li7.innerHTML = normHigh + '\u00B0' + "F <br><br>"; 
                
                li8.innerHTML = "Average lows: <br>";
                li9.innerHTML = normLow + '\u00B0' + "F <br><br>";
            }