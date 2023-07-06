import { Navbar } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
function Header() {
    
    const navigate = useNavigate();
    const handleOnClick = (e) => {
        const order = e.target.innerText;
        // refresh
        if (order === 'kurooru\'s blog'){
            navigate('/');
        }
        // login
        else if (order === 'logIn'){
            navigate('/login');
        }
        // logout
        else {
            const reLogin = window.confirm('로그아웃후 재로그인 하시겠습니까?');
            if (reLogin){
                navigate(`/login`);
            }
        }
    }

    const location = useLocation();
    const checkLogin = () => {
        // 로그인 후 접근이면,
        try {
            const user_id = location.state.id;
            const target = document.getElementById('login');
            target.innerText = `${user_id}님`;
        }
        // 그냥 접근이면,
        catch(e){
            
        }
    }
    useEffect(() => {
        checkLogin();
    }, [])

    return (
        <Navbar>
            <p onClick={handleOnClick}>kurooru's blog</p>
            <p onClick={handleOnClick} id="login">logIn</p>
        </Navbar>
    )
}

export default Header;