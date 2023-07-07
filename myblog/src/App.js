import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./pages/main";
import Article from "./pages/article";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Main />}></Route>
        <Route path={`/article`} element={<Article />}></Route>
        <Route path={`/login`} element={<Login />}></Route>
        <Route path={`/signup`} element={<Signup />}></Route>
      </Routes>
    </Router>
  )
}

export default App;