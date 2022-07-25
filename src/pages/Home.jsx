import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="home-wrapper">
      <h1>Welcome to Travelogue's Homepage</h1>
      <Link to={"/cities/san-francisco"}>Click here to view San Francisco</Link>
    </div>
  )  
}

export default Home