import React from 'react'

import BtnBotCamp from '../../components/BtnBotCamp';
import LoginWrapper from '../../components/LoginWrapper';
import LogoBotcamp from '../../components/LogoBotcamp';


const Login = () => (
    <LoginWrapper>
          <LogoBotcamp/>
         <BtnBotCamp content='Entrar'></BtnBotCamp>
    </LoginWrapper>
)

export default Login