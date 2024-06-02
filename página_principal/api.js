document.addEventListener("DOMContentLoaded", () => {
    const contenedorPersonajes = document.getElementById("personajesRick");


    // Fetch personajes de Rick and Morty >>>>>

    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((datos) => {
            console.log(datos);
            console.log(datos.results);

            datos.results.forEach((elementos) => {
                // Crear el contenedor de cada personaje
                const personajes = document.createElement("div");

                // Insertar el contenido dentro del contenedor
                personajes.innerHTML = `
                    <img src="${elementos.image}" style="width: 100%; height: auto; display: block; border-radius: 10px;">
                    <h4>${elementos.name}</h4>
                `;

                // Añadir el contenedor al contenedor de personajes
                contenedorPersonajes.append(personajes);
            });

            // Estilos al contenedor de personajes
            contenedorPersonajes.style.display = "flex";
            contenedorPersonajes.style.flexWrap = "wrap";
            contenedorPersonajes.style.justifyContent = "center";
        })
        .catch((error) => {
            console.error("Error al cargar los datos: ", error);
        });



})