import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Body() {

    // 클릭 이벤트 처리
    const navigate = useNavigate();
    const handleOnClick = (e) => {
        
        const order = e.target.innerText;
        
        if (order === '글쓰기'){
            navigate(`/write`);
        }
    };
    
    return (
        <BodyDiv>
            <p onClick={handleOnClick}>글쓰기</p>
        </BodyDiv>
    )
}
export default Body;