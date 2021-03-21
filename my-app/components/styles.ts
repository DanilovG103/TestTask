import styled,{createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #141414;
}
`

export const Form = styled.form`
    box-sizing: border-box;

    @media screen and (max-width: 1150px) {
        width:50%;
    }
    
    @media screen and (max-width: 1000px) {
        width:60%;
    }
    
    @media screen and (max-width: 800px) {
        width:70%;
    }
    
    @media screen and (max-width: 650px) {
        width:80%;
    }
    
    @media screen and (max-width: 550px) {
        width:100%;
    }
` 

export const Div = styled.div`
    &.error {
        color: red;
        text-align: center;
    }

    &.buttons {
        padding: 1rem;
    }
`

export const P = styled.p`
    &.layout {
        font-family: monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 32px;
        text-align: center;
        color: #c9c9c9;
        margin-top: 1rem;
    }

    &.another {
        font-family: monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        color: #c9c9c9;
        margin-top: 0.5rem;
    }

    &.form {
        font-family: monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 32px;
        text-align: center;
        color: #c9c9c9;
        margin-top: 2.5rem;
    }

    &.required {
        color: red;
        text-align: center;
    }

`
export const Input = styled.input`
    &.index {
        height: 25px;
        width: 200px;
        display: flex;
        margin: 2rem auto;
        border-radius: 10px;
        background: #d9d9d9;
    }

    &.formInput {
        margin: 1rem;
        display: flex;
        margin: 1rem auto;
        width: 195px;
        height: 25px;
        border-radius: 10px;
        background: #d9d9d9;
    }
`

export const Button = styled.button`
    &.main {
        margin-top: 1rem;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        padding:10px;
        border:none;
        background-color:#00d162;
        color:#fff;
        font-weight:600;
        border-radius:5px;
    }

    &.operator {
        border:none;
        padding:10px;
        color:#fff;
        background-color: #ff7b00;
        border-radius:5px;
        margin: 0.5rem auto;
        display:block;
        width: 100px;
    }

    :disabled:hover{
        background: #e5001b !important; 
        -fx-background-color: #e5001b;
     }
`