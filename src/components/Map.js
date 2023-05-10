import React from 'react'

function Map() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaTI5dGFyZXNoIiwiYSI6ImNsaDFtcTVhZzBhMTIzb29hYWsycHQyY3QifQ.9puy6GfNXVpfObCbUhStgA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [76.768066, 30.741482], // starting position
        zoom: 12
      });
      
      map.addControl(
          new mapboxgl.GeolocateControl({
              positionOptions: {
                  enableHighAccuracy: true
              },
              // When active the map will receive updates to the device's location as it changes.
              trackUserLocation: true,
              // Draw an arrow next to the location dot to indicate which direction the device is heading.
              showUserHeading: true
          })
      );
      
      var start = [];
      
      if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
              var latitude = position.coords.latitude;
              var longitude = position.coords.longitude;
      
              // Center the map on the user's location
              start = [longitude, latitude];
              map.setCenter([longitude, latitude]);
          });
      } else {
          alert('Geolocation is not supported by your browser');
      }
      
      // an arbitrary start will always be the same
      // only the end or destination will change
      
      // create a function to make a directions request
      async function getRoute(end) {
          // make a directions request using cycling profile
          // an arbitrary start will always be the same
          // only the end or destination will change
          const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
            { method: 'GET' }
          );
          const json = await query.json();
          const data = json.routes[0];
          const route = data.geometry.coordinates;
          const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route
            }
          };
          // if the route already exists on the map, we'll reset it using setData
          if (map.getSource('route')) {
            map.getSource('route').setData(geojson);
          }
          // otherwise, we'll make a new request
          else {
            map.addLayer({
              id: 'route',
              type: 'line',
              source: {
                type: 'geojson',
                data: geojson
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75
              }
            });
          }
          // get the sidebar and add the instructions
          const instructions = document.getElementById('instructions');
          const steps = data.legs[0].steps;
      
          let tripInstructions = '';
          for (const step of steps) {
          tripInstructions += `<li>${step.maneuver.instruction}</li>`;
          }
          instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
          data.duration / 60
          )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
        }
        
        map.on('load', () => {
          // make an initial directions request that
          // starts and ends at the same location
          getRoute(start);
        
          // Add starting point to the map
          map.addLayer({
            id: 'point',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: start
                    }
                  }
                ]
              }
            },
            paint: {
              'circle-radius': 10,
              'circle-color': '#3887be'
            }
          });
      
          map.on('click', (event) => {
              const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
              const end = {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: coords
                    }
                  }
                ]
              };
              if (map.getLayer('end')) {
                map.getSource('end').setData(end);
              } else {
                map.addLayer({
                  id: 'end',
                  type: 'circle',
                  source: {
                    type: 'geojson',
                    data: {
                      type: 'FeatureCollection',
                      features: [
                        {
                          type: 'Feature',
                          properties: {},
                          geometry: {
                            type: 'Point',
                            coordinates: coords
                          }
                        }
                      ]
                    }
                  },
                  paint: {
                    'circle-radius': 10,
                    'circle-color': '#f30'
                  }
                });
              }
              getRoute(coords);
            });
        });
  return (
    <div>Map</div>
  )
}

export default Map