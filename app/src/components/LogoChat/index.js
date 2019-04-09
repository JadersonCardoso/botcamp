import styled from 'styled-components'

import logoChat from '../../imgs/botcamp.png'

const LogoChat = styled.img.attrs({
    src: logoChat,
    alt: 'Logo Chat'
})`
    width: 200px;
    height: 31.5px;
    object-fit: contain;
`
export default LogoChat