import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage";
import EditPostPage from "./pages/EditPostPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";

const App = () => {
  const [state, setState] = useState({
    loggedIn: false
  })

  const authCheck = (boolean) => {
    setState({
      loggedIn: boolean
    })
  }

  return (
    <div>
      <Header loggedIn={state.loggedIn} authCheck={authCheck}/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<LogInPage authCheck={authCheck}/>}/>
          <Route path="/signup" element={<SignUpPage authCheck={authCheck}/>}/>
          <Route path="/cities/:city" element={<CityPage loggedIn={state.loggedIn}/>}/>
          <Route path="/cities/:city/:id" element={<PostPage loggedIn={state.loggedIn}/>}/>
          <Route path="/cities/:city/new" element={<NewPostPage loggedIn={state.loggedIn}/>}/>
          <Route path="/cities/:city/:id/edit" element={<EditPostPage loggedIn={state.loggedIn}/>}/>
        </Routes>   
      </div>
    </div>
  );
}

export default App;
