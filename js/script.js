document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los elementos clave del DOM
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 2. Verificamos que ambos elementos existan antes de añadir el evento
    if (toggleButton && navMenu) {
        
        // 3. Añadimos un "escuchador de eventos" (event listener) al botón
        toggleButton.addEventListener('click', () => {
            // Cuando se hace click, alternamos la clase 'nav-open' en el menú
            // Si la tiene, la quita (oculta); si no la tiene, la pone (muestra)
            navMenu.classList.toggle('nav-open');
        });

        // OPCIONAL: Cerrar el menú al hacer clic en un enlace (útil en móviles)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-open');
            });
        });
    }
});
