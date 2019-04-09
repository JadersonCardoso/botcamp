import styled from 'styled-components'

const BtnBotCamp = styled.button.attrs({
        children: props => props.content,
        renderAs: {}
})`
        width: 280px;
        height: 50px;
        border-radius: 25px;
        font-size: 20px;
        color: #ffffff; 
        background-color: #ee3e25;
        
`

export default BtnBotCamp
