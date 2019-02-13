import React from 'react'
    import { Link } from 'react-router-dom'
    import Header from './Header'
    import Footer from './Footer'
    import Content from './Content'
    import Login from './Login'

    const PagInicial = () => (
     <div>
         <Header /> <br></br>
         <Content />
         <Footer />
     </div>
    )

    export default PagInicial