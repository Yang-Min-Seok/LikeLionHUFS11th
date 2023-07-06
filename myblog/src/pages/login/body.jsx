import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";
function Body() {
    
    const naviagate = useNavigate();
    const handleOnClick = () => {
        naviagate(`/signup`);
    }
    const handleOnSubmit = (e) => {
        const id = e.target[0].value;
        const pw = e.target[1].value;
        naviagate('/', {state: {id:id, pw:pw}});
        alert(`${id}님 환영합니다.`);
    }
    return (
        <BodyDiv>
            <form onSubmit={handleOnSubmit}>
                <p>
                    ID : <input type="text" name="" id="" />
                </p>
                <p>
                    PW : <input type="password" name="" id="" />    
                </p>
                <button type="submit">로그인</button>
                <p onClick={handleOnClick}>회원가입</p>
            </form>
        </BodyDiv>
    )
}
export default Body;