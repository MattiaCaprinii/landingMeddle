import { useState } from 'react';
import './footer.css';

var i=0
var j=0



function Footer() {
    const [nome, setNome] = useState("mattia")
    const [nome2, setNome2] = useState("simone")
    const [cont, setCont] = useState(0)

    function clickHandler() {
        if(i%2 === 0){
            setNome("filippo")
        } else {
            setNome("mattia")
        };

        setCont(i=i+1);
        j=j+1

        if(j===0){
            setNome2("simone")
        }else if(j===1){
            setNome2("leonardo")
        } else if(j===2){
            setNome2("manuele") 
            j=-1
        }
        return;    
    }

   return(
   <div className='App-footer'>
       <button onClick={clickHandler}>
               CLICK</button>
       <p className='txt-footer' >{nome}</p>
       <p className='txt-footer' onMouseUpCapture={()=> setNome2("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG")}  >{nome2}</p>
       <p className='txt-footer' >{cont}</p>

   </div>
   );

  }
  
  // 👇️ default export
  export default Footer;
  