/**
 * Promesas escritas
 * 1. Resolve, el caso de exito (caso en el que la promesa se resuelve de manera favorable)
 * 2. Reject, el caso de fracaso (caso en el que la promesa se resuelve de manera no favorable)
 * ! Improtante
 * Al crear una promesa esta debe ser retornada de una función.
 */
console.log("Primer console log");
function waitNSeconds(seconds){
    console.log("Primer console log dentro de la función");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const state = false;
            if (state) {
                resolve("La petición fue exitosa");
            } else {
                reject("La petición fracasó");
            }
        }, seconds * 1000);
    });
}

waitNSeconds(3)
    .then((response) => {
        console.log("Caso resolve");
        console.log(response);
    })
    .catch((error) => {
        console.log("Caso reject");
        console.log(error);
    });

console.log("Segundo console log");
console.log("Tercer console log");
console.log("Cuarto console log");