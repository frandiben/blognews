/* creo l'array delle notizie */
let news=[];

/* creo l'array degli argomenti */
let argomenti=['politica','cronaca','cultura','tecnologia','sport'];

let notizia1 = {
    titolo:"Parlamentari si firmano l'aumento, si assentano in seicento",
    immagine: "https://www.lacittafutura.it/media/k2/items/cache/684b53009a7daa842df276f8805f9df6_XL.jpg",
    autore: "Mario Bianchi",
    data: "31 maggio 2020",     //provare a usare l'oggetto Date
    argomento: argomenti[0],
    testo: "Dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
                                    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia2 = {
    titolo: "Invasione di cavallette durante cena vegana",
    immagine: "",
    autore: "Giovanni Rossi",
    data: "30 giugno 2020", //provare a usare l'oggetto Date
    argomento: argomenti[1],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia3 = {
    titolo: "Il libro che mi ha cambiato la vita: la Smorfia napoletana",
    immagine: "",
    autore: "Fausto Azzurri",
    data: "2 agosto 2020", //provare a usare l'oggetto Date
    argomento: argomenti[2],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia4 = {
    titolo: "Alle prossime Olimpiadi gli atleti gareggeranno in smart working",
    immagine: "",
    autore: "Bruno Chiari",
    data: "21 agosto 2020", //provare a usare l'oggetto Date
    argomento: argomenti[4],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia5 = {
    titolo: "Intelligenza Artificiale - Vi state preoccupando inutilmente",
    immagine: "",
    autore: "HAL9020 XYZ",
    data: "21 luglio 2020", //provare a usare l'oggetto Date
    argomento: argomenti[3],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia6 = {
    titolo: "Cina compra gli Stati Uniti",
    immagine: "",
    autore: "Mauro Neri",
    data: "22 giugno 2020", //provare a usare l'oggetto Date
    argomento: argomenti[0],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia7 = {
    titolo: "Cane morde uomo che morde cane",
    immagine: "",
    autore: "Paolo Viola",
    data: "30 aprile 2020", //provare a usare l'oggetto Date
    argomento: argomenti[1],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia8 = {
    titolo: "Sto lavorando grazie a LinkedIn - Intervista al fondatore di LinkedIn",
    immagine: "",
    autore: "Marco Rosati",
    data: "30 aprile 2020", //provare a usare l'oggetto Date
    argomento: argomenti[3],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia9 = {
    titolo: "Mostra di arte astratta. La scoperta dell'addetto alle pulizie \"Tutti i dipinti sono appesi al contrario!\" ",
    immagine: "",
    autore: "Fabio Giallini",
    data: "30 marzo 2020", //provare a usare l'oggetto Date
    argomento: argomenti[2],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

let notizia10 = {
    titolo: "Paralimpiadi, manca il pubblico. \"Non si riesce a trovare parcheggio!\" ",
    immagine: "",
    autore: "Fabio Giallini",
    data: "30 marzo 2020", //provare a usare l'oggetto Date
    argomento: argomenti[4],
    testo: "Color sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis auduant dolor sit amet unusquaele ibit aperunt voluptuae tua surbant elementor finit gravis "
    // provare diverse funzioni di riempimento casuale testo: es. concat() ecc....
}

// valutare se inserire tutto in un file .js esterno e fare import 


//aggiungo le notizie all'array news[];
news.push(notizia1,notizia2,notizia3,notizia4,notizia5,notizia6,notizia7,notizia8,notizia9,notizia10);

//creo array personalizzati per ciascun argomento
let arr_politica = [];
let arr_cronaca = [];
let arr_cultura = [];
let arr_tecnologia = [];
let arr_sport = [];

//aggiungo le notizie agli array settoriali
for (let a=0;a<news.length;a++){
    switch(news[a].argomento){
        case 'politica':
            arr_politica.push(news[a]);
            break;
        case 'cronaca':
            arr_cronaca.push(news[a]);
            break;
        case 'cultura':
            arr_cultura.push(news[a]);
            break;
        case 'tecnologia':
            arr_tecnologia.push(news[a]);
            break;
        case 'sport':
            arr_sport.push(news[a]);
            break;
        default:            //gestire eventuali errori o casi atipici
            break;
    }
}

function showAll(){
    document.querySelector('#category').innerHTML = "TUTTE LE NOTIZIE";
    mostraNotizie(news);
    mostraNotizieRandom();
    setInterval(() => {
        mostraNotizieRandom();
    }, 5000);
}

function showPolitica() {
    document.querySelector('#category').innerHTML = "POLITICA";
    mostraNotizie(arr_politica);
}

function showCronaca() {
    document.querySelector('#category').innerHTML = "CRONACA";
    mostraNotizie(arr_cronaca);
}

function showCultura() {
    document.querySelector('#category').innerHTML = "CULTURA";
    mostraNotizie(arr_cultura);
}

function showTecnologia() {
    document.querySelector('#category').innerHTML = "TECNOLOGIA";
    mostraNotizie(arr_tecnologia);
}

function showSport() {
    document.querySelector('#category').innerHTML = "SPORT";
    mostraNotizie(arr_sport);
}

function mostraNotizie(arr){
        boxnews = document.querySelector('#box_news');
        let article = "";
        for (let i = 0; i < arr.length; i++) {
            article += `<article>`
            article += `<h3>${arr[i].titolo}</h3>`
            article += `<p><span>${arr[i].autore}</span> - <span>${arr[i].data}</span></p>`
            article += `<hr>`
            article += `<p>${arr[i].testo}</p>`
            article += `</article>`
            boxnews.innerHTML = article;
        }
}

function mostraNotizieRandom(){
    let i_politica = Math.floor(Math.random() * arr_politica.length);
    let tit_politica = document.querySelector('#tit_politica');
    let aut_politica = document.querySelector('#aut_politica');
    tit_politica.innerHTML = arr_politica[i_politica].titolo;
    aut_politica.innerHTML = arr_politica[i_politica].autore;

    let i_cronaca = Math.floor(Math.random() * arr_cronaca.length);
    let tit_cronaca = document.querySelector('#tit_cronaca');
    let aut_cronaca = document.querySelector('#aut_cronaca');
    tit_cronaca.innerHTML = arr_cronaca[i_cronaca].titolo;
    aut_cronaca.innerHTML = arr_cronaca[i_cronaca].autore;    

    let i_cultura = Math.floor(Math.random() * arr_cultura.length);
    let tit_cultura = document.querySelector('#tit_cultura');
    let aut_cultura = document.querySelector('#aut_cultura');
    tit_cultura.innerHTML = arr_cultura[i_cultura].titolo;
    aut_cultura.innerHTML = arr_cultura[i_cultura].autore;       

    let i_tecnologia = Math.floor(Math.random() * arr_tecnologia.length);
    let tit_tecnologia = document.querySelector('#tit_tecnologia');
    let aut_tecnologia = document.querySelector('#aut_tecnologia');
    tit_tecnologia.innerHTML = arr_tecnologia[i_tecnologia].titolo;
    aut_tecnologia.innerHTML = arr_tecnologia[i_tecnologia].autore;  

    let i_sport = Math.floor(Math.random() * arr_sport.length);
    let tit_sport = document.querySelector('#tit_sport');
    let aut_sport = document.querySelector('#aut_sport');
    tit_sport.innerHTML = arr_sport[i_sport].titolo;
    aut_sport.innerHTML = arr_sport[i_sport].autore; 
}
