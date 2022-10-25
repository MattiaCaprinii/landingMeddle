import { useState } from 'react';
import './imgContainer.css';
import img1 from './img/intercambiabili/prova1.jpeg'
import img2 from './img/intercambiabili/prova2.webp'


function Img3() {

    const [immagine, setImmagine] = useState(img1) 

   return(

    <div className='contenitoreImg'>
        <div className='cambioImg' onMouseOver={() => setImmagine(img2)} onMouseLeave={() => setImmagine(img1)} >
            <img src={immagine} className='imgggg' />
        </div>

    </div>

   );

  }
  
  // 👇️ default export
  export default Img3;
  