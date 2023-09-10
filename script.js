// inicializar o mapa
var map = L.map('map').setView([-25.4412803, -49.276], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);