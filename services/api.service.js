/**
 * Un servicio es un tipo de archivo
 * donde vamos a tener funciones o clase con sus métodos
 * que ejecutan acciones
 * !! SUPER IMPROTANTE!!!
 * ! Todas las funciones asíncronas deben retornar una promesa
 * ! No improta que pienses tu qué está retornando, es una promesa
 * 
 * Nota:
 * 
 */
import { API_URL } from "../env.js";

// GET
export async function getAllProducts () {
    // 1. Lanzar la petición
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

//console.log(getAllProducts());

// GET 1 solo producto
export const getSingleProduct = async function(id){
 try{
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
 } catch(error){
    console.error("Error", error);
 }  
}

// POST 
// Nota: Este método es el que se usa para ingresar información a la base de datos
export const createProduct = async (productObject) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(productObject)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error", error);
    }
}

// PUT
export async function updateProduct (id, productObjectUpdate) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(productObjectUpdate)
        });
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error("Error", error);
    }
}

// DELETE
export async function deleteProduct (id){
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error("Error", error);
    }
}

getSingleProduct(8);

createProduct({
    title: "chocolate",
    price: 20,
    description: "Extruido de cacao",
    category: "Dulces",
    image: "http://example.com"
});

updateProduct(13, {
    "title": "Café",
    "price": 200,
    "description": "Café de Coateplatanos",
});

deleteProduct(10);