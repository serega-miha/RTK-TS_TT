import { Link } from "react-router-dom";
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1>Герои Marvel</h1>
            </Link>
        </div>

    )
}

export default Header;