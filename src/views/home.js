
//Esta es una funcion y esta es la primera forma de exportar sin la necesidad de utilizar export 

// export default () => {
//   const views = `<div style=color:#fff><h1>Hello World</h1>
//   <p>Esta es una prueba con JavaScript</p></div>`;
//   return views;
// };


//Funcion con la nueva nomenclatura de EcmaScript
const home= ()=>{
    const views = `<div style=color:#fff><h1>Hello World</h1>
    <p>Esta es una prueba con JavaScript</p></div>`;
    return views;
}

//Esta es la segunda forma de exportar 
export {home}