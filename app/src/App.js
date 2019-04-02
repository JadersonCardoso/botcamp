import React, { Component } from 'react'

import BtnBotcamp from './components/BtnBotCamp'
import LogoBotcamp from './components/LogoBotcamp'

class App extends Component {
    render() {
        return(
         <div>   
            <LogoBotcamp/>
            <BtnBotcamp />
         </div>   
        )  
        
    }
}

export default App