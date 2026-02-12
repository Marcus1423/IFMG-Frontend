import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div>
                <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Home</NavLink>
                <NavLink to="/completed">Conpleted</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
            </div>
        </nav>
    )
}

export default Header;