import Typewriter from "typewriter-effect";

function Habilidades() {
  return (
    <Typewriter
      options={{
        strings: [
          "Capacidad organizativa",
          "Trabajo en equipo",
          "Perservancia y empatía",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Habilidades;
