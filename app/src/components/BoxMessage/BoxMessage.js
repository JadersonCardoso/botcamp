import styled from 'styled-components'

const BoxMessage = styled.input.attrs({
    placeholder:'Diz aí...',
    type: 'text'
})`
    border: none;
    width: 409px;
    height: 50px;
    background-color: #fbfbff;
    font-family: Roboto;
    font-size: 20px;
`
export default BoxMessage