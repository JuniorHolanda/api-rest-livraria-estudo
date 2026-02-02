import Livro from "../models/Livro.js";

export default class LivroController {
    static async listarlivro(req, res) {
        const listaLivros = Livro.find({});
        res.status(200).json(listaLivros);
    }
}