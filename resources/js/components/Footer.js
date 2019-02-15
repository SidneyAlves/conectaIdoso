import React from 'react'
import logopet from './imgs/pet.png'
import logorural from './imgs/rural.png'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'

    const Footer = () => (
       
       <footer className="text-center py-5">
       <hr></hr>
       <div className="container">
        <div className="row">
            <div className="col-md-2 col-sm-4 offset-md-3">
                <div className="row w-100 ">
                    <div className="col-md col-sm"><img src={logopet} className="w-100 h-100"></img></div>
                    <div className="col-md col-sm"><img src={logorural}  className="w-100 h-100"></img></div>
                </div>
                <small className=" mb-3 text-muted" >Desenvolvido por PET-Sistemas de Informação UFRRJ &copy; 2019</small> 
            </div>
            <div className="col-md-2">
            <h5>ConectaIdoso</h5>
            <ul className="list-unstyled text-small">
                <li> <Link className='text-muted' to='/SobreNos'>Sobre o PET</Link> </li>
                <li><Link className='text-muted' to='/'>Sobre a Plataforma</Link></li>
                <li><Link className='text-muted' to='/'>Como utilizar</Link></li>                
                <li><Link className='text-muted' to='/PagInicial'>Vídeos</Link></li>  
                              
            </ul>
            </div>
            <div className="col-md-2">
                <h5>Fale Conosco</h5>
                <ul className="list-unstyled text-small">
                    <div className="col-sm text-muted"><li><a href="http://r1.ufrrj.br/petsi/" style={estilo}><i className="fa fa-globe"></i>Site</a></li></div>
                    <div className="col-sm text-muted"><li><a href="https://www.facebook.com/PetSIUFRRJ/" style={estilo}><i className="fa fa-facebook-square"></i>Facebook</a></li></div>
                    <div className="col-sm text-muted"><li><a href="https://www.youtube.com/channel/UC9DegqNCRluHKPt-Hy9-_ew" style={estilo}><i className="fa fa-youtube" ></i>Youtube</a></li></div>            
                </ul>               
            </div>
            <div className="col-6 col-md">       </div>
            <div className="col-6 col-md">       </div>
            
        </div>
        </div>
        </footer>
    )

    const estilo = {
        color: 'gray',
    };


    export default Footer