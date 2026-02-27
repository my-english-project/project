document.addEventListener('DOMContentLoaded', () => {
    const verbInput = document.getElementById('verbInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultArea = document.getElementById('resultArea');
    const errorMessage = document.getElementById('errorMessage');

    // DOM elements for result fields
    const resInf = document.getElementById('res-inf');
    const resPast = document.getElementById('res-past');
    const resPart = document.getElementById('res-part');
    const resMean = document.getElementById('res-mean');

    // The Database of Verbs
    // The 'id' is used for searching (the base form of the verb without 'to')
    const verbDatabase = [
        { id: "abide", inf: "to abide", past: "abode / abided", part: "abode / abided", mean: "tolerar / sufrir / cumplir" },
        { id: "arise", inf: "to arise", past: "arose", part: "arisen", mean: "surgir / levantarse" },
        { id: "awake", inf: "to awake", past: "awoke / awaked", part: "awoken / awaked", mean: "despertar(se)" },
        { id: "be", inf: "to be", past: "was / were", part: "been", mean: "ser / estar" },
        { id: "bear", inf: "to bear", past: "bore", part: "borne / born", mean: "soportar / dar a luz" },
        { id: "beat", inf: "to beat", past: "beat", part: "beaten / beat", mean: "golpear / vencer / latir" },
        { id: "become", inf: "to become", past: "became", part: "become", mean: "llegar a ser / convertirse en" },
        { id: "begin", inf: "to begin", past: "began", part: "begun", mean: "empezar / comenzar" },
        { id: "bend", inf: "to bend", past: "bent", part: "bent", mean: "doblar(se) / curvar" },
        { id: "behold", inf: "to behold", past: "beheld", part: "beheld", mean: "contemplar / mirar" },
        { id: "bet", inf: "to bet", past: "bet / betted", part: "bet / betted", mean: "apostar" },
        { id: "bind", inf: "to bind", past: "bound", part: "bound", mean: "atar / encuadernar" },
        { id: "bid", inf: "to bid", past: "bid / bade", part: "bid / bidden", mean: "pujar / ofrecer / ordenar" },
        { id: "bite", inf: "to bite", past: "bit", part: "bitten", mean: "morder / picar" },
        { id: "bleed", inf: "to bleed", past: "bled", part: "bled", mean: "sangrar" },
        { id: "blow", inf: "to blow", past: "blew", part: "blown", mean: "soplar" },
        { id: "break", inf: "to break", past: "broke", part: "broken", mean: "romper / quebrar" },
        { id: "breed", inf: "to breed", past: "bred", part: "bred", mean: "criar / engendrar" },
        { id: "bring", inf: "to bring", past: "brought", part: "brought", mean: "traer" },
        { id: "broadcast", inf: "to broadcast", past: "broadcast / broadcasted", part: "broadcast / broadcasted", mean: "transmitir / emitir" },
        { id: "build", inf: "to build", past: "built", part: "built", mean: "construir" },
        { id: "burn", inf: "to burn", past: "burnt / burned", part: "burnt / burned", mean: "quemar(se)" },
        { id: "burst", inf: "to burst", past: "burst", part: "burst", mean: "reventar / estallar" },
        { id: "buy", inf: "to buy", past: "bought", part: "bought", mean: "comprar" },
        { id: "cast", inf: "to cast", past: "cast", part: "cast", mean: "lanzar / arrojar / echar" },
        { id: "catch", inf: "to catch", past: "caught", part: "caught", mean: "atrapar / coger" },
        { id: "come", inf: "to come", past: "came", part: "come", mean: "venir" },
        { id: "cost", inf: "to cost", past: "cost", part: "cost", mean: "costar" },
        { id: "cut", inf: "to cut", past: "cut", part: "cut", mean: "cortar" },
        { id: "choose", inf: "to choose", past: "chose", part: "chosen", mean: "elegir / escoger" },
        { id: "cling", inf: "to cling", past: "clung", part: "clung", mean: "aferrarse / adherirse" },
        { id: "creep", inf: "to creep", past: "crept", part: "crept", mean: "arrastrarse / moverse sigilosamente" },
        { id: "deal", inf: "to deal", past: "dealt", part: "dealt", mean: "tratar / comerciar / repartir cartas" },
        { id: "dig", inf: "to dig", past: "dug", part: "dug", mean: "cavar / excavar" },
        { id: "dive", inf: "to dive", past: "dove / dived", part: "dived", mean: "bucear / zambullirse" },
        { id: "do", inf: "to do", past: "did", part: "done", mean: "hacer" },
        { id: "draw", inf: "to draw", past: "drew", part: "drawn", mean: "dibujar / tirar de / sacar" },
        { id: "dream", inf: "to dream", past: "dreamt / dreamed", part: "dreamt / dreamed", mean: "soñar" },
        { id: "drink", inf: "to drink", past: "drank", part: "drunk", mean: "beber" },
        { id: "drive", inf: "to drive", past: "drove", part: "driven", mean: "conducir / manejar" },
        { id: "eat", inf: "to eat", past: "ate", part: "eaten", mean: "comer" },
        { id: "fall", inf: "to fall", past: "fell", part: "fallen", mean: "caer(se)" },
        { id: "feed", inf: "to feed", past: "fed", part: "fed", mean: "alimentar / dar de comer" },
        { id: "feel", inf: "to feel", past: "felt", part: "felt", mean: "sentir(se)" },
        { id: "fight", inf: "to fight", past: "fought", part: "fought", mean: "luchar / pelear" },
        { id: "find", inf: "to find", past: "found", part: "found", mean: "encontrar" },
        { id: "fit", inf: "to fit", past: "fit / fitted", part: "fit / fitted", mean: "caber / encajar / quedar bien" },
        { id: "flee", inf: "to flee", past: "fled", part: "fled", mean: "huir" },
        { id: "fly", inf: "to fly", past: "flew", part: "flown", mean: "volar" },
        { id: "forbid", inf: "to forbid", past: "forbade / forbad", part: "forbidden", mean: "prohibir" },
        { id: "forget", inf: "to forget", past: "forgot", part: "forgotten", mean: "olvidar" },
        { id: "forgive", inf: "to forgive", past: "forgave", part: "forgiven", mean: "perdonar" },
        { id: "freeze", inf: "to freeze", past: "froze", part: "frozen", mean: "congelar(se)" },
        { id: "get", inf: "to get", past: "got", part: "got / gotten", mean: "conseguir / obtener / llegar" },
        { id: "give", inf: "to give", past: "gave", part: "given", mean: "dar" },
        { id: "go", inf: "to go", past: "went", part: "gone", mean: "ir" },
        { id: "grow", inf: "to grow", past: "grew", part: "grown", mean: "crecer / cultivar" },
        { id: "grind", inf: "to grind", past: "ground", part: "ground", mean: "moler / triturar" },
        { id: "hang", inf: "to hang", past: "hung", part: "hung", mean: "colgar (objetos)" },
        { id: "have", inf: "to have", past: "had", part: "had", mean: "tener / haber" },
        { id: "hear", inf: "to hear", past: "heard", part: "heard", mean: "oír" },
        { id: "hide", inf: "to hide", past: "hid", part: "hidden", mean: "esconder(se) / ocultar" },
        { id: "hit", inf: "to hit", past: "hit", part: "hit", mean: "golpear" },
        { id: "hold", inf: "to hold", past: "held", part: "held", mean: "sostener / mantener / abrazar" },
        { id: "hurt", inf: "to hurt", past: "hurt", part: "hurt", mean: "herir / doler / lastimar" },
        { id: "input", inf: "to input", past: "input / inputted", part: "input / inputted", mean: "ingresar datos / entrar" },
        { id: "keep", inf: "to keep", past: "kept", part: "kept", mean: "guardar / mantener" },
        { id: "know", inf: "to know", past: "knew", part: "known", mean: "saber / conocer" },
        { id: "kneel", inf: "to kneel", past: "knelt / kneeled", part: "knelt / kneeled", mean: "arrodillarse" },
        { id: "knit", inf: "to knit", past: "knit / knitted", part: "knit / knitted", mean: "tejer" },
        { id: "lay", inf: "to lay", past: "laid", part: "laid", mean: "poner / colocar (algo)" },
        { id: "lead", inf: "to lead", past: "led", part: "led", mean: "liderar / guiar / dirigir" },
        { id: "lean", inf: "to lean", past: "leant / leaned", part: "leant / leaned", mean: "apoyarse / inclinarse" },
        { id: "leap", inf: "to leap", past: "leapt / leaped", part: "leapt / leaped", mean: "saltar" },
        { id: "learn", inf: "to learn", past: "learnt / learned", part: "learnt / learned", mean: "aprender" },
        { id: "leave", inf: "to leave", past: "left", part: "left", mean: "dejar / irse / salir" },
        { id: "lend", inf: "to lend", past: "lent", part: "lent", mean: "prestar" },
        { id: "let", inf: "to let", past: "let", part: "let", mean: "permitir / dejar" },
        { id: "lie", inf: "to lie", past: "lay", part: "lain", mean: "yacer / echarse (descansar)" },
        { id: "light", inf: "to light", past: "lit / lighted", part: "lit / lighted", mean: "encender / iluminar" },
        { id: "lose", inf: "to lose", past: "lost", part: "lost", mean: "perder" },
        { id: "make", inf: "to make", past: "made", part: "made", mean: "hacer / fabricar" },
        { id: "mean", inf: "to mean", past: "meant", part: "meant", mean: "significar / querer decir" },
        { id: "meet", inf: "to meet", past: "met", part: "met", mean: "conocer (a alguien) / reunirse / encontrar" },
        { id: "mistake", inf: "to mistake", past: "mistook", part: "mistaken", mean: "equivocar / confundir" },
        { id: "overcome", inf: "to overcome", past: "overcame", part: "overcome", mean: "superar / vencer" },
        { id: "pay", inf: "to pay", past: "paid", part: "paid", mean: "pagar" },
        { id: "prove", inf: "to prove", past: "proved", part: "proven / proved", mean: "probar / demostrar" },
        { id: "put", inf: "to put", past: "put", part: "put", mean: "poner" },
        { id: "quit", inf: "to quit", past: "quit / quitted", part: "quit / quitted", mean: "abandonar / dejar (de hacer algo)" },
        { id: "read", inf: "to read", past: "read (pronounced 'red')", part: "read (pronounced 'red')", mean: "leer" },
        { id: "ride", inf: "to ride", past: "rode", part: "ridden", mean: "montar (caballo, bici) / viajar" },
        { id: "ring", inf: "to ring", past: "rang", part: "rung", mean: "sonar / llamar (por teléfono)" },
        { id: "rise", inf: "to rise", past: "rose", part: "risen", mean: "subir / levantarse / aumentar" },
        { id: "run", inf: "to run", past: "ran", part: "run", mean: "correr" },
        { id: "saw", inf: "to saw", past: "sawed", part: "sawn / sawed", mean: "serrar" },
        { id: "say", inf: "to say", past: "said", part: "said", mean: "decir" },
        { id: "see", inf: "to see", past: "saw", part: "seen", mean: "ver" },
        { id: "seek", inf: "to seek", past: "sought", part: "sought", mean: "buscar (formal)" },
        { id: "sell", inf: "to sell", past: "sold", part: "sold", mean: "vender" },
        { id: "send", inf: "to send", past: "sent", part: "sent", mean: "enviar" },
        { id: "set", inf: "to set", past: "set", part: "set", mean: "poner / establecer / fijar" },
        { id: "sew", inf: "to sew", past: "sewed", part: "sewn / sewed", mean: "coser" },
        { id: "shake", inf: "to shake", past: "shook", part: "shaken", mean: "sacudir / agitar / temblar" },
        { id: "shear", inf: "to shear", past: "sheared", part: "shorn / sheared", mean: "esquilar" },
        { id: "shine", inf: "to shine", past: "shone / shined", part: "shone / shined", mean: "brillar" },
        { id: "shoot", inf: "to shoot", past: "shot", part: "shot", mean: "disparar" },
        { id: "show", inf: "to show", past: "showed", part: "shown / showed", mean: "mostrar / enseñar" },
        { id: "shrink", inf: "to shrink", past: "shrank / shrunk", part: "shrunk", mean: "encoger(se)" },
        { id: "shut", inf: "to shut", past: "shut", part: "shut", mean: "cerrar" },
        { id: "sing", inf: "to sing", past: "sang", part: "sung", mean: "cantar" },
        { id: "sink", inf: "to sink", past: "sank / sunk", part: "sunk", mean: "hundir(se)" },
        { id: "sit", inf: "to sit", past: "sat", part: "sat", mean: "sentarse" },
        { id: "sleep", inf: "to sleep", past: "slept", part: "slept", mean: "dormir" },
        { id: "slide", inf: "to slide", past: "slid", part: "slid", mean: "deslizar(se)" },
        { id: "smell", inf: "to smell", past: "smelt / smelled", part: "smelt / smelled", mean: "oler" },
        { id: "sow", inf: "to sow", past: "sowed", part: "sown / sowed", mean: "sembrar" },
        { id: "speak", inf: "to speak", past: "spoke", part: "spoken", mean: "hablar" },
        { id: "speed", inf: "to speed", past: "sped / speeded", part: "sped / speeded", mean: "acelerar / ir deprisa" },
        { id: "spell", inf: "to spell", past: "spelt / spelled", part: "spelt / spelled", mean: "deletrear" },
        { id: "spend", inf: "to spend", past: "spent", part: "spent", mean: "gastar (dinero) / pasar (tiempo)" },
        { id: "spill", inf: "to spill", past: "spilt / spilled", part: "spilt / spilled", mean: "derramar" },
        { id: "spin", inf: "to spin", past: "spun / span", part: "spun", mean: "girar / hilar" },
        { id: "spit", inf: "to spit", past: "spat / spit", part: "spat / spit", mean: "escupir" },
        { id: "split", inf: "to split", past: "split", part: "split", mean: "dividir / partir / rajar" },
        { id: "spoil", inf: "to spoil", past: "spoilt / spoiled", part: "spoilt / spoiled", mean: "estropear / mimar en exceso" },
        { id: "spread", inf: "to spread", past: "spread", part: "spread", mean: "extender(se) / esparcir" },
        { id: "spring", inf: "to spring", past: "sprang / sprung", part: "sprung", mean: "saltar / brotar" },
        { id: "stand", inf: "to stand", past: "stood", part: "stood", mean: "estar de pie / aguantar" },
        { id: "steal", inf: "to steal", past: "stole", part: "stolen", mean: "robar" },
        { id: "stick", inf: "to stick", past: "stuck", part: "stuck", mean: "pegar / adherir / clavar" },
        { id: "sting", inf: "to sting", past: "stung", part: "stung", mean: "picar (insecto) / escocer" },
        { id: "stink", inf: "to stink", past: "stank / stunk", part: "stunk", mean: "apestar" },
        { id: "stride", inf: "to stride", past: "strode", part: "stridden", mean: "dar zancadas" },
        { id: "strike", inf: "to strike", past: "struck", part: "struck / stricken", mean: "golpear / atacar / hacer huelga" },
        { id: "swear", inf: "to swear", past: "swore", part: "sworn", mean: "jurar / decir palabrotas" },
        { id: "sweat", inf: "to sweat", past: "sweat / sweated", part: "sweat / sweated", mean: "sudar" },
        { id: "sweep", inf: "to sweep", past: "swept", part: "swept", mean: "barrer" },
        { id: "swell", inf: "to swell", past: "swelled", part: "swollen / swelled", mean: "hinchar(se)" },
        { id: "swim", inf: "to swim", past: "swam", part: "swum", mean: "nadar" },
        { id: "swing", inf: "to swing", past: "swung", part: "swung", mean: "balancear(se) / columpiar(se)" },
        { id: "take", inf: "to take", past: "took", part: "taken", mean: "tomar / llevar" },
        { id: "teach", inf: "to teach", past: "taught", part: "taught", mean: "enseñar" },
        { id: "tear", inf: "to tear", past: "tore", part: "torn", mean: "rasgar / romper" },
        { id: "tell", inf: "to tell", past: "told", part: "told", mean: "decir / contar" },
        { id: "think", inf: "to think", past: "thought", part: "thought", mean: "pensar" },
        { id: "throw", inf: "to throw", past: "threw", part: "thrown", mean: "lanzar / tirar" },
        { id: "thrust", inf: "to thrust", past: "thrust", part: "thrust", mean: "empujar con fuerza / clavar" },
        { id: "tread", inf: "to tread", past: "trod", part: "trodden / trod", mean: "pisar / andar" },
        { id: "understand", inf: "to understand", past: "understood", part: "understood", mean: "entender / comprender" },
        { id: "undergo", inf: "to undergo", past: "underwent", part: "undergone", mean: "someterse a / experimentar" },
        { id: "undertake", inf: "to undertake", past: "undertook", part: "undertaken", mean: "emprender / comprometerse a" },
        { id: "wake", inf: "to wake", past: "woke / waked", part: "woken / waked", mean: "despertar(se)" },
        { id: "wear", inf: "to wear", past: "wore", part: "worn", mean: "llevar puesto / usar (ropa)" },
        { id: "weave", inf: "to weave", past: "wove / weaved", part: "woven / weaved", mean: "tejer / entrelazar" },
        { id: "weep", inf: "to weep", past: "wept", part: "wept", mean: "llorar" },
        { id: "wet", inf: "to wet", past: "wet / wetted", part: "wet / wetted", mean: "mojar" },
        { id: "win", inf: "to win", past: "won", part: "won", mean: "ganar" },
        { id: "wind", inf: "to wind", past: "wound", part: "wound", mean: "enrollar / dar cuerda / serpentear" },
        { id: "withdraw", inf: "to withdraw", past: "withdrew", part: "withdrawn", mean: "retirar(se) / sacar dinero" },
        { id: "wring", inf: "to wring", past: "wrung", part: "wrung", mean: "torcer / escurrir" },
        { id: "write", inf: "to write", past: "wrote", part: "written", mean: "escribir" }
    ];

    // Function to perform the search
    function performSearch() {
        // 1. Get input value, trim spaces, convert to lowercase
        let searchTerm = verbInput.value.trim().toLowerCase();

        // 2. Clear previous results and errors
        resultArea.classList.add('hidden');
        errorMessage.classList.add('hidden');

        if (searchTerm === "") {
            return; // Do nothing if empty
        }

        // 3. Handle common user inputs like adding "to " unnecessarily
        if (searchTerm.startsWith("to ") && searchTerm.length > 3) {
            searchTerm = searchTerm.substring(3).trim();
        }

        // 4. Search the database based on the 'id' (base verb form)
        const foundVerb = verbDatabase.find(verb => verb.id === searchTerm);

        if (foundVerb) {
            // 5. Populate result fields
            resInf.textContent = foundVerb.inf;
            resPast.textContent = foundVerb.past;
            resPart.textContent = foundVerb.part;
            resMean.textContent = foundVerb.mean;

            // 6. Show result area
            resultArea.classList.remove('hidden');
        } else {
            // 7. Show error message
            errorMessage.classList.remove('hidden');
        }
    }

    // Event Listener for the Search Button click
    searchBtn.addEventListener('click', performSearch);

    // Event Listener for pressing "Enter" in the input box
    verbInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            performSearch();
        }
    });
});