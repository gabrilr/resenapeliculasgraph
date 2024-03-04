
import Pelicula from './models/Pelicula';

export const getPeliculas = () => Pelicula.find();

export const getPeliculaById = (id) => Pelicula.findById(id);

export const crearPelicula = (datosPelicula) => Pelicula.create(datosPelicula);

export const actualizarPelicula = (id, datosActualizados) =>
  Pelicula.findByIdAndUpdate(id, datosActualizados, { new: true });

export const eliminarPelicula = (id) => Pelicula.findByIdAndDelete(id);

export const incrementarMeGusta = (id) =>
  Pelicula.findByIdAndUpdate(id, { $inc: { meGusta: 1 } }, { new: true });

export const decrementarNoMeGusta = (id) =>
  Pelicula.findByIdAndUpdate(id, { $inc: { noMeGusta: -1 } }, { new: true });

export const incrementarCompartido = (id) =>
  Pelicula.findByIdAndUpdate(id, { $inc: { compartido: 1 } }, { new: true });
/*
export const marcarDestacado = (id, destacado) =>
  Pelicula.findByIdAndUpdate(id, { destacado }, { new: true });
*/