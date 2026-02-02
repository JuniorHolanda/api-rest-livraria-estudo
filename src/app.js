import express from 'express';
import connectDb from './config/db.js';
import Livro from './models/Livro.js';

const connect = await connectDb();

connect.on('error', (erro) => {
  console.error(erro);
});

connect.once('open', () => {
  console.log('conexão com o banco realizada com sucesso');
});

const app = express();
app.use(express.json());

app.get('/livros', async (req, res) => {
  const listaLivros = await Livro.find({});
  res.status(200).json(listaLivros);
});

// app.get('/', (req, res) => {
//   res.status(200).send('esta é a rota raíz.');
// });

// app.get('/livros', (req, res) => {
//   res.status(200).json(livros);
// });

// app.get('/livros/:id', (req, res) => {
//   const index = buscaLivros(req.params.id);
//   res.status(200).json(livros[index]);
// });

// app.put('/livros/:id', (req, res) => {
//   const index = buscaLivros(req.params.id);
//   livros[index] = {
//     id: req.params.id,
//     autor: req.body.autor,
//     livro: req.body.livro,
//     paginas: req.body.paginas,
//   };
//   res.status(201).send('livro alterado com sucesso');
// });

// app.delete('/livros/:id', (req, res) => {
//   const index = buscaLivros(req.params.id);
//   livros.splice(index, 1);

//   res.status(201).send('livro removido com sucesso');
// });

export default app;
