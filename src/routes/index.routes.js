//Esta es la primera forma de importar 
//import Home from '../views/home'  

//Esta es la segunda forma de importar en donde especifico lo que necesito
import {pages} from '../controllers/index'

let contenido = document.getElementById('root');

const router = async (route) => {
  //Formateamos para que no se recargue encima 
  contenido.innerHTML=' ';
  switch (route) {
    case "#/":{
      return contenido.appendChild(pages.home());
    }
      
    case "#/products":{
      return contenido.appendChild(pages.products())
    }
     
    case "#/posts":{
      return contenido.appendChild( await pages.posts())
    }
     
    default :{
      return contenido.appendChild(pages.notFound())
    }
  
  }
};


export { router };
