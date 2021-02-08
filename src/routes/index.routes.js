//Esta es la primera forma de importar 
//import Home from '../views/home'  

//Esta es la segunda forma de importar en donde especifico lo que necesito
import {home} from '../views/home'

const router = (route) => {
  switch (route) {
    case "#/":{
     document.getElementById('root').innerHTML+= home()
    }
    case "#/products":
      return console.log("products");
    case "#/posts":
      return console.log("posts");
    default :
    return console.log("Error 404 NOT FOUND")
  }
};

export { router };
