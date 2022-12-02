import { Link } from "react-router-dom";

export function NotFound(){
    return(
       <div>
            <h1>Ops, page not found</h1>
            <Link to="/welcome">Go back to the homepage</Link>
       </div>
    )
}