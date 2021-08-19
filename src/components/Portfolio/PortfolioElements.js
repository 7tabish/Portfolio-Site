import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    height:auto;
    margin-bottom:50px;
`;

export const ProjectsContainer = styled.div`
    margin-top:30px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;

    height:auto;
    width:100%;

`;

export const ProjectCard = styled.div`
    width:370px;
    height:340px;
    margin:10px;
    border-radius:5px;
    background:#252D33;
    padding:18px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:#ebeced;
    transition:transform .2s;

    &:hover{
        cursor: pointer;
        transform: translate(0px, -10px);
        /* transform: scale(1.01); */
        
    }
`;
export const ProjectContent = styled.div`
    display:flex;
   
    justify-content:space-between;
    height:80%;
    flex-direction:column;
`
export const ProjectName = styled.h2`

`

export const ProjectDesc = styled.p`
    letter-spacing:1px;
`

export const ProjectTools = styled.p`
    
`
export const ProjectLinks = styled.div`
    display:flex;
    justify-content:space-between;
`

export const Link = styled.a`
    text-decoration:none;
    color:white;
`