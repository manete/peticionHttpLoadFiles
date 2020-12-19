import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtroChiste, olList;

const crearChisteHtml = () => {
    const html = `
    <h1 class="mt-5">CHISTES</h1>
    <hr>
    
    <button class="btn btn-primary">Otro chiste</button>
    
    <ol class="mt-2 list-group">
    </ol>`;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;
    body.append(divChiste);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click', async() => {
        btnOtroChiste.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtroChiste.disabled = false;
    });

}

// id, value
const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b> ${chiste.id}: ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

}

export const init = () => {
    crearChisteHtml();
    eventos();
}