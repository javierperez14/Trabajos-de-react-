import './Hobbies.css'

function Hobbies() {
  const hobbies = [
    { id: 1, icono: '💻', nombre: 'Programar', descripcion: 'Crear proyectos y aprender nuevas tecnologías' },
    { id: 2, icono: '🎮', nombre: 'Videojuegos', descripcion: 'Jugar en línea con amigos los fines de semana' },
    { id: 3, icono: '📚', nombre: 'Leer', descripcion: 'Libros de tecnología y ciencia ficción' },
    { id: 4, icono: '🎵', nombre: 'Música', descripcion: 'Escuchar y aprender a tocar guitarra' },
    { id: 5, icono: '🚴', nombre: 'Ciclismo', descripcion: 'Salidas en bicicleta los domingos' },
  ]

  return (
    <section className="hobbies" id="hobbies">
      <h2 className="hobbies-titulo">Mis Hobbies</h2>
      <ul className="hobbies-lista">
        {hobbies.map((hobby) => (
          <li key={hobby.id} className="hobby-item">
            <span className="hobby-icono">{hobby.icono}</span>
            <div>
              <strong>{hobby.nombre}</strong>
              <p>{hobby.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hobbies
