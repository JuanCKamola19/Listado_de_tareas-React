import React from "react";

export const About = () => {
  return (
    <div className="about">
      <h1 className="aboutt">Sobre nosotros</h1>
      <h3 className="aboutd">
        Esta aplicación fue desarrollada con el propósito de ayudarte a
        gestionar tus tareas de manera eficiente. Algunas de las funcionalidades
        que ofrece son:
        <ul className="aboutlista">
          <li>Crear nuevas tareas</li>
          <li>Editar tareas creadas</li>
          <li>Marcar tareas como completadas</li>
          <li>Eliminar tareas</li>
        </ul>
      </h3>
    </div>
  );
};

export default About;