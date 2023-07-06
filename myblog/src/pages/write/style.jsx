import styled from "styled-components";

export const BodyDiv = styled.div`
    margin-top: 50px;
    form{
        font-family: serif;
        text-align: center;
    }
    form p{
        margin: 0;
        font-size: 150%;
    }
    form p:nth-child(1){
        display: block;
        width:50%;
        margin: 0 auto;
        line-height : 2;
    }
    form p:nth-child(1) input{
        width: 50%;
        font-size: 100%;
    }
    form p:nth-child(2){
        line-height: 2;
    }
    form p:nth-child(3){

    }
    form p:nth-child(3) textarea{
        font-size: 110%;
        padding: 2%;
        box-sizing: border-box;
    }
    form button{
        display: block;
        width: 20%;
        line-height: 3;
        font-family: serif;
        background-color: #A67951;
        border: none;
        color: #fff;
        border-radius: 20px;
        transition: all 0.3s;
        cursor: pointer;
        margin: 0 auto;
        font-size: 150%;
        margin-top: 30px;
    }
    form button:hover{
        color : #A67951;
        background-color: #fff;
        border: 1px solid #A67951;
    }
`