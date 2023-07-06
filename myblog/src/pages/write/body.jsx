import { BodyDiv } from "./style";

function Body() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const content = e.target[1].value;

        console.log(title);
        console.log(content);
    }
    return (
        <BodyDiv>
            <form onSubmit={handleOnSubmit}>
                <p>Title <input type="text" name="" id="" /></p>
                <p>Content</p>
                <p><textarea></textarea></p>
                <button type="submit">등록하기</button>
            </form>
        </BodyDiv>
    )
}
export default Body;