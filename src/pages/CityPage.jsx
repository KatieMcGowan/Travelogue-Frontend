import { useParams } from "react-router-dom";
import CitiesContainer from "../components/CitiesContainer"
import PostsContainer from "../components/PostsContainer"
import sanfrancisco from "../images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg"

const CityPage = () => {
  let city = useParams().city

  const capitalizeCity = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return(
    <div className="city-content">
      <CitiesContainer />
      <div className="city-container">
          <div className="city-info">
            <div className="city-text">
              <h2>{capitalizeCity(city)}</h2>
            </div>
            <div className="city-image">
              <img src={sanfrancisco} height="100" width="200" alt="cable-car"/>
            </div>  
        </div>  
        <PostsContainer />
      </div>  
    </div>  
  )
}

export default CityPage
