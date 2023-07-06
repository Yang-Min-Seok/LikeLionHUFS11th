import styled from "styled-components";
import writeImg from "../../assets/images/write.png";
export const BodyDiv = styled.div`
    text-align: center;
    p {
        display: inline-block;
        width: 20%;
        margin: 0 auto;
        font-size: 170%;
        font-family: serif;
        cursor: pointer;
        line-height: 2.5;
        text-align: center;
        transition: all 0.3s;
    }
    p:hover{
        color: #A67951;
    }
    p:before{
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url(${writeImg});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transform: translateY(4px) translateX(-10px);
    }
    h1{
        margin: 0;
        font-family: serif;
        line-height: 2;
        margin-top: 50px;
        font-size: 190%;
    }
`