import React, { Component } from 'react'

import BtnBotcamp from './components/BtnBotCamp'
import LogoBotcamp from './components/LogoBotcamp'
import LoginWrapper from './components/LoginWrapper'

import './styles/reset.css'

class App extends Component {
    render() {
        return(
         
            <LoginWrapper>
                <LogoBotcamp/>
                <BtnBotcamp content='Entrar'></BtnBotcamp>
            </LoginWrapper>
         
        )  
        
    }
}

export default App