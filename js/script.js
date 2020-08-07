import { news } from '../js/export.js';

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


/* Righe necessarie per utilizzare la struttura a moduli,
   i moduli separano gli scope, con queste righe si rendono equivalenti */
window.arr_politica = arr_politica;
window.arr_cronaca = arr_cronaca;
window.arr_cultura = arr_cultura;
window.arr_tecnologia = arr_tecnologia;
window.arr_sport = arr_sport;
window.showAll = showAll;
window.showPolitica = showPolitica;
window.showCronaca = showCronaca;
window.showCultura = showCultura;
window.showTecnologia = showTecnologia;
window.showSport = showSport;
window.mostraNotizie = mostraNotizie;
window.mostraNotiziaId = mostraNotiziaId;
window.mostraNotizieRandom = mostraNotizieRandom;

/* in alternativa si sarebbe potuto utilizzare l'addEventListener. Comunque da sistemare */
// document.addEventListener('DOMContentLoaded', showAll);