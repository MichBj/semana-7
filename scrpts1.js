document.addEventListener('DOMContentLoaded', function () {
    // Validación del formulario
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        let isValid = true;

        if (!nombre.value.trim()) {
            nombre.classList.add('is-invalid');
            isValid = false;
        } else {
            nombre.classList.remove('is-invalid');
        }

        if (!email.value.trim() || !email.value.includes('@')) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (!mensaje.value.trim()) {
            mensaje.classList.add('is-invalid');
            isValid = false;
        } else {
            mensaje.classList.remove('is-invalid');
        }

        if (isValid) {
            alert('¡Formulario enviado con éxito!');
            form.reset();
        }
    });

    // Botón de alerta (ya manejado por el modal, pero mantenemos por compatibilidad)
    const alertButton = document.getElementById('alertButton');
    if (alertButton) {
        // No necesitamos evento aquí, el modal se activa con Bootstrap
    }

    // Redirección al hacer clic en el botón "Semana 7"
    const semana7Btn = document.getElementById('semana7Btn');
    if (semana7Btn) {
        semana7Btn.addEventListener('click', function () {
            const targetUrl = 'index2.html'; // Verifica este nombre
            window.location.href = targetUrl;
            console.log('Intentando redirigir a: ' + targetUrl); // Para depuración
        });
    }

  
});