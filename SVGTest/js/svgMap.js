window.onload = loadMap;

/*
    * Retrieves and puts an SVG map in the background.
    */
function loadMap(){
    var source = "img/map.svg";
    var div = document.getElementById('imgDiv');
    var elem = document.createElement('img');
    elem.setAttribute("src", source);
    elem.setAttribute("height", "800");
    elem.setAttribute("width", "650");
    elem.setAttribute("id","imgBackground");
    div.appendChild(elem);
}

