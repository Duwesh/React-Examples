// import styled from 'styled-components'

export const Button= styled.button`
        background-color: ${({theme})=>(theme == "light"? "blue":"pink")};
        font-size: 15px;
        color: ${({theme})=>(theme == "light"? "white":"black")};
        border: 1px solid black;
        margin-top: 40px;
        width : 100px;
        height: 50px;
        border-radius: 12px;
    `
           
              
         


