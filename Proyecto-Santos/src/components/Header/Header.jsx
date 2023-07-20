import './Header.scss'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>
                <nav className="navbar">
                    <Link className="navbar__link" to="/">Inicio</Link>
                    <Link className='navbar__link' to="/productos/interior">Plantas de interior</Link>
                    <Link className='navbar__link' to="/productos/exterior">Plantas de exterior</Link>
                    <Link className='navbar__link' to="/productos/decoracion">Decoración</Link>
                    <Link className="navbar__link" to="/sobrenosotros">Sobre nosotros</Link>
                    <Link className="navbar__link" to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
} 
