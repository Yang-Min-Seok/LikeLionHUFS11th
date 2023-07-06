import styled from "styled-components";

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-family: serif;
        margin:0;
        font-size: 150%;
        text-align: center;
        line-height: 3;
        cursor: pointer;
        transition: all 0.3s;
    }
    p:hover{
        color:#A67951;
    }

    p:nth-child(1){
        width: 20%;
    }
    p:nth-child(2){
        width: 10%;
    }
`