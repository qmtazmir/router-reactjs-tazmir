import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Wellcome to my site</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
