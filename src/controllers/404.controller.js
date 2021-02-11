import viewNotFound from '../views/404.html'


const NotFound= ()=>{
    //creamos un elemento que nos permita poner nuestro html para enviarlo al root
const divElemento = document.createElement('div');
divElemento.innerHTML= viewNotFound;
return divElemento;
}

export {NotFound};