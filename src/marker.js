const mapboxgl = require("mapbox-gl");

function makeMarkers (type, coordArray) {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if(type==='hotel'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    else if(type==='restaurant'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        console.log('add restaurant')
    }
    else if(type==='activity'){
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordArray)
}

module.exports = makeMarkers;