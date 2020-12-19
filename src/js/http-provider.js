const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2'
const cloudPreset = 'ghap5mqi';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dqrogz13k/upload';


const obtenerChiste = async() => { // async devuelve una promesa

    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw ('No se puede realizar la petición');
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    } catch (err) {
        throw err;
    }

}

const obtenerRespuesta = async() => {

    const respuesta = await fetch(urlUsuarios);
    const { data: usuarios } = await respuesta.json();
    return usuarios;
}

// Archivo a subir ::file
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudRespuesta = await resp.json();
            return cloudRespuesta.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }
}
export {
    obtenerChiste,
    obtenerRespuesta,
    subirImagen
}