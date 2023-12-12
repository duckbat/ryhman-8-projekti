// Creating map
var map = L.map("map").setView([60.184977, 24.956837], 11); // Setting coordinates and zoom level

// Adding tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Adding location marker
var marker = L.marker([60.184977, 24.956837]).addTo(map);

// Adding circle to map
var circle = L.circle([60.184977, 24.956837], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 6000,
}).addTo(map);

// Adding pop-ups
marker
  .bindPopup("<b>This is our location</b><br>We serve you here")
  .openPopup();

circle.bindPopup("We deliver to you in this area");
