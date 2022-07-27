import CitiesContainer from "../components/CitiesContainer"
import PostsContainer from "../components/PostsContainer"

const CityPage = () => {
  return(
    <div className="city-content">
      <CitiesContainer />
      <div className="city-container">
        <h2>San Francisco</h2>
        <h3>United States of America</h3>
        <PostsContainer />
      </div>  
    </div>  
  )
}

export default CityPage
