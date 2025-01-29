import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWR1YXJkb2NhcGFuZW1hIiwiYSI6ImNrZXlpcXYxbDAyYnQycmxjbm81MjJibW8ifQ.UvpTHUYHenhHACCzTDHycg'; // Replace with your Mapbox token

const epidemicData = [
  { location: 'São Paulo, Brazil', coords: [-46.6333, -23.5505], threat: 8 },
  { location: 'New York, USA', coords: [-74.006, 40.7128], threat: 6 },
  { location: 'Lagos, Nigeria', coords: [3.3792, 6.5244], threat: 9 },
  { location: 'Mumbai, India', coords: [72.8777, 19.076], threat: 7 },
  { location: 'Tokyo, Japan', coords: [139.6917, 35.6895], threat: 5 },
  { location: 'Moscow, Russia', coords: [37.6173, 55.7558], threat: 4 },
  { location: 'London, UK', coords: [-0.1276, 51.5074], threat: 6 },
  { location: 'Sydney, Australia', coords: [151.2093, -33.8688], threat: 3 },
  { location: "São Paulo", coords: [-46.6333, -23.5505], threat: 8 },
  { location: "Rio de Janeiro", coords: [-43.1729, -22.9068], threat: 6 },
  { location: "Brasília", coords: [-47.8825, -15.7942], threat: 7 },
  { location: "Salvador", coords: [-38.5016, -12.9777], threat: 9 },
  { location: "Fortaleza", coords: [-38.5433, -3.7172], threat: 4 },
  { location: "Manaus", coords: [-60.025, -3.107], threat: 10 },
  { location: "Curitiba", coords: [-49.2904, -25.4296], threat: 5 },
  { location: "Recife", coords: [-34.9011, -8.0476], threat: 3 },
  { location: "Belo Horizonte", coords: [-43.9378, -19.9208], threat: 6 },
  { location: "Belém", coords: [-48.5044, -1.4558], threat: 7 },
  { location: "Goiânia", coords: [-49.2532, -16.6809], threat: 2 },
  { location: "Porto Alegre", coords: [-51.2177, -30.0346], threat: 4 },
  { location: "Cuiabá", coords: [-56.0979, -15.6014], threat: 5 },
];

const threatColors = [
  '#00FF00', // 1 - Green (Safe)
  '#ADFF2F', // 2 - Light Green
  '#FFFF00', // 3 - Yellow (Caution)
  '#FFA500', // 4 - Orange (Moderate Threat)
  '#FF4500', // 5 - Red-Orange
  '#FF0000', // 6 - Red (High Threat)
  '#8B0000', // 7 - Dark Red
  '#800080', // 8 - Purple (Severe)
  '#4B0082', // 9 - Dark Purple
  '#000000', // 10 - Black (Critical)
];

const MapOne = () => {
  const mapContainerRef = useRef(null);
  const legendRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/outdoors-v12', // Clean light-style map
      center: [-51.9253, -14.2350], // Brazil-centered view
      zoom: 2,
    });

    map.addControl(new mapboxgl.NavigationControl());

    // Convert epidemic data to GeoJSON format
    const geojsonData = {
      type: 'FeatureCollection',
      features: epidemicData.map(({ location, coords, threat }) => ({
        type: 'Feature',
        properties: { location, threat },
        geometry: { type: 'Point', coordinates: coords },
      })),
    };

    // Add data as a source
    map.on('load', () => {
      map.addSource('epidemic-threats', {
        type: 'geojson',
        data: geojsonData,
      });

      // Add circle layer with color gradient based on threat level
      map.addLayer({
        id: 'epidemic-circles',
        type: 'circle',
        source: 'epidemic-threats',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['get', 'threat'], 1, 5, 10, 30], // Dynamic size
          'circle-color': [
            'interpolate',
            ['linear'],
            ['get', 'threat'],
            1, '#00FF00', // 🟢 Green (Low threat)
            4, '#FFD700', // 🟡 Yellow (Moderate)
            6, '#FF8C00', // 🟠 Orange (High)
            8, '#FF0000'  // 🔴 Red (Severe)
          ],
          'circle-opacity': 0.5,
          'circle-stroke-width': 1.5,
          'circle-stroke-color': [
            'interpolate',
            ['linear'],
            ['get', 'threat'],
            1, '#007700', // Darker Green
            4, '#B8860B', // Darker Yellow
            6, '#CC5500', // Darker Orange
            8, '#8B0000'  // Dark Red
          ],
        },
      });

      // Add a click event listener for each circle
      map.on('click', 'epidemic-circles', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const { location, threat } = e.features[0].properties;

        // Create a popup and set its content
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<strong>Location:</strong> ${location}<br/><strong>Threat Level:</strong> ${threat}`)
          .addTo(map);
      });

      // Change the cursor to a pointer when the user hovers over the circles
      map.on('mouseenter', 'epidemic-circles', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Reset the cursor when it leaves the circle layer
      map.on('mouseleave', 'epidemic-circles', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12 relative">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Visão Epidemiológica Global
      </h4>
      <div
        ref={mapContainerRef}
        className="mapOne map-btn h-90"
        style={{ height: '800px', width: '100%' }}
      ></div>

      {/* Legend */}
      <div
        ref={legendRef}
        className="absolute bottom-5 left-5 bg-white p-3 shadow-md rounded-lg"
        style={{ bottom: '71px', position: 'absolute' }}
      >
        <h5 className="text-sm font-semibold mb-2">Nível de Ameaça</h5>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span className="text-xs">1-3: Baixa</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
          <span className="text-xs">4-5: Moderada</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-xs">6-7: Alta</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
          <span className="text-xs">8-10: Grave</span>
        </div>
      </div>
    </div>
  );
};

export default MapOne;
