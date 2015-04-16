//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");

//get access to Leaflet and the map
var element = document.querySelector("leaflet-map");
var L = element.leaflet;
var map = element.map;

//ICH code for popup template if needed----------
// var ich = require("icanhaz");
// var templateFile = require("./_popup.html");
// ich.addTemplate("popup", templateFile);

// var onEachFeature = function(feature, layer) {
//   layer.bindPopup(ich.popup(feature.properties))
// };

 map.scrollWheelZoom.disable();