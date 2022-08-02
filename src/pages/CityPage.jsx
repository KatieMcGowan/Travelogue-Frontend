import { useParams } from "react-router-dom";
import CitiesContainer from "../components/CitiesContainer"
import PostsContainer from "../components/PostsContainer"
import sanfrancisco from "../images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg"

const CityPage = () => {
  let city = useParams().city

  const capitalizeCity = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const handleHyphens = (string) => {
    let unHyphenated = string.replace("-", " ");
    let split = unHyphenated.split(" ")
    let upperCase = split.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    return upperCase.join(" ");
  };

  const cityConvert = (string) => {
    if (string.includes("-")) {
      return handleHyphens(string)
    } else {
      return capitalizeCity(string)
    }
  }

  return(
    <div className="city-content">
      <CitiesContainer />
      <div className="city-container">
          <div className="city-info">
            <div className="city-text">
              <h2>{cityConvert(city)}</h2>
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
