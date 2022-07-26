import { useParams, Link } from "react-router-dom"
import sanfrancisco from "../images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg"
import london from "../images/luke-stackpoole-mOEqOtmuPG8-unsplash.jpg"
import gibraltar from "../images/michal-mrozek-Fz3vBE8XoHc-unsplash.jpg"

const CitiesContainer = () => {
  return (
    <div className="cities-container">
      <h2>Cities</h2>
      <div className="cities-nav">
        <div className="city-nav">
          <img src={sanfrancisco} className="nav-image" height="50" width="50" alt="cable-car"/>
          <h3 className="locations"><Link to={`/cities/san-francisco`}>San Francisco</Link></h3>
        </div>
        <div className="city-nav">
          <img src={london} className="nav-image" height="50" width="50" alt="big-ben"/>
          <h3 className="locations"><Link to={`/cities/london`}>London</Link></h3>
        </div>
        <div className="city-nav">
          <img src={gibraltar} className="nav-image" height="50" width="50" alt="rock"/>
          <h3 className="locations"><Link to={`/cities/gibraltar`}>Gibraltar</Link></h3>
        </div>
      </div>
    </div>  
  )
}

export default CitiesContainer