// Pelicula.js
import mongoose from 'mongoose';

const peliculaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  genero: String,
  director: String,
  meGusta: {
    type: Number,
    default: 0,
  },
  noMeGusta: {
    type: Number,
    default: 0,
  },
  compartido: {
    type: Number,
    default: 0,
  },
  destacado: {
    type: Boolean,
    default: false,
  },
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

export default Pelicula;