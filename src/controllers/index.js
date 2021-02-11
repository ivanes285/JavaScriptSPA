
import {Home} from './home.controller';
import {NotFound} from './404.controller';
import {Products} from './products.controller';
import {Posts} from './posts.controller';


const  pages ={
 home : Home,
 notFound : NotFound,
 products: Products,
 posts : Posts
}

export { pages };

