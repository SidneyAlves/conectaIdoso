// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PagInicial from './PagInicial'

class Admin extends Component {
    render () {
    return (
        <BrowserRouter>
            <div>
                <p>oi</p>
            </div>
        </BrowserRouter>
    
    )
    }
}

ReactDOM.render(<Admin />, document.getElementById('app'))
