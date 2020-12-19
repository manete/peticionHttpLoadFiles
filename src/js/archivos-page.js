import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const createInputFile = () => {

    const html = `
    <h1 class ="mt-5"> Subir archivos</h1>
    <hr>
    <lable>Seleccione una fotografía: </label>
    <input type="file" accept ="image/png image/jpg"/>
    <br>
    <img id ="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}


//listeners

const eventos = () => {
    inputFile.addEventListener('change', (evento) => {
        const file = evento.target.files[0];
        subirImagen(file).then(url => {
            imgFoto.src = url;
        });

    });

}

export const init = () => {
    createInputFile();
    eventos();
}