// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PagInicial from './PagInicial'
import VideoSingle from './VideoSingle'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={PagInicial} />
                    <Route path='/video/:id' component={VideoSingle} />
                </Switch>
            </div>
        </BrowserRouter>
    
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
