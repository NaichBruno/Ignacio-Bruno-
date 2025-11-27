
    const mapa = L.map('mapa-entregas').setView([-34.6037, -58.3816], 12);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(mapa);


    const puntos = [
        { nombre: "Punto 1 - Plaza Congreso", lat: -34.6090, lon: -58.3925 },
        { nombre: "Punto 2 - Retiro", lat: -34.5940, lon: -58.3747 },
        { nombre: "Punto 3 - Constitución", lat: -34.6274, lon: -58.3810 },
        { nombre: "Punto 4 - Palermo", lat: -34.5875, lon: -58.4300 }
    ];

    puntos.forEach(p => {
        L.marker([p.lat, p.lon]).addTo(mapa)
        .bindPopup(`<b>${p.nombre}</b>`);
    });


    const recorrido = [
        [-34.6090, -58.3925],
        [-34.5940, -58.3747],
        [-34.6274, -58.3810],
        [-34.5875, -58.4300]
    ];

    L.polyline(recorrido, { color: 'red', weight: 4 }).addTo(mapa);