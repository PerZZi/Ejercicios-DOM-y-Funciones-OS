function imprimirMensaje(mensaje) {
    console.log("Hola soy un mensaje")
}
imprimirMensaje()

const imprimirMensaje2 = (mensaje)=>{
    console.log("Soy otro mensaje")
}
imprimirMensaje2()

function crearMultiplicacion(num1,num2){
    let resultado= num1*num2
    return resultado
}
console.log(crearMultiplicacion(2,4))

const crearMultiplicacion2=(num1,num2)=>{
    let resultado= num1*num2
    return resultado
}
console.log(crearMultiplicacion2(4,4))

//ejercicio 3
const array=[1,2,3,4,5,6,7,8,9].map(crearMultiplicacion)
console.log(array)
// const suma=array.map((arreloNumeros)=>crearMultiplicacion(arreloNumeros,2))
// console.log(suma)

//ejercicio 4
console.log(cervezas)// arreglo de objetos de la clase cerveza

const masAlcoholicas= cervezas.filter(cerveza => cerveza.abv).map(cerveza => cerveza.name)
console.log(masAlcoholicas)

function listasMasAlco(cerveza){ 
    console.log(cerveza)
}
//ejercicio 5
const menosAmargas= cervezas.filter(cervezas => cervezas.ibu)
console.log(menosAmargas)

//ejercicio 6
let nombre="Buzz"
const igual= cervezas.find(cerveza => cerveza.name==nombre)
console.log(igual)

//ejercicio 7
let valorIbu=prompt("Ingresa el valor")
const mismoValor= cervezas.find(cerveza => cerveza.ibu==valorIbu)
console.log(mismoValor)

//ejercicio 8
let nombreCerveza="AB:12"
const posicion= cervezas.findIndex(cerveza => cerveza.name==nombreCerveza)
console.log(posicion)

//ejercicio 9
let valorAlcohol=4.7
const nivelEtilico= cervezas.filter(cerveza => cerveza.abv <= valorAlcohol)
if(nivelEtilico==true){
    console.log(nivelEtilico)
}
else{
    console.log("Se paso de nivel")
}

//ejercicio 10
function ordenarCervezasPorPropiedad(cervezas, propiedad, ascendente) {
    const copiaCervezas = cervezas.toSorted(function (cervezaA, cervezaB) {
        if (ascendente) {
            return cervezaA[propiedad] - cervezaB[propiedad];
        } else {
            return cervezaB[propiedad] - cervezaA[propiedad];
        }
    });

    const cervezasOrdenadas = copiaCervezas.slice(0, 10);

    return cervezasOrdenadas;
}
const cervezasOrdenadas = ordenarCervezasPorPropiedad(beers, "abv", true);
console.log(cervezasOrdenadas);

//ejercicio 11
function rellenarTabla(cervezas, id) {
    const buscartable = document.getElementById(id)
    function crearFila(cerveza) {
        let fila = <tr>
            <td>${cerveza.name}</td>
            <td>${cerveza.abv}</td>
            <td>${cerveza.ibu}</td>
        </tr>
        return fila
    }
    cervezas.forEach(cerveza => {
        let fila2 = crearFila(cerveza)
        buscartable.innerHTML += fila2
    });
}
rellenarTabla(ordenarCervezasPorPropiedad(cervezas, "name", true), "tbody",)