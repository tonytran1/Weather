var dateobj = new Date();
var month = dateobj.getMonth();
var day = dateobj.getDate();
var year = dateobj.getFullYear();
document.write(getMonth(month) + " " + day);

function getMonth(month) 
{
var monthStr = ['January', 'February','March', 'April',	'May', 'June',	'July',	'August', 'September', 'October', 'November', 'December'];
    return monthStr[month];
}
