function closeDialog()
{
    $(".dialog").dialog('close');
    city = "San Francisco, CA";
    localStorage.setItem("city", city);
    location.reload();
}