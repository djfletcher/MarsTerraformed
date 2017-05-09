import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

window.addEventListener("DOMContentLoaded", () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGpmbGV0Y2hlciIsImEiOiJjajF6bjR5djUwMzQzMndxazY3cnR5MGtmIn0.EhgTpiAXtQ6D0H82S24b5g';
  const map = new mapboxgl.Map({
    container: 'map',
    style: {
      "version": 8,
      "sources": {
        "mars-satellite": {
          "type": "raster",
          "url": "mapbox://mapbox.mars-satellite",
          "tileSize": 256
        },
      },
      "layers": [{
        "id": "satellite",
        "type": "raster",
        "source": "mars-satellite",
        "minzoom": 0,
        "maxzoom": 22
      }]
    }

  });

  map.on('load', () => {
    map.addLayer({
      "id": "terrain",
      "type": "line",
      "source": {
        type: 'vector',
        url: 'mapbox://mapbox.mars-terrain-v1'
      },
      "source-layer": "contour",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#8B0000",
        "line-width": 2
      }
    });
  });

  window.map = map;
});
