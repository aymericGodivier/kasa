import { NavLink } from 'react-router-dom';
export default function Header(){
    return(
        <header>
            <img src="../../src/assets/LOGO_KASA.svg" alt="Logo"></img>
            <nav>
                <li>
                    <NavLink to="/" className="nav-link" activeclassname="active">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link" activeclassname="active">
                        A propos
                    </NavLink>
                </li>
            </nav>
        </header>
    )
}

