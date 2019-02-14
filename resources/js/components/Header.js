import React from 'react'
    import { Link } from 'react-router-dom'

    const Header = () => (
      <nav className='navbar navbar-expand-md navbar-light navbar-laravel' style={estiloHeader}> 
          <div className='container'>      
          <Link className='navbar-brand' style={estiloHeader} to='/'><h3>ConectaIdoso</h3></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburguer" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"  style={estiloHeader}>
            <span class="navbar-toggler-icon" style={estiloHeader}></span>
          </button>
          <div class="collapse navbar-collapse" id="hamburguer">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-2 ">
              <li class="nav-item active">
                <Link className='nav-link' style={estiloHeader} to='/PagInicial'>Vídeos</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' style={estiloHeader} to='/'>Como Utilizar</Link>                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={estiloHeader}>Sobre nós</a>
              </li>             
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
          </div> 
      </nav>
    )

    export default Header


    const estiloHeader = {
      backgroundColor: 'green',  
      color:'white',      
    };