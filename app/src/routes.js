import React from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'

import Login from './pages/Login'
import Chat from './pages/Chat'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={Login}/>
            <Route path='/chat' component={Chat}/>
        </Switch>
    
    </BrowserRouter>
)
