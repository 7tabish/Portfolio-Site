import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    display:flex;
    padding:20px;
    background:#252D33;
    flex-direction:column;
    align-items:flex-start;
    border-radius:6px;
    width:100%;
    height:170px;
    
    /* flex-grow:1; */
    margin:7px 7px 0px 0px;
    @media screen and (max-width: 1080px){
        width:100%;
      
    }
`;

export const CompanyName = styled.p`
    color:#ebeced;
    letter-spacing:1px;
    margin-top:5px;
    font-size:17px;
`

export const JobTitle = styled.h3`
    color:#ebeced;
    letter-spacing:1px;
`

export const Date = styled.p`
    color:#A8A5A5;
    font-size:13px;
`

export const JobDesc = styled.p`
margin-top:10px;
    color:#ebeced;
    letter-spacing:1px;
`