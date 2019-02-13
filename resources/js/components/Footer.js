import React from 'react'
import logopet from './imgs/pet.png'
import logorural from './imgs/rural.png'
import 'font-awesome/css/font-awesome.min.css'

    const Footer = () => (
        
       <footer class="container py-5 fixed-bottom">
       <hr></hr>
        <div class="row">
            <div class="col-12 col-md">
                <div class="row">
                    <div class="col-sm"><img src={logopet} width="80" height="100"></img></div>
                    <div class="col-sm"><img src={logorural} width="70" height="100"></img></div>
                </div>
                <small class="d-block mb-3 text-muted">Desenvolvido por PET-Sistemas de Informação UFRRJ &copy; 2019</small> 
            </div>
            <div class="col-6 col-md">
            <h5>ConectaIdoso</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Sobre o PET</a></li>
                <li><a class="text-muted" href="#">Sobre a plataforma</a></li>
                <li><a class="text-muted" href="#">Como utilizar</a></li>
                <li><a class="text-muted" href="#">Mais Tutoriais</a></li>
            </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Fale Conosco</h5>
                <ul class="list-unstyled text-small">
                    <div class="col-sm text-muted"><li><a href="http://r1.ufrrj.br/petsi/" style={estilo}><i className="fa fa-globe"></i>Site</a></li></div>
                    <div class="col-sm text-muted"><li><a href="https://www.facebook.com/PetSIUFRRJ/" style={estilo}><i className="fa fa-facebook-square"></i>Facebook</a></li></div>
                    <div class="col-sm text-muted"><li><a href="https://www.youtube.com/channel/UC9DegqNCRluHKPt-Hy9-_ew" style={estilo}><i className="fa fa-youtube" ></i>Youtube</a></li></div>            
                </ul>               
            </div>
            <div class="col-6 col-md">       </div>
            <div class="col-6 col-md">       </div>
            
        </div>
        </footer>
    )

    const estilo = {
        color: 'gray',
    };


    export default Footer