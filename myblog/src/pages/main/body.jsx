import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";

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
    
    return (
        <BodyDiv>
            <p onClick={handleOnClick}>글쓰기</p>
        </BodyDiv>
    )
}
export default Body;