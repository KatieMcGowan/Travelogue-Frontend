import Nav from "./Nav"

const Header = (props) => {
  return(
    <div className="header-wrapper">
      <div className="header-left">
        <div className="dummy-logo"></div>
        <h1 className="header-text">Travelogue</h1>
      </div>
      <div className="header-right">
        <Nav loggedIn={props.loggedIn}/>
      </div>  
    </div>
  )  
}

export default Header