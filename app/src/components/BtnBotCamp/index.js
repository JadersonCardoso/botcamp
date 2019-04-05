import styled from 'styled-components'

const BtnBotCamp = styled.button.attrs({
        children: props => props.content
})`
        width: 280px;
        height: 50px;
        border-radius: 25px;
        font-size: 20px;
        color: #ffffff; 
        background-color: #ee3e25;
        position: relative;
        margin-top: 500px;
        left: 47px;
        right:48px;
`

export default BtnBotCamp
// import React from 'react'

// import './style.css'

// const BtnBotCamp = () => (
//         <button className='btn-botcamp'>Entrar</button>
// )

// export default BtnBotCamp