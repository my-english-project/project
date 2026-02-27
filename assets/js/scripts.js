// ======================================================
// ÍNDICE GLOBAL DEL SITIO (Base de datos para búsqueda)
// ======================================================
// IMPORTANTE: Como ahora son archivos separados, debes mantener
// esta lista actualizada manualmente con los títulos y las rutas (URLs)
// relativas desde la raíz del sitio.

const siteIndex = [
    // --- BASIC I ---
    { title: "Simple Present Tense", url: "levels/basic-I/topics/simple-present.html", path: "Basic I > Grammar" },
    { title: "Verb To Be & Have Got", url: "levels/basic-I/topics/topic2.html", path: "Basic I > Grammar" }, // Ejemplo
    { title: "Greetings and Introductions", url: "levels/basic-I/topics/topic3.html", path: "Basic I > Vocabulary" }, // Ejemplo

    // --- BASIC II ---
    { title: "Simple Past (Regular/Irregular)", url: "levels/basic-II/topics/simple-past.html", path: "Basic II > Grammar" },
    { title: "Prepositions of Place", url: "levels/basic-II/topics/topic2.html", path: "Basic II > Grammar" }, // Ejemplo

    // --- EXTRAS & RESOURCES ---
    { title: "Irregular Verbs List", url: "extras/irregular-verbs.html", path: "Extras > Grammar Tools" },
    { title: "Simple Present Flashcards", url: "flashcards/simple-present-flascards.html", path: "Flashcards" }

    // ... Continúa agregando aquí cada página nueva que crees ...
];


// ======================================================
// LÓGICA DEL BUSCADOR GLOBAL
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('globalSearchInput');
    const searchDropdown = document.getElementById('searchDropdown');

    // Verificar que los elementos existan en la página actual
    if (!searchInput || !searchDropdown) return;

    // Función para determinar la ruta relativa a la raíz
    // Esto es necesario porque el script se ejecuta en diferentes niveles de profundidad
    function getRootPath() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1; // Restamos 1 por la barra inicial
        if (depth <= 0) return "./";
        let relativePrefix = "";
        for (let i = 0; i < depth; i++) {
            relativePrefix += "../";
        }
        return relativePrefix;
    }

    const rootPrefix = getRootPath();


    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchDropdown.innerHTML = '';

        if (query.length < 2) {
            searchDropdown.style.display = 'none';
            return;
        }

        const filteredResults = siteIndex.filter(item =>
            item.title.toLowerCase().includes(query)
        );

        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                // Creamos el enlace directo al archivo
                const link = document.createElement('a');
                link.className = 'search-result-item';
                // Usamos el prefijo para ajustar la ruta relativa desde la página actual
                link.href = rootPrefix + result.url;
                link.innerHTML = `
                    <span class="result-title">${result.title}</span>
                    <span class="result-path">${result.path}</span>
                `;
                searchDropdown.appendChild(link);
            });
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.innerHTML = '<div class="search-result-item" style="cursor: default;">No matching topics found.</div>';
            searchDropdown.style.display = 'block';
        }
    });

    // Cerrar el buscador si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });
});