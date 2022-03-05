import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png"
import newbeer from "../assets/new-beer.png"

function HomePage() {
    return(
        <div>
            <Link to="/beers"> 
                <h1>All Beers </h1>
                <img src={beers} alt="beers" />
                </Link>           
            <Link to="/random-beer"> 
                <h1>Random Beer </h1>
                <img src={randomBeer} alt="random beer" />
                </Link>     
            <Link to="/new-beer"> 
                <h1>New Beer</h1> 
                <img src ={newbeer} alt="new beer" />
                </Link>  
        </div>

    )
}

export default HomePage;