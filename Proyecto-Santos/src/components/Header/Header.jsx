import './Header.css'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>
                <nav className="navbar">
                    <a className="navbar__link" href="#">Inicio</a>
                    <a className="navbar__link" href="#">Sobre Nosotros</a>
                    <a className="navbar__link" href="#">Contacto</a>
                </nav>
            </div>
        </header>
    )
}
