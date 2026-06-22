import './Perfil.css'
import miFoto from '../assets/yo.jpg' 

function Perfil() {
  const datos = {
    nombre: 'Javier Esteban Perez Aldana ',
    edad: 20,
    carrera: 'Análisis y Desarrollo de Software',
    descripcion: 'Soy estudiante del sena, hice un tecnico laboral de sistemas en un instituto, tambien tengo un certficado de cisco, por el momento me desempeño en estudiar.',
    foto: miFoto,
  }

  return (
    <section className="perfil" id="perfil">
      <img
        className="perfil-foto"
        src={datos.foto}
        alt={`Foto de ${datos.nombre}`}
      />
      <div className="perfil-info">
        <h2 className="perfil-nombre">{datos.nombre}</h2>
        <p><span className="etiqueta">Edad:</span> {datos.edad} años</p>
        <p><span className="etiqueta">Carrera:</span> {datos.carrera}</p>
        <p className="perfil-descripcion">{datos.descripcion}</p>
      </div>
    </section>
  )
}

export default Perfil
