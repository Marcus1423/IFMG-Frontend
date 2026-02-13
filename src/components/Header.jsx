import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div>
                <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Home</NavLink>
                <NavLink to="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Projects</NavLink>
                <NavLink to="/completed" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Conpleted</NavLink>
                <NavLink to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">About</NavLink>
                
            </div>
        </nav>
    )
}

export default Header;