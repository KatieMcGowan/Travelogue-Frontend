import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import PostPage from "./pages/PostPage";
import NewPost from "./pages/NewPostPage";

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/cities/san-francisco" element={<CityPage />}/>
          <Route path="/cities/san-francisco/:id" element={<PostPage />}/>
          <Route path="/cities/san-francisco/new" element={<NewPost />}/>
        </Routes>  
      </div>
    </div>
  );
}

export default App;
