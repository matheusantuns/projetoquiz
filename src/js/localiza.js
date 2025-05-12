let map = L.map('mapid').setView([-23.5505, -46.6333], 10);

//CONTRUINDO A APLICAÇÃO DO MAP DA API
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);


map.on('click',mapa);

function mapa(e){
    let lat = e.latlgn.lat.tofixed(6);
    let long = e.latlgn.lgn.tofixed(6);
    const locationInfo = document.getElementById('localizacao');
    if(locationInfo){
        locationInfo.textContent =` Localização clicada: Latitude ${lat}, Longitude ${long}`; 
    }
    L.marker(e.latlgn).addTo(map)
        .bindPopup(`Latitude: ${lat}<br> Longitude: ${long}`).openPopup();
}

map.on('click',mapa);
