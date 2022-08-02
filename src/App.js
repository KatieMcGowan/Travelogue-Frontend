import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage";
import EditPostPage from "./pages/EditPostPage";

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/cities/:city" element={<CityPage />}/>
          <Route path="/cities/:city/:id" element={<PostPage />}/>
          <Route path="/cities/:city/new" element={<NewPostPage />}/>
          <Route path="/cities/:city/:id/edit" element={<EditPostPage />}/>
        </Routes>  
      </div>
    </div>
  );
}

export default App;
