import React from 'react'
    import { Link } from 'react-router-dom'

    const Header = () => (
      <nav className='navbar navbar-expand-md navbar-light navbar-laravel' style={estiloHeader}>
        <div className='container'>
          <Link className='navbar-brand' to='/'>ConectaIdoso</Link>
        </div>
      </nav>
    )

    export default Header


    const estiloHeader = {
      backgroundColor: 'green',  
      color:'white',      
    };