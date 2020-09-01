/* creo l'array delle notizie */
export let news = [];

/* creo l'array degli argomenti */
export let argomenti = ['politica', 'cronaca', 'cultura', 'tecnologia', 'sport'];

let notizia1 = {
    id: 1,
    titolo: "Espulso senatore nel M5S. Per le quote rosa verrà espulsa anche una senatrice.",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Mario Bianchi",
    data: "31 maggio 2020", //provare a usare l'oggetto Date
    argomento: argomenti[0],
    testo: "Dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia2 = {
    id: 2,
    titolo: "Invasione di cavallette durante cena vegana",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Giovanni Rossi",
    data: "30 giugno 2020", //provare a usare l'oggetto Date
    argomento: argomenti[1],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia3 = {
    id: 3,
    titolo: "Il libro che mi ha cambiato la vita: la Smorfia napoletana",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Fausto Azzurri",
    data: "2 agosto 2020", //provare a usare l'oggetto Date
    argomento: argomenti[2],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia4 = {
    id: 4,
    titolo: "Alle prossime Olimpiadi gli atleti gareggeranno in smart working",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Bruno Chiari",
    data: "21 agosto 2020", //provare a usare l'oggetto Date
    argomento: argomenti[4],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia5 = {
    id: 5,
    titolo: "Intelligenza Artificiale: vi state preoccupando inutilmente",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Cybertron 9001",
    data: "21 luglio 2020", //provare a usare l'oggetto Date
    argomento: argomenti[3],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia6 = {
    id: 6,
    titolo: "Nuova scissione nel PD. Nascono Zingaretti Est e Zingaretti Ovest",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Mauro Neri",
    data: "22 giugno 2020", //provare a usare l'oggetto Date
    argomento: argomenti[0],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia7 = {
    id: 7,
    titolo: "Cane morde uomo che morde cane",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Paolo Viola",
    data: "30 aprile 2020", //provare a usare l'oggetto Date
    argomento: argomenti[1],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia8 = {
    id: 8,
    titolo: "\"Sto lavorando grazie a LinkedIn\". Intervista al fondatore di LinkedIn",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Marco Rosati",
    data: "30 aprile 2020", //provare a usare l'oggetto Date
    argomento: argomenti[3],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia9 = {
    id: 9,
    titolo: "Addetto alle pulizie fa cadere opera di Cattelan migliorandola",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Fabio Giallini",
    data: "30 marzo 2020", //provare a usare l'oggetto Date
    argomento: argomenti[2],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia10 = {
    id: 10,
    titolo: "Paralimpiadi, manca il pubblico. \"Non si riesce a trovare parcheggio!\" ",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Fabio Giallini",
    data: "30 marzo 2020", //provare a usare l'oggetto Date
    argomento: argomenti[4],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia11 = {
    id: 11,
    titolo: "Sciopero personale Trenitalia. Passeggeri non notano la differenza",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Mario Marroni",
    data: "20 aprile 2020",
    argomento: argomenti[1],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
}

let notizia12 = {
    id: 12,
    titolo: "Riapertura scuole. Aumentano i casi di bimbi investiti da banchi con le ruote.",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Marco Rosati",
    data: "3 agosto 2020",
    argomento: argomenti[0],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
}

let notizia13 = {
    id: 13,
    titolo: "\"La musica trap è una m****!\". Le dure parole di Papa Francesco.",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Fabio Giallini",
    data: "18 luglio 2020",
    argomento: argomenti[2],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
}

let notizia14 = {
    id: 14,
    titolo: "Greta Thunberg smette di fare la raccolta differenziata",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Fabio Giallini",
    data: "18 luglio 2020",
    argomento: argomenti[1],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt"
}

let notizia15 = {
    id: 15,
    titolo: "Clamorosa scoperta dell'Università di Cambridge: l'olio di palma fa bene.",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Mauro Azzurri",
    data: "18 agosto 2020",
    argomento: argomenti[3],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt"
}

let notizia16 = {
    id: 16,
    titolo: "La scienza conferma: \"Percorrere l'A14 in prima corsia non provoca il cancro\"",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Michele Marroni",
    data: "18 luglio 2020",
    argomento: argomenti[3],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele aperunt"
}

//aggiungo le notizie all'array news[];
news.push(notizia1, notizia2, notizia3, notizia4, notizia5, notizia6, notizia7, notizia8, notizia9, notizia10, notizia11, notizia12, notizia13, notizia14, notizia15, notizia16);
