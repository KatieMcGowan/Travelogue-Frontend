import { Link } from "react-router-dom"
import './Home.css';

const Home = () => {
  return(
    <div className="home-wrapper">
      <div className="home-carousel"></div>
      <div className="home-text-container">
        <h2 className="travelogue-is">Travelogue is...</h2>
        <div className="home-paragraph-container">
          <p className="home-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="home-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="home-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="cities-content">
        <h2 className="cities">Cities</h2>
        <div className="cities-link">
          <Link to={"/cities/san-francisco"}>San Francisco</Link>
        </div>
        <div className="cities-link">
          <Link to={"/cities/london"}>London</Link>
        </div>  
        <div className="cities-link">
          <Link to={"/cities/gibraltar"}>Gibraltar</Link>
        </div>    
      </div> 
    </div>
  )  
}

export default Home