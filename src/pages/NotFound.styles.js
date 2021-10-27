import styled from "styled-components";

export const Wrapper=styled.div`
    background: url(${({ image }) => image}) center bottom;
    background-size: 100%, cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    font-family: Roboto, sans-serif;
    
    

`

export const Content=styled.div`
    color: var(--white);
    opacity:0.3;
    text-align:center;
    user-select:none;

    .title{
        font-size:20vh;
        font-weight: 900; 
        opacity:0.5;
    }
    .subtitle{
        font-size:6vh;
        font-wieght:600;
        padding-bottom: 2vh;
    }
    .description{
        font-size:2vh;
        padding-bottom: 4vh;
    }
`
  