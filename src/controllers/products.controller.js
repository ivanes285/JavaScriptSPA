import viewProducts from '../views/products.html'


const Products= ()=>{
    //creamos un elemento que nos permita poner nuestro html para enviarlo al root
const divElemento = document.createElement('div');
divElemento.innerHTML= viewProducts;
return divElemento;
}

export {Products};