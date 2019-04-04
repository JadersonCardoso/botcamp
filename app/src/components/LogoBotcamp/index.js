import styled from 'styled-components';
 
import logoBotcamp from '../../imgs/botcamp.png'

const LogoBotcamp = styled.img.attrs({
        src: logoBotcamp,
        alt:'Logo do Botcamp'
})`        
        width: 248px;
        height: 39px;
        object-fit: contain;
        position: relative;
        top: 63px;
        left: 64px;
        
`
export default LogoBotcamp

