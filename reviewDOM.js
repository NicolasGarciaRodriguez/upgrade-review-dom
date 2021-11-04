// ---------------------------1.1-------------------

// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
// const ul = document.createElement("ul")

// document.body.appendChild(ul)

// for (country of countries) {
//     let li = document.createElement("li")
//     let node = document.createTextNode(country)
//     li.appendChild(node)
//     ul.appendChild(li)
// }

// ---------------------------1.2-------------------

// function eliminarElementoPorClase(clase) {
//     const elementoAEliminar = document.getElementsByClassName(clase)
//     elementoAEliminar.remove()
// }

// eliminarElementoPorClase("fn-remove-me")


// ---------------------------1.3-------------------

// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// const div = document.querySelector("div")

// const ul = document.createElement("ul")

// div.appendChild(ul)

// for (car of cars) {
//     let li = document.createElement("li")
//     let node = document.createTextNode(car)
//     li.appendChild(node)
//     ul.appendChild(li)
// }

// ---------------------------1.4-------------------

// const countries = [
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
// ];

// function crearPaises(obj) {
//     for (elem of obj) {
//         let div = document.createElement("div")
//         let h4 = document.createElement("h4")
//         let img = document.createElement("img")
//         document.body.appendChild(div)
//         div.appendChild(h4)
//         div.appendChild(img)
//         let h4text = document.createTextNode(elem.title)
//         h4.appendChild(h4text)
//         img.src = elem.imgUrl
//     }
// }
// crearPaises(countries)

// ---------------------------1.5-------------------

// const countries = [
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
//     { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
// ];

// function crearPaises(obj) {
//     for (elem of obj) {
//         let div = document.createElement("div")
//         let h4 = document.createElement("h4")
//         let img = document.createElement("img")
//         document.body.appendChild(div)
//         div.appendChild(h4)
//         div.appendChild(img)
//         let h4text = document.createTextNode(elem.title)
//         h4.appendChild(h4text)
//         img.src = elem.imgUrl
//     }
// }

// function botonDelete() {
//     const boton = document.createElement("button")
//     document.body.appendChild(boton)
//     const buttonText = document.createTextNode("Eliminar")
//     boton.appendChild(buttonText)
//     boton.onclick = function borrar() {
//         let divAEliminar = document.querySelector("div")
//         divAEliminar.remove()
//     }
// }

// crearPaises(countries)
// botonDelete()

// ---------------------------1.6-------------------

// const countries = [
//     { title: 'Random1', imgUrl: 'https://picsum.photos/300/200?random=1' },
//     { title: 'Random2', imgUrl: 'https://picsum.photos/300/200?random=2' },
//     { title: 'Random3', imgUrl: 'https://picsum.photos/300/200?random=3' },
//     { title: 'Random4', imgUrl: 'https://picsum.photos/300/200?random=4' },
//     { title: 'Random5', imgUrl: 'https://picsum.photos/300/200?random=5' }
// ];

// function crearPaises(obj) {
//     for (elem of obj) {
//         let div = document.createElement("div")
//         div.id = elem.title
//         let h4 = document.createElement("h4")
//         let img = document.createElement("img")
//         let boton = document.createElement("button")
//         const botonText = document.createTextNode("Eliminar")
//         boton.appendChild(botonText)
//         document.body.appendChild(div)
//         div.appendChild(h4)
//         div.appendChild(img)
//         div.appendChild(boton)
//         let h4text = document.createTextNode(elem.title)
//         h4.appendChild(h4text)
//         img.src = elem.imgUrl
//         boton.onclick = function borrarElemento() {
//             let elementoAEliminar = document.getElementById(div.id)
//             elementoAEliminar.remove()
//         }
//     }
// }
// crearPaises(countries)