import styled from 'styled-components'

const HeaderWrapper = styled.header`
    background-color: #26265e;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
    
    &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 0 400px 5px 0;
    border-color: transparent #26265e transparent transparent;
    transform: translateY(100%);
    }
    

    

`
export default HeaderWrapper