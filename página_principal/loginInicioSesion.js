document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', (event) => {
        if (!validarForm()) {
            event.preventDefault();
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Inicio de sesión exitoso!",
                showConfirmButton: false,
                timer: 10000
            });
        }
    });
    
    function validarForm() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
    
        if (email === "" || password === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, complete todos los campos.",
                footer: '<a href="#">¿Olvidaste tu usuario o contraseña?</a>'
              });
            return false;
        }
    
        if (!validarEmail(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, ingrese un correo electrónico válido.",
              });
            return false;
        }
    
        return true;
    }
    
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});