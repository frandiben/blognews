import { news, argomenti } from './arr_articles.js';

//creo array personalizzati per ciascun argomento

let arrnews = [];
arrnews[0] = [];        //politica
arrnews[1] = [];        //cronaca
arrnews[2] = [];        //cultura
arrnews[3] = [];        //tecnologia
arrnews[4] = [];        //sport

let arr_selected = [];

//aggiungo le notizie agli array settoriali
for (let a=0;a<news.length;a++){
    switch(news[a].argomento){
        case 'politica':
            arrnews[0].push(news[a]);
            break;
        case 'cronaca':
            arrnews[1].push(news[a]);
            break;
        case 'cultura':
            arrnews[2].push(news[a]);
            break;
        case 'tecnologia':
            arrnews[3].push(news[a]);
            break;
        case 'sport':
            arrnews[4].push(news[a]);
            break;
        default:            //gestire eventuali errori o casi atipici
            break;
    }
}

function showAll(titolo){         //può essere 'news' e in tal caso mostra TUTTE LE NOTIZIE oppure un array settoriale
    document.querySelector('#category').innerHTML = titolo;
    switch(titolo){
        case 'TUTTE LE NOTIZIE':
            arr_selected = news;
            break;
        case 'POLITICA':
            arr_selected = arrnews[0];
            break;
        case 'CRONACA':
            arr_selected = arrnews[1];
            break;
        case 'CULTURA':
            arr_selected = arrnews[2];
            break;
        case 'TECNOLOGIA':
            arr_selected = arrnews[3];
            break;
        case 'SPORT':
            arr_selected = arrnews[4];
            break;
        default:
            break;
    }
    mostraNotizie(arr_selected);
    mostraNotizieRandom();
    setInterval(mostraNotizieRandom, 5000);
    setInterval(changeOrder, 5000);
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

    let functionString = ""

    let randIndex = [];             //indice della notizia RANDOM x argomento
    let randTitolo = []             //titolo della notizia
    let randAutore = []             //autore della notizia
    let randLink = []               //link cliccabile della notizia

    for (let i = 0; i < argomenti.length; i++) {
        randIndex[i] = Math.floor(Math.random() * arrnews[i].length);
        randTitolo[i] = document.querySelector(`#tit_${i+1}`);
        randAutore[i] = document.querySelector(`#aut_${i+1}`);
        randLink[i]  = document.querySelector(`#rnd_link${i+1}`);
        functionString = `mostraNotiziaId(${arrnews[i][randIndex[i]].id})`;
        randTitolo[i].innerHTML = arrnews[i][randIndex[i]].titolo;
        randAutore[i].innerHTML = arrnews[i][randIndex[i]].autore;
        randLink[i].setAttribute("onclick",functionString);
    }
}

function changeOrder() {
    const allSlides = document.querySelectorAll(".rnd");

    for (const slide of allSlides) {
        const order = slide.getAttribute("data-order");
        const neworder = order - 1 || 5;         // assegnamento corto-circuitato
        slide.setAttribute("data-order", neworder.toString());   //imposta il data-order   (attributo HTML di supporto )
        slide.style.order = neworder;                           //imposta l'order         (regola di stile CSS)  
        neworder == 5 ? slide.style['z-index'] = 1 : slide.style['z-index'] = 2; /* DA SISTEMARE */
    }
}


/* Righe necessarie per utilizzare la struttura a moduli,
   i moduli separano gli scope, con queste righe si rendono equivalenti */
window.arrnews = arrnews;
window.showAll = showAll;
window.changeOrder = changeOrder;
window.mostraNotizie = mostraNotizie;
window.mostraNotiziaId = mostraNotiziaId;
window.mostraNotizieRandom = mostraNotizieRandom;
