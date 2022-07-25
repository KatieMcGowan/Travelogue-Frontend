import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import CityDisplay from "./pages/CityDisplay";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/cities/san-francisco" element={<CityDisplay />}/>
      </Routes>  
    </div>
  );
}

export default App;
