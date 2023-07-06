import { BodyDiv } from "./style";
import { Navigate, useNavigate } from "react-router-dom";

function Body() {
    const navigate = useNavigate();
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        const id = e.target[0].value;
        const pw = e.target[1].value;
        const pw2 = e.target[2].value;
        
        // 비밀번호가 일치하지 않으면
        if (pw !== pw2) {
            alert('비밀번호 불일치');
        }
        // 이외에는
        else{
            alert('회원 등록 완료')
            // 메인 페이지로
            navigate(`/`, {state : {id:id, pw:pw}});
        }
    }

    return (
        <BodyDiv>
            <BodyDiv>
            <form onSubmit={handleOnSubmit}>
                <p>
                    ID : <input type="text" name="" id="" />
                </p>
                <p>
                    PW : <input type="password" name="" id="" />    
                </p>
                <p>
                    PW 확인 : <input type="password" name="" id="" />    
                </p>
                <button type="submit">회원등록</button>
            </form>
        </BodyDiv>
        </BodyDiv>
    )
}
export default Body;