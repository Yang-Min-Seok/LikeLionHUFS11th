import { BodyDiv } from "./style";
import { useState } from "react";

function Body() {

    // 글 쓰기 눌렀을 경우
    const handleOnClick = (e) => {
        const order = e.target.innerText;
        const id = document.getElementById('login').innerText.slice(0, -1);
        if (order === '글쓰기' && id === 'logI'){
            alert('로그인 해 주세요');
        }
        else if (order === '글쓰기'){
            setPopUp((curr) => !curr);
        }
    };
    
    // 글목록 관리
    const [ articleList, setArticleList ] = useState([]);
    const [ popUp, setPopUp ] = useState(false);


    // 등록하기를 눌렀을 경우
    const handleOnSubmit = (e) => {
        e.preventDefault();  

        // title, content
        const title = e.target[0].value;
        const content = e.target[1].value;

        if(title === '') {
            alert('제목을 적어주세요');
            return;
        }

        // newArticleList
        const newArticleList = [...articleList, [title,content]];
        setArticleList(newArticleList);

        // popup 내리기
        setPopUp(false);
    }

    // 채워넣기
    const articleBox = document.getElementById('articleBox');
    if (articleBox) {
        // 초기화
        articleBox.innerHTML = '';

        // 채워넣기
        for (let i=0; i<articleList.length; i++){
            const title = articleList[i][0];
            const content = articleList[i][1];
            const newHTML = `
            <div id="${i}">
                <h3>${title}</h3>
                <p>Content</p>
                <p>${content}</p>
            </div>`
            const exisitingHTML = articleBox.innerHTML; 
            articleBox.innerHTML = `${exisitingHTML}${newHTML}`;
        }
    }

    return (
        <BodyDiv>
            <p onClick={handleOnClick} id="writeBtn">글쓰기</p>
            {popUp && 
                <div id="popUp">
                    <form onSubmit={handleOnSubmit}>
                        <p>Title <input type="text" name="" id="" /></p>
                        <p>Content</p>
                        <textarea name="" id="" cols="50" rows="20"></textarea>
                        <button type="submit">등록하기</button>
                    </form>
                </div>
            }
            <div id="articleBox">
                
            </div>
        </BodyDiv>
    )
}
export default Body;