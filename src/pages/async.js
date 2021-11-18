import React from "react";

// const datos = [
//     {
//     id:1,
//     title: "Iron Man",
//     year: 2008
//    },
//    {
//        id:2,
//        title: "Spiderman: Homecoming",
//        year: 2017
//    },
//    {
//        id:3,
//        title: "Avengers: Endgame",
//        year: 2019
//    }];

const datos = [];

// const getDatos = () => {
//     return datos;

// }

// const getDatos= () =>{
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(datos);
//     }, 1500) ;
//     })
// }

//console.log(getDatos());

// getDatos()
//     .then((datos) => console.log(datos)); //podemos concatenar promesas tmbn:

//asincrono con async/await siendo sincrono, pero a la final es asincrono

// async function fetchingData () {
//     const datosFetched = await getDatos();
// console.log(datosFetched);
// }

//fetchingData();

// async function fetchingData () {
//     try {
//    const datosFetched = await getDatos();
//    console.log(datosFetched);
//     } catch(err){
//         console.log(err);
//     }
// }

// fetchingData();


//ahora vamos a serlo que se vea el error en consola, serìa asi:
const getDatos= () =>{
    return new Promise((resolve, reject) => {
        if(datos.length === 0) {
            reject(new Error('No existe datos'))
        }

      setTimeout(() => {
        resolve(datos);
    }, 1500) ;
    })
}

async function fetchingData () {
    try {
   const datosFetched = await getDatos();
   console.log(datosFetched);
    } catch(err){
        console.log(err.message);
    }
}

fetchingData();




const Async = () => {
    return (
        <div> Aloha!!</div>
    )
}

export default Async;