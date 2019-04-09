import React from 'react'
import {Link} from 'react-router-dom'

import LogoutBotcamp from '../../components/LogoutBotcamp';
import HeaderWrapper from '../../components/HeaderWrapper';
import LogoBotcamp from '../../components/LogoBotcamp'
import BoxMessage from '../../components/BoxMessage/BoxMessage';
import ChatWrapper from '../../components/ChatWrapper';

const Chat = () => (
    <>
        <ChatWrapper>
            <HeaderWrapper >
                <LogoBotcamp small/>
                <Link to='/'>
                    <LogoutBotcamp />
                </Link>
            </HeaderWrapper>
            <BoxMessage />
        </ChatWrapper>    
   </> 
)

export default Chat