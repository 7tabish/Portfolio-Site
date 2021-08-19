import styled from 'styled-components';


export const Button = styled.a`
margin-top:35px;
    
    border: 1px solid #00c4b1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration:none;
    white-space: nowrap;
    background: transparent;
    padding: 10px 38px;
    width:40%;
    color: #00c4b1;
    letter-spacing:2px;
    font-size: 17px;
    margin-left:50px;
    transition: 0.3s ease-in-out;

    &:hover{
        transition: 0.3s ease-in-out;
        color:black;
        background:#00c4b1;
    }
    @media screen and (max-width: 768px){
        padding: 12px 40px
    }
    @media screen and (max-width: 480px){
        padding: 10px 35px;
    }

`