import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-bottom:10px;
    display:flex;
    height:100vh;


`
export const MobileIcon = styled.div`
    display:none;
 
    
    @media screen and (max-width: 1080px){
        margin-top:15px;
        position:fixed;
        display: block;
        left:90%;
        transform: translated(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:white;    
    }
`
