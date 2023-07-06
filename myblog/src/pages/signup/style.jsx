import styled from "styled-components";

export const BodyDiv = styled.div`
    margin-top: 100px;
    form{
        font-family: serif;
        text-align: center;
    }
    form p{
        margin: 0;
        font-size: 120%;
    }
    form p:nth-child(1){
        display: block;
        width: 50%;
        text-align: right;
        margin: 0 auto;
        line-height: 4;
        font-size: 140%;
    }
    form p:nth-child(1) input{
        width: 50%;
        font-size: 140%;
        text-align: center;
    }
    form p:nth-child(2){
        display: block;
        width: 50%;
        text-align: right;
        margin: 0 auto;
        line-height: 4;
        font-size: 140%;
    }
    form p:nth-child(2) input{
        width: 50%;
        font-size: 140%;
        text-align: center;
    }
    form p:nth-child(3){
        display: block;
        width: 50%;
        text-align: right;
        margin: 0 auto;
        line-height: 4;
        font-size: 140%;
        margin-bottom: 50px;
    }
    form p:nth-child(3) input{
        width: 50%;
        font-size: 140%;
        text-align: center;
    }
    form button{
        width: 20%;
        line-height: 2;
        font-size: 150%;
        border: none;
        background-color: #A67951;
        color: #fff;
        font-family: serif;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 20px;
        margin-bottom: 50px;
        transition: all 0.3s;
        box-sizing: border-box;
    }
    form button:hover{
        color : #A67951;
        background-color: #fff;
        border: 1px solid #A67951;
    }
`;