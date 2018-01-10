import Feature from '../src/ol/Feature.js';
import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import Point from '../src/ol/geom/Point.js';
import TileLayer from '../src/ol/layer/Tile.js';
import VectorLayer from '../src/ol/layer/Vector.js';
import {fromLonLat} from '../src/ol/proj.js';
import TileJSON from '../src/ol/source/TileJSON.js';
import VectorSource from '../src/ol/source/Vector.js';
import _ol_style_Icon_ from '../src/ol/style/Icon.js';
import _ol_style_Style_ from '../src/ol/style/Style.js';


var rome = new Feature({
  geometry: new Point(fromLonLat([12.5, 41.9]))
});

var london = new Feature({
  geometry: new Point(fromLonLat([-0.12755, 51.507222]))
});

var madrid = new Feature({
  geometry: new Point(fromLonLat([-3.683333, 40.4]))
});

rome.setStyle(new _ol_style_Style_({
  image: new _ol_style_Icon_(/** @type {olx.style.IconOptions} */ ({
    color: '#8959A8',
    crossOrigin: 'anonymous',
    src: 'data/dot.png'
  }))
}));

london.setStyle(new _ol_style_Style_({
  image: new _ol_style_Icon_(/** @type {olx.style.IconOptions} */ ({
    color: '#4271AE',
    crossOrigin: 'anonymous',
    src: 'data/dot.png'
  }))
}));

madrid.setStyle(new _ol_style_Style_({
  image: new _ol_style_Icon_(/** @type {olx.style.IconOptions} */ ({
    color: [113, 140, 0],
    crossOrigin: 'anonymous',
    src: 'data/dot.png'
  }))
}));


var vectorSource = new VectorSource({
  features: [rome, london, madrid]
});

var vectorLayer = new VectorLayer({
  source: vectorSource
});

var rasterLayer = new TileLayer({
  source: new TileJSON({
    url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
    crossOrigin: ''
  })
});

var map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([2.896372, 44.60240]),
    zoom: 3
  })
});
