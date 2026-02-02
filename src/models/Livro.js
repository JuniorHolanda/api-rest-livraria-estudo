import mongoose from 'mongoose';
const livroSchema = new mongoose.Schema(
  {
    autor: { type: String, required: true },
    livro: { type: String, required: true },
    paginas: { type: Number },
    preco: { type: Number, required: true },
  },
  { collection: 'livrariaTeste' },
);

const Livro = mongoose.model('Livro', livroSchema);

export default Livro;
