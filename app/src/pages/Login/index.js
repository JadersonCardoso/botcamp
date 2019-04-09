import React from 'react'
import {Link} from 'react-router-dom'

import BtnBotCamp from '../../components/BtnBotCamp';
import LoginWrapper from '../../components/LoginWrapper';
import LogoBotcamp from '../../components/LogoBotcamp';


const Login = () => (
    <LoginWrapper>
          <LogoBotcamp/>
          <Link to='/chat' >
            <BtnBotCamp content='Entrar'/>
          </Link>  
         
    </LoginWrapper>
)

export default Login