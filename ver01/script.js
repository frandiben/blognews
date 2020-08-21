/* creo l'array delle notizie */
let news=[];

/* creo l'array degli argomenti */
let argomenti=['politica','cronaca','cultura','tecnologia','sport'];

let notizia1 = {
    id: 1,
    titolo:"Espulso senatore nel M5S. Per le quote rosa verrà espulsa anche una senatrice.",
    immagine: "https://via.placeholder.com/250x180/888888/ffffff",
    autore: "Mario Bianchi",
    data: "31 maggio 2020",     //provare a usare l'oggetto Date
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
    titolo: "Cina compra gli Stati Uniti",
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
    id:9,
    titolo: "Mostra di arte astratta. La scoperta dell'addetto alle pulizie \"Tutti i dipinti sono appesi al contrario!\" ",
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
    titolo: "UE all'Italia \"Vi daremo i soldi purchè non li sprechiate tutti in banchi con le ruote\"",
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

// valutare se inserire tutto in un file .js esterno e fare import 


//aggiungo le notizie all'array news[];
news.push(notizia1,notizia2,notizia3,notizia4,notizia5,notizia6,notizia7,notizia8,notizia9,notizia10,notizia11,notizia12,notizia13,notizia14,notizia15);

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
        let boxnews = document.querySelector('#box_news');
        let article = "";
        for (let i = 0; i<arr.length; i++) {
            article += `<article class="news_card">`
            article += `<a onclick="mostraNotiziaId(${arr[i].id})"  href="#" > `
            article += `<h3>${arr[i].titolo}</h3>`
            article += `</a>`
            article += `<p><span>${arr[i].autore}</span> - <span>${arr[i].data}</span></p>`
            article += `<hr>`
            article += `<img src="${arr[i].immagine}" alt="news">`
            article += `<p>${arr[i].testo}</p>`
            article += `</article>`
            boxnews.innerHTML = article;
        }
}

/* gestisce la visualizzazione di una UNICA news */
/* al momento funziona grazie al fatto che l'ID è uguale all'indice dell'array+1. Sistemare questo aspetto*/
function mostraNotiziaId(numId){
    let array1Elem = [];
    let category = document.querySelector('#category');
    array1Elem.push(news[numId-1]);
    mostraNotizie(array1Elem);    //richiama la funzione principale di visualizzazione NEWS, passandogli un array con un unico elemento
    // return false;   //necessario per disattivare l'href nel tag <a> dell'HTML
    category.innerHTML = news[numId-1].argomento;
}

function mostraNotizieRandom(){
    /* valido per quando sarà ottimizzato 
    for (let i = 1; i <= 5; i++) {
        let rnd_link = document.querySelector(`#rnd_link${i}`);
        rnd_link.setAttribute(`onclick`, `mostraNotiziaId()`)
    }
    */
    let functionString = ""

    let i_politica = Math.floor(Math.random() * arr_politica.length);
    let tit_politica = document.querySelector('#tit_politica');
    let aut_politica = document.querySelector('#aut_politica');
    let rnd_link1 = document.querySelector('#rnd_link1');
    functionString = `mostraNotiziaId(${arr_politica[i_politica].id})`
    tit_politica.innerHTML = arr_politica[i_politica].titolo;
    aut_politica.innerHTML = arr_politica[i_politica].autore;
    rnd_link1.setAttribute("onclick", functionString);

    let i_cronaca = Math.floor(Math.random() * arr_cronaca.length);
    let tit_cronaca = document.querySelector('#tit_cronaca');
    let aut_cronaca = document.querySelector('#aut_cronaca');
    let rnd_link2 = document.querySelector('#rnd_link2');
    functionString = `mostraNotiziaId(${arr_cronaca[i_cronaca].id})`
    tit_cronaca.innerHTML = arr_cronaca[i_cronaca].titolo;
    aut_cronaca.innerHTML = arr_cronaca[i_cronaca].autore;    
    rnd_link2.setAttribute("onclick", functionString);

    let i_cultura = Math.floor(Math.random() * arr_cultura.length);
    let tit_cultura = document.querySelector('#tit_cultura');
    let aut_cultura = document.querySelector('#aut_cultura');
    let rnd_link3 = document.querySelector('#rnd_link3');
    functionString = `mostraNotiziaId(${arr_cultura[i_cultura].id})`
    tit_cultura.innerHTML = arr_cultura[i_cultura].titolo;
    aut_cultura.innerHTML = arr_cultura[i_cultura].autore;       
    rnd_link3.setAttribute("onclick", functionString);

    let i_tecnologia = Math.floor(Math.random() * arr_tecnologia.length);
    let tit_tecnologia = document.querySelector('#tit_tecnologia');
    let aut_tecnologia = document.querySelector('#aut_tecnologia');
    let rnd_link4 = document.querySelector('#rnd_link4');
    functionString = `mostraNotiziaId(${arr_tecnologia[i_tecnologia].id})`
    tit_tecnologia.innerHTML = arr_tecnologia[i_tecnologia].titolo;
    aut_tecnologia.innerHTML = arr_tecnologia[i_tecnologia].autore;  
    rnd_link4.setAttribute("onclick", functionString);

    let i_sport = Math.floor(Math.random() * arr_sport.length);
    let tit_sport = document.querySelector('#tit_sport');
    let aut_sport = document.querySelector('#aut_sport');
    let rnd_link5 = document.querySelector('#rnd_link5');
    functionString = `mostraNotiziaId(${arr_sport[i_sport].id})`
    tit_sport.innerHTML = arr_sport[i_sport].titolo;
    aut_sport.innerHTML = arr_sport[i_sport].autore; 
    rnd_link5.setAttribute("onclick", functionString);
}
