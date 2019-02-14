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
                <img src={idosos} className='h-100 w-100 pt-5 pl-3'></img>
            </div>
            <div  className='col-md-4 w-100 h-100'><br></br>
                <h2 className=' mt-4' align="center">O que é o ConectaIdoso?</h2>
                <div >
                    <p align="justify" className='w-100 h-100 mt-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </p>
                </div>              

            </div>

        </div>
     <Footer />
 </div>
)

export default ConectaIdoso