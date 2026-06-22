import './Footer.css'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer" id="contacto">
      <p className="footer-texto">
        Hecho con ❤️ usando React + Vite
      </p>
      <p className="footer-contacto">
        📧 juanperez@correo.com &nbsp;|&nbsp; 📱 +57 300 000 0000
      </p>
      <p className="footer-copy">© {anio} Juan Pérez — SENA</p>
    </footer>
  )
}

export default Footer
