import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";  
import {router} from './routes/index.routes'

//ejecutamos esto para que cargue antes 
router(window.location.hash)

 window.addEventListener('hashchange',()=>{
  router(window.location.hash)
 })
 