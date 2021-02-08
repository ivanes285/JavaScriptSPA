
import viewhome from '../views/home.html';
//Esta es una funcion y esta es la primera forma de exportar sin la necesidad de utilizar export 

// export default () => {
//   const views = `<div class='text-white'><h1>Hello World</h1>
//   <p>Esta es una prueba con JavaScript</p></div>`;
//   return views;
// };



//Funcion con la nueva nomenclatura de EcmaScript
const home= ()=>{
    const divElemento= document.createElement('div');
    //Estilizamos con las etiquetas con bootstrap que fue instalado previamente 
     divElemento.classList="container mt-5 text-white text-left"
     divElemento.innerHTML= viewhome;
    return divElemento;
}


//Esta es la segunda forma de exportar 
export {home}