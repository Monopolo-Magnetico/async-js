/**
 * Un servicio es un tipo de archivo
 * donde vamos a tener funciones o clase con sus métodos
 * que ejecutan acciones
 * !! SUPER IMPROTANTE!!!
 * ! Todas las funciones asíncronas deben retornar una promesa
 * ! No improta que pienses tu qué está retornando, es una promesa
 */
import { API_URL } from "../env.js";

// GET
export async function getAllProducts () {
    // 1. Lanzar la petición
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

console.log(getAllProducts());

// GET 1 solo producto
export const getSingleProduct = async function(id){
 try{
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    console.log(data);
 } catch(error){
    console.error("Error", error);
 }  
}

getSingleProduct(13);
getSingleProduct(4);
getSingleProduct(20);

