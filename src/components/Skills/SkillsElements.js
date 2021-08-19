import styled from 'styled-components';

export const SkillsContainer = styled.div`
    margin-bottom:10px;
    display:flex;   
    flex:1;
 
    
    height:100vh;
    @media screen and (max-width:1080px){
        flex-direction:column;
        height:auto;
    } 
 

`
export const SkillsInfoContainer = styled.div`
    flex:0.5;
`;
export const SkillsInfo = styled.div`
    margin-left:70px;   
    display:flex;
    flex-direction:column;
    color:white;
    align-items:flex-start;
    justify-content:center;
    margin-top:50px;
    flex:0.5;
  
    @media screen and (max-width:1080px){
        margin:0;
        margin-top:40px;
    }


`;

export const MySkillsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;

    justify-content:center;

`;
export const MySkills = styled.div`
    border-radius:30px;
    width:150px;
    color:#ebeced;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    letter-spacing:1px;
    margin:10px;
    border:2px solid #0fd9cf;
    
`;

export const ExperienceContainer = styled.div`
    display:flex;
    width:300px;

    width:100%;
    margin-top:15px;
    align-items:flex-start;
    justify-content:center;
    height:auto;
    flex-wrap:wrap;
    @media screen and (max-width:1080px){
        margin-top:40px;

    }

`

export const SkillsContent = styled.div`
    color:#ebeced;
    font-size:18px;
    
    @media screen and (max-width:1080px){
        margin-top:20px;
    }

`;
