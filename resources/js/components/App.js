// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ConectaIdoso from './ConectaIdoso'
import VideoSingle from './VideoSingle'
import PagInicial from './PagInicial'
import SobreNos from './SobreNos'
import FaleConosco from './FaleConosco'
import ComoUtilizar from './ComoUtilizar'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={ConectaIdoso} />
                    <Route  path='/PagInicial' component={PagInicial} />
                    <Route path='/video/:id' component={VideoSingle} />
                    <Route  path='/SobreNos' component={SobreNos} />
                    <Route  path='/FaleConosco' component={FaleConosco} />
                    <Route  path='/ComoUtilizar' component={ComoUtilizar} />
                </Switch>
            </div>
        </BrowserRouter>
    
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
