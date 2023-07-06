import { Navbar } from "./style";
import { useNavigate } from "react-router-dom";
function Header() {
    
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        const order = e.target.innerText;

        if (order === 'kurooru\'s blog'){
            navigate('/');
        }
        else if (order === 'logIn'){
            navigate('/login');
        }
        
    }

    return (
        <Navbar>
            <p onClick={handleOnClick}>kurooru's blog</p>
            <p onClick={handleOnClick}>logIn</p>
        </Navbar>
    )
}

export default Header;