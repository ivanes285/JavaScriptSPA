import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";  
import {router} from './routes/index.routes'



 window.addEventListener('hashchange',()=>{
  router(window.location.hash)
 })
