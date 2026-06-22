import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1 className="header-titulo">Mi Página Personal</h1>
      <nav className="header-nav">
        <a href="#perfil">Perfil</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Header
