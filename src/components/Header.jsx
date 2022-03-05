import { Link } from "react-router-dom";     
 
function Header() {
  return (
    <nav className="Navbar">
        <Link to="/"> Home </Link>           
    </nav>
  );
}
 
export default Header;