

import mongoose from 'mongoose';

const dbBibliotecaDig = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bibliotecadigital', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

export default dbBibliotecaDig;