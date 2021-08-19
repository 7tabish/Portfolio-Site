import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const NavbarContainer = styled.div`
    /* background:#1C1D1E ;  */
    background:#11151a;

    height:100vh;
    min-width:145px;
    display:flex;
    position:fixed;
    @media screen and (max-width:1080px){
        display:none;
    }
    
`;



export const NavbarContent = styled.div`


`
export const NavbarWrapper = styled.div`
    display:flex;
    color:#ADA8A8;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:550px;
`

export const Nav = styled.nav`
    display:flex;
    width:100%;
    flex-direction:column;
    padding:3px;
`;

export const NavLink = styled(LinkS)`
    padding:10px;
    cursor: pointer;
    text-align:center;
    border-bottom:0.3px solid #545353;
    font-size:23px;
    &:hover{
        color:white;
    }
`

export const LogoNav = styled(LinkS)`
    border:0;
    color:white;
    font-size:32px;
    font-weight:bold;
    &:hover{
        cursor: pointer;
    }
`

export const SocialIcons = styled.a`
    transition: transform .2s;

    &:hover{
        cursor:pointer;
        transform: translate(0px, -5px);
    }
`;

