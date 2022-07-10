import {css} from "styled-components"

export const mobile = (props) =>{
    return css`
    @media (max-width: 480px) {
     ${props}   
    }
    `;
};

export const tablets = (props) =>{
    return css`
    @media (max-width: 768px) {
     ${props}   
    }
    `;
};

export const smallScreens = (props) =>{
    return css`
    @media (max-width: 1024px){
     ${props}   
    }
    `;
};

export const largeScreens = (props) =>{
    return css`
    @media (max-width: 1270px){
     ${props}   
    }
    `;
};