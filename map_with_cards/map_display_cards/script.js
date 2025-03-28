// Initialize the map
var map = L.map('map').setView([0.995832, -76.486949],3);
// Link to compatible tiles https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    ).addTo(map);

var geojsonPolygonStyle = {
    radius: 8,
    // fillColor: "#5cd816",
    color: "#fae4e4",//"#013d8d", //"0d2495",
    weight: 2,
    opacity: 1,
    // fillOpacity: 0.2
};
fetch("https://raw.githubusercontent.com/kathy53/green_developments/refs/heads/main/map_with_cards/geofiles/america.geojson")
    .then(response => response.json())
    .then(data => {
        
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name);

                var centroid = getCentroid(feature.geometry);

                if (centroid) {
                L.marker(centroid).addTo(map)
                    .bindPopup(feature.properties.name);
            }
            },
            style: geojsonPolygonStyle
        }).addTo(map);
    });

    function getCentroid(geometry) {
        let coords;
        if (geometry.type === "Polygon") {
            coords = geometry.coordinates[0];
        } else if (geometry.type === "MultiPolygon") {
            coords = geometry.coordinates[0][0];
        } else {
            return null;
        }
        let sumX = 0, sumY = 0;
        coords.forEach(coord => {
            sumX += coord[1]; // Latitude
            sumY += coord[0]; // Longitude
        });
        const centerLat = sumX / coords.length;
        const centerLon = sumY / coords.length;
        return [centerLat, centerLon];
    };