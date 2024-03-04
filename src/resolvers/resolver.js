
import {
    getPeliculas,
    getPeliculaById,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula,
    incrementarMeGusta,
    decrementarNoMeGusta,
    incrementarCompartido,
    marcarDestacado,
  } from '../controller/pelicula.controller';
  
  const resolvers = {
    Query: {
      peliculas: () => getPeliculas(),
      pelicula: (_, { id }) => getPeliculaById(id),
    },
    Mutation: {
      crearPelicula: (_, { pelicula }) => crearPelicula(pelicula),
      actualizarPelicula: (_, { id, pelicula }) =>
        actualizarPelicula(id, pelicula),
      eliminarPelicula: (_, { id }) => eliminarPelicula(id),
      incrementarMeGusta: (_, { id }) => incrementarMeGusta(id),
      decrementarNoMeGusta: (_, { id }) => decrementarNoMeGusta(id),
      incrementarCompartido: (_, { id }) => incrementarCompartido(id),
      marcarDestacado: (_, { id, destacado }) =>
        marcarDestacado(id, destacado),
    },
  };
  
  export default resolvers;