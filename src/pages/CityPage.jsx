import CitiesContainer from "../components/CitiesContainer"
import PostsContainer from "../components/PostsContainer"
import sanfrancisco from "../images/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg"

const CityPage = () => {
  return(
    <div className="city-content">
      <CitiesContainer />
      <div className="city-container">
          <div className="city-info">
            <div className="city-text">
              <h2>San Francisco</h2>
              <h3>United States of America</h3>
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
