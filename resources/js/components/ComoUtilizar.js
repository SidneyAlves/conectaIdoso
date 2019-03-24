import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Home from './imgs/Home.png'
import Player from './imgs/Player.png'
import Videos from './imgs/Videos.png'


const ComoUtilizar = () => (
 <div>
     <Header /> 
        <div className=' w-100 h-100 container'>           
                <h2 className=' mt-2' align="center">Como Utilizar</h2><br></br>
                <div className='container'>
                  <h3>1) Clique em "Vídeos"</h3>
                  <img src={Home} className='h-100 w-100'></img>
                </div> <br></br>
                <div className='container'>  
                  <h3>2) Selecione o vídeo que você quer assistir</h3>
                  <img src={Videos} className='h-100 w-100'></img>
                </div><br></br>
                <div className='container'>
                  <h3>3) Assista o vídeo</h3>
                  <img src={Player} className='h-100 w-100'></img>
                </div>                
                
        </div>
     <Footer />
 </div>
)

export default ComoUtilizar