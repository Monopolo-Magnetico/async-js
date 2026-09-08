import { getAllProducts } from "./services/api.service.js";

const mainEl = document.querySelector("main");
const modalEl = document.querySelector("#full-info"); // modalEl es el contenedor de dialogo
const closeBtn = modalEl.querySelector("button");
const contentDiv = modalEl.querySelector(".content");
const products = await getAllProducts();

/**
 * Destructuring en objetos tipo js
 * Es una forma de descomponer el objeto en variables
 * Reglas para su uso
 * Objeto de ejemplo
 * const persona = {
 *  name: "mike",
 *  age: 27
 * }
 * const {name} = persona;
 * 
 * ! Improtante las variables se deben llamar igual que la key del objeto
 * 
 * console.log(name); Mike
 * 
 */

/**
 * Ejemplo
const album = {
    title: "Bleach",
    artist: "Nirvana",
    tracks: ["Blew", "About a girl", "Paper Cuts"],
    rating: {
        rate: 5,
        count: 300
    }
}

let {title, artist, tracks, rating} = album;
// let title = album.title; let artist = album.artist
console.log(title);
console.log(artist);
console.log(tracks);
console.log(rating);
title = "In Utero"
console.log(title);
console.log(album);
*/

// Esta función recibe un objeto que va a ser inmediatamente desestructurado 
const renderProduct = ({title, description, image, id}) => {
    const productCard = `
    <div class="card">
        <img src="${image}" class="card-img-top" alt="${description}">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <button id="info" data-id="${id}" class="btn btn-primary">View full info</button>
        <button id = "delete" class="btn btn-danger">Delete product</button>
        </div>
    </div>
    `;
    mainEl.insertAdjacentHTML("beforeend", productCard);
};

products.map((product) => renderProduct(product));

const showInfo = function (product) {
    contentDiv.innerHTML = ``;
    const infoCard = `
    <div class="card" >
        <img src="${product.image}" class="card-img-top" alt="${product.description}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: ${product.price}</li>
        <li class="list-group-item">Category: ${product.category}</li>
        <li class="list-group-item">${product.rating.rate}</li>
        </ul>
    </div>

    `;
    contentDiv.insertAdjacentHTML("beforeend", infoCard);
    modalEl.showModal(); 
}

/**
// Para eliminar la card del sitio
const clearInfo = function (product) {
    const deletedCard = contentDiv.querySelector("#delete");
    deletedCard.innerHTML = ``;
}
*/

/**
 * Event delegation
 * Generar la escucha del evento en un contenedor padre
 * Esta será accionada incluso en los elementos hijos
 * Mediante el evento podemos filtrar exactamente en donde ocurrió
 * 
 * Nota
 * En javascript y solo javascript
 * Existen los operadores
 * === y !==, son operadores estrictos
 * Evaluan valor y tipo de dato
 */

// Agregando el evento deseado a un elemento padre
mainEl.addEventListener("click", (e) => {
    e.preventDefault();
    // Descartando donde ocurrió el evento
    if(e.target.id !== "info") return;
    const productid = e.target.dataset.id;
    showInfo(products[productid -1]);
    closeBtn.addEventListener("click", () => modalEl.close());
});

/**
// Click en boton de eliminar
mainEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id !== "delete") return;
    const productid = e.target.dataset.id;
    clearInfo(products[productid - 1]);
});
*/