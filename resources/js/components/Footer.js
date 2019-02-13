import React from 'react'
import logopet from './imgs/pet.png'
import logorural from './imgs/rural.png'
import 'font-awesome/css/font-awesome.min.css'

    const Footer = () => (
        
       <footer className="container py-5 fixed-bottom">
       <hr></hr>
        <div className="row">
            <div className="col-12 col-md">
                <div className="row">
                    <div className="col-sm"><img src={logopet} width="80" height="100"></img></div>
                    <div className="col-sm"><img src={logorural} width="70" height="100"></img></div>
                </div>
                <small className="d-block mb-3 text-muted">Desenvolvido por PET-Sistemas de Informação UFRRJ &copy; 2019</small> 
            </div>
            <div className="col-6 col-md">
            <h5>ConectaIdoso</h5>
            <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Sobre o PET</a></li>
                <li><a className="text-muted" href="#">Sobre a plataforma</a></li>
                <li><a className="text-muted" href="#">Como utilizar</a></li>
                <li><a className="text-muted" href="#">Mais Tutoriais</a></li>
            </ul>
            </div>
            <div className="col-6 col-md">
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
        </footer>
    )

    const estilo = {
        color: 'gray',
    };


    export default Footer