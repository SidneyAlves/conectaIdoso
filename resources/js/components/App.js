// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PagInicial from './PagInicial'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <div>
                <PagInicial />
            </div>
        </BrowserRouter>
    
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
