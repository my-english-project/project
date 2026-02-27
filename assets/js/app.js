// ==========================================
// LÓGICA DE LA APLICACIÓN
// ==========================================

// Referencias a elementos del DOM
const mainContent = document.getElementById('main-content');
const breadcrumbsContainer = document.getElementById('breadcrumbs');
const globalFooterNav = document.getElementById('global-footer-nav');

// ==========================================
// FUNCIONES DE NAVEGACIÓN (ROUTER)
// ==========================================

// --- VISTA: HOME ---
function renderHome() {
    updateBreadcrumbs([]);
    globalFooterNav.classList.remove('hidden');

    mainContent.innerHTML = `
        <div class="search-container">
            <input type="text" id="globalSearch" class="search-input" placeholder="Search for topics (e.g., Simple Present)...">
            <div id="searchResults" class="search-results"></div>
        </div>

        <h1 class="section-title">Course Levels</h1>
        <div class="grid-menu home-grid">
            <div class="menu-btn btn-basic" onclick="renderGrade('basic')">
                <div>
                    <span>BASIC LEVELS</span>
                    <span class="btn-subtitle">(A1 - A2) Basic I, II, III, IV</span>
                </div>
                <span class="btn-arrow">➔</span>
            </div>
                <div class="menu-btn btn-inter" onclick="renderGrade('intermediate')">
                <div>
                    <span>INTERMEDIATE LEVELS</span>
                    <span class="btn-subtitle">(B1 - B2) Intermediate I, II, III, IV</span>
                </div>
                <span class="btn-arrow">➔</span>
            </div>
                <div class="menu-btn btn-adv" onclick="renderGrade('advanced')">
                <div>
                    <span>ADVANCED LEVELS</span>
                    <span class="btn-subtitle">(C1) Advanced I, II, III, IV</span>
                </div>
                <span class="btn-arrow">➔</span>
            </div>
        </div>
    `;
    initSearch(); // Inicializar el listener del buscador
}


// --- VISTA: GRADO (Ej. Basic Levels) ---
function renderGrade(gradeKey) {
    // courseData está disponible globalmente desde data.js
    const gradeData = courseData[gradeKey];
    updateBreadcrumbs([{text: gradeData.title, onClick: `renderGrade('${gradeKey}')`}]);
    globalFooterNav.classList.add('hidden');

    let cefrHtml = '';
    gradeData.cefrDesc.forEach(desc => {
        cefrHtml += `<h3>${desc.title}</h3><p>${desc.text}</p>`;
    });

    let levelsHtml = '<div class="grid-menu">';
    for (const [levelKey, levelData] of Object.entries(gradeData.levels)) {
            levelsHtml += `
            <div class="menu-btn ${gradeData.theme}" onclick="renderLevel('${gradeKey}', '${levelKey}')">
                ${levelData.title}
                <span class="btn-arrow">➔</span>
            </div>
            `;
    }
    levelsHtml += '</div>';

    mainContent.innerHTML = `
        <h1 class="section-title">${gradeData.title}</h1>
        <div class="cefr-desc-box">${cefrHtml}</div>
        ${levelsHtml}
    `;
}


// --- VISTA: NIVEL (Índice de Tópicos, Ej. Basic I) ---
function renderLevel(gradeKey, levelKey) {
    const gradeData = courseData[gradeKey];
    const levelData = gradeData.levels[levelKey];
    updateBreadcrumbs([
        {text: gradeData.title, onClick: `renderGrade('${gradeKey}')`},
        {text: levelData.title, onClick: `renderLevel('${gradeKey}', '${levelKey}')`}
    ]);
    globalFooterNav.classList.add('hidden');

    let topicsHtml = '<div class="topic-list">';
    levelData.topics.forEach((topic, index) => {
        // Usamos el índice del array como identificador del tópico
        topicsHtml += `
            <div class="topic-item" onclick="renderContent('${gradeKey}', '${levelKey}', ${index})">
                ${topic}
                <span style="color: #999;">➔</span>
            </div>
        `;
    });
    topicsHtml += '</div>';

    mainContent.innerHTML = `
        <h1 class="section-title">${levelData.title}: Topics</h1>
        ${topicsHtml}
    `;
}


// --- VISTA: CONTENIDO (La lección final) ---
function renderContent(gradeKey, levelKey, topicIndex) {
    const gradeData = courseData[gradeKey];
    const levelData = gradeData.levels[levelKey];
    const topicTitle = levelData.topics[topicIndex];

    updateBreadcrumbs([
        {text: gradeData.title, onClick: `renderGrade('${gradeKey}')`},
        {text: levelData.title, onClick: `renderLevel('${gradeKey}', '${levelKey}')`},
        {text: topicTitle, isCurrent: true}
    ]);
    globalFooterNav.classList.add('hidden');

    // --- GENERADOR DE CONTENIDO (PLACEHOLDER) ---
    // NOTA: En una app real, aquí cargarías archivos HTML/JSON específicos
    // de tus carpetas /topics/ o /levels/.

    let contentBody = '';

    // --- EJEMPLO REAL DE CONTENIDO (Solo para demostración) ---
    if (topicTitle === "Simple present tense" && levelKey === 'basic1') {
            contentBody = `
            <p>The <strong>Simple Present</strong> is used to talk about daily routines, habits, general truths, and permanent facts.</p>

            <h2>Structure (Affirmative)</h2>
            <div class="content-example-box">
                <p>Subject + Verb (base form) + Complement</p>
                <ul>
                <li>I <strong>work</strong> in an office.</li>
                <li>They <strong>play</strong> soccer on weekends.</li>
                </ul>
                <p><em>*For <strong>He, She, It</strong>, we add 's' or 'es' to the verb.</em></p>
                <ul>
                <li>She <strong>works</strong> in an office.</li>
                <li>He <strong>watches</strong> TV every night.</li>
                </ul>
            </div>

            <h2>Common Uses</h2>
                <ul>
                <li><strong>Routines:</strong> I wake up at 7:00 AM.</li>
                <li><strong>Habits:</strong> She drinks coffee every morning.</li>
                <li><strong>Truths:</strong> The sun rises in the east.</li>
            </ul>
        `;
    } else {
        // --- PLANTILLA GENÉRICA PARA EL RESTO ---
        contentBody = `
            <p>This is the content placeholder for the topic: <strong>${topicTitle}</strong>.</p>
            <p>Example: You could load a PDF from your <strong>/levels/basic1/</strong> folder here.</p>
            <div class="content-example-box">
                <h3>Examples:</h3>
                <ul>
                    <li>Example sentence 1 related to ${topicTitle}.</li>
                    <li>Example sentence 2 related to ${topicTitle}.</li>
                    <li>Example sentence 3 related to ${topicTitle}.</li>
                </ul>
            </div>
        `;
    }

    mainContent.innerHTML = `
        <div class="content-box">
            <h1 style="color: var(--color-uts-green);">${topicTitle}</h1>
            ${contentBody}
                <div style="margin-top: 30px; text-align: center;">
                <button class="menu-btn btn-adv" style="margin: auto; display: inline-block; font-size: 1rem; padding: 10px 20px;">
                Go to Exercises (assets/exercises/)
                </button>
            </div>
        </div>
    `;
}


// ==========================================
// FUNCIONES UTILITARIAS
// ==========================================

// Actualiza la barra de navegación (Breadcrumbs)
function updateBreadcrumbs(path) {
    let html = '';
    if(path.length > 0) {
        html += '<a class="crumb-link" onclick="renderHome()">Home</a>';
        path.forEach(step => {
            html += '<span class="crumb-separator">/</span>';
            if (step.isCurrent) {
                html += `<span class="crumb-current">${step.text}</span>`;
            } else {
                html += `<a class="crumb-link" onclick="${step.onClick}">${step.text}</a>`;
            }
        });
    }
    breadcrumbsContainer.innerHTML = html;
}

// Lógica del Buscador
function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    // Es posible que el input no exista si no estamos en Home
    if(!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        let resultsFound = false;
        // Recorrer todo el objeto courseData buscando coincidencias
        for (const [gradeKey, gradeData] of Object.entries(courseData)) {
            for (const [levelKey, levelData] of Object.entries(gradeData.levels)) {
                levelData.topics.forEach((topic, index) => {
                    if (topic.toLowerCase().includes(query)) {
                        resultsFound = true;
                        const resultItem = document.createElement('div');
                        resultItem.className = 'search-result-item';
                        resultItem.innerHTML = `
                            <div>${topic}</div>
                            <span class="result-path">${gradeData.title} > ${levelData.title}</span>
                        `;
                        // Al hacer clic en un resultado, ir directamente al contenido
                        resultItem.addEventListener('click', () => {
                            renderContent(gradeKey, levelKey, index);
                        });
                        searchResults.appendChild(resultItem);
                    }
                });
            }
        }

        searchResults.style.display = resultsFound ? 'block' : 'none';
        if (!resultsFound && query.length >=2) {
                searchResults.innerHTML = '<div class="search-result-item" style="cursor: default;">No topics found.</div>';
                searchResults.style.display = 'block';
        }
    });

    // Cerrar resultados si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}


// ==========================================
// INICIALIZACIÓN
// ==========================================
// Cargar la vista de inicio al abrir la app
// Aseguramos que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
});