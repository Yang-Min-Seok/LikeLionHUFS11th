import styled from "styled-components";

export const Navbar = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    p {
        font-family: serif;
        margin:0;
        font-size: 150%;
        text-align: center;
        line-height:2;
        cursor: pointer;
    }

    p:nth-child(1){
        width: 20%;
    }
    p:nth-child(2){
        width: 10%;
    }
    
`