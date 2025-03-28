# About the map
A map is created to display interactive pins allowing user know more details about a specific zone. 
Each card should contain text and an image related to the conservation/sustainable project locations.

For now, each pin is calculated as the centroid of each multipolygon. 

A second Geojson could be created to pass locations for each card for a given project. In such case, the code should be modify. The geocoordinates can be related to different factors as it is listed below:

- the approximated location where an specific specimen was observed.
- a random pair of coordinates to depict animals inside the project but protecting the real animal locatioin for safety animal security.
- the location of a tree if the project aims to reforest an area
- location of user interest facilities, such a local musseum, toilets, medic services, etc.

# About the Geojson files
The polygons for each country used by the "map" version have been gathered from https://geojson-maps.kyd.au/

The individual points in the "map_display_cards" version have been fetched using the website geojson.io
 