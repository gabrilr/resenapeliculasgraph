import mongoose from 'mongoose';

const bibliotecaSchema = new mongoose.Schema({

    //nada



}, {
    timestamps: true, // Agregamos campos de auditoria
});

export default mongoose.model('Project', bibliotecaSchema);