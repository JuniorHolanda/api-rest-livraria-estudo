import { Router } from 'express';
import LivroController from '../controller/livroController.js';

const routes = Router();

routes.get('/livros', LivroController.listarLivros);

export default routes;
