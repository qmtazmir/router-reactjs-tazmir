import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import FriendsDetails from "./Components/FriendsDetails/FriendsDetails";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Posts from "./Components/Posts/Posts";
import PostsDetail from "./Components/PostsDetail/PostsDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/friend/:friendId" element={<FriendsDetails />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostsDetail />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
