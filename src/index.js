console.log('this is running')

const mapboxgl = require("mapbox-gl");
const makeMarkers = require("./marker")


mapboxgl.accessToken = "pk.eyJ1IjoiYXNoY29tcmFzIiwiYSI6ImNqZ280c2l5czFzeTEyd253M3RuZHlwZTgifQ.Ch416fVD4d-5gH2W5auUjA";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

const marker = makeMarkers('restaurant', [-74.009151, 40.705086]);
marker.addTo(map)
//makeMarkers('restuarant', [-74.009151, 40.705086])

// return new mapboxgl.Marker(markerDomEl).setLngLat(coordArray).addTo(map);