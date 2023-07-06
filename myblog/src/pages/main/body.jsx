import { BodyDiv } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Body() {

    // 클릭 이벤트 처리
    const navigate = useNavigate();
    const handleOnClick = (e) => {
        
        const order = e.target.innerText;
        const id = document.getElementById('login').innerText.slice(0, -1);
        if (order === '글쓰기' && id === 'logI'){
            alert('로그인 해 주세요');
        }
        else if (order === '글쓰기'){
            navigate(`/write`, {state:{id:id}});
        }

    };
    
    // 글목록 관리
    const [articleList, setArticleList] = useState([]);
    

    return (
        <BodyDiv>
            <p onClick={handleOnClick}>글쓰기</p>
            {articleList.length ? 
            <div id="articleBox">글상자</div> : 
            <h1>
                아직 글이 없어요<br />
                글쓰기 버튼을 눌러 글을 등록해주세요
            </h1>}
        </BodyDiv>
    )
}
export default Body;