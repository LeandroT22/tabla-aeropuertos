let aeropuertos = [
    { "id": 1, "nombre": "Doany Airport", "puntaje": 9 },
    { "id": 2, "nombre": "Dehradun Airport", "puntaje": 3 },
    { "id": 3, "nombre": "Moyale Airport", "puntaje": 6 },
    { "id": 4, "nombre": "Roanne-Renaison Airport", "puntaje": 7 },
    { "id": 5, "nombre": "Cayana Airstrip", "puntaje": 8 },
    { "id": 6, "nombre": "Sancti Spiritus Airport", "puntaje": 6 },
    { "id": 7, "nombre": "Sher-Wood Airport", "puntaje": 10 },
    { "id": 8, "nombre": "Bizant Airport", "puntaje": 7 },
    { "id": 9, "nombre": "Grand Forks Airport", "puntaje": 8 },
    { "id": 10, "nombre": "Kwailabesi Airport", "puntaje": 6 }
  ];
  
  let calificacionSeleccionada = 0; // Inicializa la calificación
  
  function mostrar(aeropuertos) {
    let data = "";
  
    for (let aeropuerto of aeropuertos) {
        let puntos = "";
        for (let i = 0; i < 10; i++) {
            if ((i + 1) < aeropuerto.puntaje) {
                puntos += "<img src='./img/llena.png' width=15>";
            } else {
                puntos += "<img src='./img/vacia.png' width=15>";
            }
        }
        data += `<tr><td>${aeropuerto.nombre}</td><td style="background-color:grey;">${puntos}</td></tr>`;
    }
    document.getElementById('filas').innerHTML = data;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    mostrar(aeropuertos);
  
    // Manejo de estrellas
    let stars = document.querySelectorAll('#product-star-rating i');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            calificacionSeleccionada = index + 2; // Guarda la calificación seleccionada
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.replace('far', 'fas'); // Estrella llena
                } else {
                    s.classList.replace('fas', 'far'); // Estrella vacía
                }
            });
        });
    });
  
    // Manejo del botón Enviar
    document.getElementById('botonEnviar').addEventListener('click', () => {
        let nombreAeropuerto = document.getElementById('nombreAeropuerto').value.trim();
  
        // Validación
        if (nombreAeropuerto === "" || calificacionSeleccionada === 0) {
            alert('Por favor ingresa un nombre y una calificación.');
            return;
        }
  
        // Crear un nuevo ID para el nuevo aeropuerto
        let nuevoId = aeropuertos.length + 1;
  
        // Crear objeto de reseña
        let nuevaReseña = {
            id: nuevoId,
            nombre: nombreAeropuerto,
            puntaje: calificacionSeleccionada
        };
  
        // Agregar la nueva reseña al arreglo
        aeropuertos.push(nuevaReseña);
  
        // Limpiar el formulario
        document.getElementById('nombreAeropuerto').value = ""; // Limpiar el campo de texto
        stars.forEach(star => star.classList.replace('fas', 'far')); // Limpiar estrellas
        calificacionSeleccionada = 0; // Reiniciar calificación
  
        // Mostrar reseñas actualizadas
        mostrar(aeropuertos);
    });
  });