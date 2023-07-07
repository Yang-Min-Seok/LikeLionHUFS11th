import styled from "styled-components";
import writeImg from "../../assets/images/write.png";

export const BodyDiv = styled.div`
    
    text-align: center;

    /* 글쓰기 버튼 */
    #writeBtn{
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
    #writeBtn:hover{
        color: #A67951;
    }
    #writeBtn:before{
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

    /* 글쓰기 화면 */
    #popUp{
        font-family: serif;
        margin-bottom: 50px;
    }
    #popUp form{
        font-size: 140%;
    }
    #popUp form p:nth-child(1){
        
    }
    #popUp form p:nth-child(1) input{
        font-size: 100%;
        width: 20%;
        padding: 1%;
        box-sizing: border-box;
    }
    #popUp form p:nth-child(2){

    }
    #popUp form textarea{
        padding: 3%;
        font-size: 130%;
    }
    #popUp form button{
        display: block;
        margin: 0 auto;
        background-color: #A67951;
        color: #fff;
        width: 20%;
        height: 50px;
        border: none;
        cursor: pointer;
        margin-top: 50px;
        font-size: 120%;
        border-radius: 20px;
        transition: all 0.3s;
    }
    #popUp form button:hover{
        border: 1px solid #A67951;
        background-color: #fff;
        color: #A67951;
    }

    /* 글목록 */
    #articleBox{
        font-family: serif;
        margin-top: 50px;
    }
    #articleBox div{
        width: 50%;
        margin: 0 auto;
        border: 1px solid #A67951;
        box-sizing: border-box;
        margin-bottom: 50px;
        position: relative;
    }
    #articleBox div::before{
        content: "삭제버튼";
        display:block;
        position: absolute;
        right: 0;
        top: 0;
    }
    #articleBox div h3{
        margin: 0;
        font-size: 150%;
        line-height: 3;
    }
    #articleBox div p:nth-child(2){
        display: block;
        width: 30%;
        margin: 0 auto;
        font-size: 150%;
        border-bottom: 1px solid #A67951;
        line-height: 2;
    }
    #articleBox div p:nth-child(3){
        display: block;
        width:80%;
        margin: 0 auto;
        font-size: 130%;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`