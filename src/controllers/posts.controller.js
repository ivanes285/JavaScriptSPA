import viewPosts from '../views/posts.html'

const getPost = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await response.json()
}


const Posts = async ()=>{
    //creamos un elemento que nos permita poner nuestro html para enviarlo al root
const divElemento = document.createElement('div'); 
divElemento.innerHTML= viewPosts;
const postsElement = divElemento.querySelector("#posts");
const posts = await getPost()
const nuposts= divElemento.querySelector("#nuposts");
nuposts.innerHTML=posts.length;


posts.forEach(post => {
    postsElement.innerHTML+=
    `<li class="list-group-item border-light" id=bglist> 
    <h5 id=uppercase>${post.title}</h5> 
    <p>${post.body}</p>
    </li>`
});

return divElemento;
}



export {Posts};