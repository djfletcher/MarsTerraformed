import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

window.addEventListener("DOMContentLoaded", () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGpmbGV0Y2hlciIsImEiOiJjajF6bjR5djUwMzQzMndxazY3cnR5MGtmIn0.EhgTpiAXtQ6D0H82S24b5g';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    // style: 'mapbox://styles/mapbox/mars-terrain-v1'
  });

  map.on('load', () => {
    map.addSource('mars-terrain-v1', {
      "type": 'vector',
      "url": 'mapbox://mapbox.mars-terrain-v1'
    });

    map.addLayer({
      "id": "mars-terrain-v1",
      "source": "mars-terrain-v1",
      'layout': {
          'visibility': 'visible'
        },
      "type": "background"
    });
  });

  window.map = map;
});
