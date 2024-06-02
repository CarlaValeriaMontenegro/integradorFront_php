fetch('../json/paises.json')
    .then(response => response.json())
    .then(data => {
        // Obtener el elemento select
        const selectPais = document.getElementById("pais");

        // Crear y agregar opciones al select
        data.forEach((pais) => {
            const opcion = document.createElement("option");
            opcion.value = pais.codigo;
            opcion.textContent = pais.nombre;
            selectPais.appendChild(opcion);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
