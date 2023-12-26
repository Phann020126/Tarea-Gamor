function choosePlatform(idPlatform)
{
    var platform = document.getElementById("platform");
    var platforms = platform.querySelectorAll("a");

    for(i=0; i<platforms.length; i++)
    {
        platforms[i].removeAttribute("selected");
    }

    platforms[idPlatform].setAttribute("selected", "True");
}

