# CLASE 1 — Introducción a React y

# creación del primer proyecto

## Duración estimada: 3 a 4 horas

# Objetivos de la clase

Al finalizar la clase el estudiante podrá:
● Comprender qué es React
● Entender cómo funciona una SPA
● Diferenciar frontend y backend
● Instalar el entorno de desarrollo
● Crear un proyecto React con Vite
● Comprender la estructura del proyecto
● Crear componentes básicos
● Utilizar JSX
● Ejecutar y modificar una aplicación React

# Agenda de la clase

```
Tema Tiempo
Introducción al desarrollo web moderno 20 min
¿Qué es React? 20 min
Conceptos fundamentales 30 min
Instalación del entorno 30 min
Creación del primer proyecto 30 min
Explicación de estructura React 30 min
JSX y componentes 40 min
Taller práctico guiado 40 min
```

```
Actividad individual 20 min
Preguntas y cierre 10 min
```
# 1. Introducción al desarrollo web

# moderno

## Explicación teórica

Antes de React, las páginas web funcionaban principalmente recargando todo el contenido
cada vez que el usuario hacía una acción.
Ejemplo:
● Entrar a Facebook hace muchos años
● Cada clic recargaba toda la página
Hoy las aplicaciones modernas funcionan diferente:
● Solo cambia la parte necesaria
● Todo es más rápido
● Mejor experiencia de usuario

# Arquitectura web

## Frontend

Es lo que ve el usuario.
Ejemplos:
● Botones
● Formularios
● Menús
● Tablas
Tecnologías:
● HTML
● CSS


```
● JavaScript
```
## Backend

Procesa la lógica y datos.
Ejemplos:
● Login
● Base de datos
● APIs
● Seguridad
Tecnologías:
● Node.js
● Java
● C#
● Python

# ¿Qué es una SPA?

SPA = Single Page Application
Una SPA:
● Carga una sola página
● Cambia contenido dinámicamente
● Evita recargas completas
Ejemplos:
● Facebook
● Instagram
● Gmail

# 2. ¿Qué es React?

## Definición


React es una librería de JavaScript creada por Meta para construir interfaces de usuario.

# Características principales

## Basado en componentes

Todo se divide en piezas reutilizables.
Ejemplo:
● Navbar
● Footer
● Card
● Botón

## Virtual DOM

React crea una copia virtual del HTML.
Esto permite:
● Mayor velocidad
● Menos recargas
● Mejor rendimiento

## Reactividad

Cuando cambia un dato:
● La interfaz se actualiza automáticamente

# Empresas que usan React

```
● Netflix
● Airbnb
● Discord
```

```
● Uber
```
# 3. Requisitos e instalación del entorno

# Instalar Node.js

## Explicación

Node.js permite ejecutar JavaScript fuera del navegador.
También instala:
● npm (Node Package Manager)
Descarga:
Node.js Oficial

# Verificar instalación

Abrir terminal:
node -v
npm -v

# Instalar Visual Studio Code

Descarga:
Visual Studio Code

# Extensiones recomendadas

```
● ES7 React Snippets
● Prettier
```

```
● Auto Rename Tag
● Material Icon Theme
```
# 4. Crear el primer proyecto React

# ¿Qué es Vite?

Vite es una herramienta moderna para crear proyectos frontend.
Ventajas:
● Más rápido
● Más liviano
● Mejor experiencia

# Crear proyecto

## Paso 1

Abrir terminal:
npm create vite@latest

## Paso 2

Nombre del proyecto:
mi-primera-app

## Paso 3

Seleccionar:
● Framework → React
● Variant → JavaScript


## Paso 4

Entrar al proyecto:
cd mi-primera-app

## Paso 5

Instalar dependencias:
npm install

## Paso 6

Ejecutar proyecto:
npm run dev

# Resultado esperado

El navegador mostrará:
● Página inicial de React + Vite

# 5. Explicación de la estructura del

# proyecto

# Carpetas importantes

## node_modules

Contiene paquetes instalados.


NO se modifica.

## public

Archivos públicos.
Ejemplo:
● imágenes
● íconos

## src

Aquí vive toda la aplicación.
Es la carpeta más importante.

# Archivos importantes

## main.jsx

Punto de entrada.
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)

## App.jsx

Componente principal.

# 6. Introducción a JSX


# ¿Qué es JSX?

JSX permite escribir HTML dentro de JavaScript.
Ejemplo:
const titulo = <h1>Hola React</h1>

# Reglas JSX

## Un solo elemento padre

Correcto:
return (
<div>
<h1>Título</h1>
<p>Texto</p>
</div>
)

## className

En React no se usa class.
Se usa:
className="contenedor"

## Expresiones JavaScript

const nombre = "Cristian"
<h1>Hola {nombre}</h1>

# 7. Componentes en React


# ¿Qué es un componente?

Un componente es una pieza reutilizable de interfaz.
Ejemplos:
● Botón
● Navbar
● Card
● Footer

# Crear componente

## Saludo.jsx

function Saludo() {
return <h1>Hola estudiantes</h1>
}
export default Saludo

# Usar componente

## App.jsx

import Saludo from './Saludo'
function App() {
return (
<div>
<Saludo />
</div>
)
}
export default App

# 8. Taller guiado (Paso a paso)


# Proyecto: Perfil personal

## Objetivo

Crear una pequeña página de perfil.

# Paso 1 — Limpiar App.jsx

function App() {
return (
<div>
</div>
)
}
export default App

# Paso 2 — Agregar contenido

function App() {
return (
<div>
<h1>Mi Perfil</h1>
<img
src="https://i.pravatar.cc/200"
alt="perfil"
/>
<p>
Hola, estoy aprendiendo React
</p>
<button>
Ver más
</button>
</div>
)
}


export default App

# Paso 3 — Agregar estilos simples

## App.css

body {
font-family: Arial;
background: #f5f5f5;
}
div {
text-align: center;
margin-top: 50px;
}
img {
border-radius: 50%;
}

# Resultado esperado

La página debe mostrar:
● Título
● Imagen
● Texto
● Botón

# 9. Ejercicio individual

# Actividad

Crear una tarjeta personal con:
● Nombre
● Edad


```
● Carrera
● Foto
● Color favorito
● Botón de contacto
```
# Requisitos

```
● Usar JSX
● Crear al menos 1 componente
● Agregar estilos básicos
```
# Ejercicio extra (si sobra tiempo)

Crear:
● 3 tarjetas de estudiantes
● 3 tarjetas de productos

# 10. Preguntas para reforzar

## Conceptuales

1. ¿Qué es React?
2. ¿Qué es una SPA?
3. ¿Qué ventaja tiene el Virtual DOM?
4. ¿Qué es JSX?
5. ¿Qué es un componente?

# 11. Errores comunes

## No cerrar etiquetas

Incorrecto:


<img>
Correcto:
<img />

## Retornar múltiples elementos sin contenedor

Incorrecto:
return (
<h1>Hola</h1>
<p>Mundo</p>
)

# 12. Buenas prácticas iniciales

```
● Nombrar componentes con mayúscula
● Un componente por archivo
● Código ordenado
● Componentes pequeños
● Evitar copiar código
```
# Tarea para la próxima clase

## Proyecto personal

Crear una mini página con:
● Header
● Información personal
● Lista de hobbies
● Imagen
● Footer

# Recursos recomendados


## Documentación oficial

```
● React Docs
● Vite Docs
```
# Resultado esperado al finalizar la clase

El estudiante:
● Instaló React
● Creó un proyecto
● Entendió JSX
● Creó componentes
● Ejecutó una aplicación funcional
● Comprendió la estructura básica de React