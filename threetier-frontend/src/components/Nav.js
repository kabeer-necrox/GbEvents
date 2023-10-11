import react from "react";
import { Link } from "react-router-dom";


const Nav=()=>{
return(
       <div className="Navebar">
        <ul className="nav-ul">
            <li><Link to="/">home</Link></li>  
            <li><Link to="/add">About Us </Link></li>  
            <li><Link to="/update">Services</Link></li>  
            <li><Link to="/logout">Events</Link></li>  
            <li><Link to="/Contactus">Contact us</Link></li> 
            <li><Link to="/SignUp">Sign Up</Link></li> 
            <li><Link to="/team">DarkVariantExample</Link></li> 
        </ul>
      </div>
   )
}

export default Nav;