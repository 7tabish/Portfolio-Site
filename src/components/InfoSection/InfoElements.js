import styled from 'styled-components';

export const InfoContainer = styled.div`
    flex:1;
    display:flex;
    height:80vh;
    align-items:flex-start;
`

export const InfoWrapper = styled.div`
display:flex;
flex-direction:column;
     justify-content:space-between;
     height:100%;
    
`
export const HeadInfo = styled.h1`
    color:white;

    font-size:80px;
    @media screen and (max-width: 768px){
        margin:0;
        font-size: 50px;
    }
    @media screen and (max-width: 480px){
        margin: 0;
        font-size: 35px;
    }
`;

export const ParaInfo = styled.p`
    font-size:22px;

    letter-spacing:1px;
    margin-bottom:15px;
    @media screen and (max-width: 768px){
        font-size: 17px;
        margin:0;
    }
    @media screen and (max-width: 480px){
        font-size: 14px;
        margin:0;
    }
`;

export const HtmlTags = styled.p`
    color:#4d4f4f;
    font-family: 'Caveat', cursive;

    
`;

