import { Github } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-1 flex-row mt-16 bg-gray-400 bg-opacity-5 rounded-tl-xl rounded-tr-xl m-0 p-10">
        <div className="flex flex-1 flex-row">
            <span className="text-amber-400 mr-2">Desarrollado por:</span>
            <span>Adrian Daniel Gutierrez Martinez</span>
        </div>
        <div className="flex flex-row">
            <Github className="mx-3"/>
            <NavLink to={""} className='hover:text-amber-300' >
                Ver proyecto en Github
            </NavLink>
        </div>
    </footer>
  )
}

export default Footer;