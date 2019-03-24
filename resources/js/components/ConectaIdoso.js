import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import idosos from './imgs/idosos.jpg'

const ConectaIdoso = () => (
 <div>
     <Header /> 
        <div className=' row p-0 w-100 h-100'>
            <div className='col-md-7'>
                <img src={idosos} className='h-100 w-100 pt-3 pl-3'></img>
            </div>
            <div  className='col-md-5 w-100 h-100'><br></br>
                <h2 className=' mt-2' align="center">O que é o ConectaIdoso?</h2>
                <div style={estiloP} >
                    <p align="justify" className='w-100 h-100 mt-3'>                    
O ConectaIdoso é uma plataforma voltada para o ensino de tecnologias atuais para o público da terceira idade. Nosso objetivo é permitir que o aprendizado seja realizado de forma fácil e prática, de forma a aumentar a inclusão dos idosos em um mundo que se mostra cada vez mais conectado.
Com tutoriais intuitivos e simples, iremos mostrar como funcionam e como utilizar aplicativos como o Youtube, Whatsapp, Gmail, Facebook, dentre outras ferramentas úteis presentes nos telefones celulares, e que poderão contribuir para a melhora da qualidade de vida de seus usuários. 
Esses tutoriais serão gravados pelos próprios alunos do PET-SI, da UFRRJ, de forma que os vídeos contenham um material didático atualizado e objetivo, de forma a trazer uma experiência produtiva e recompensadora.

                    </p>
                </div>              

            </div>

        </div>
     <Footer />
 </div>
)

export default ConectaIdoso

const estiloP = {
    fontSize: 20,    
  };