import { Marca } from "./marca.model";
import { Categoria } from "./categoria.model";

export class BateriaCompleta {
    id!: number;
    quantTambor!: number;
    nomeBateria!: string;
    descricao!: string;
    preco!: number;
    quantidadeEstoque!: number;
    marca!: Marca;
    categoria!: Categoria;
    fotoProduto!: string;
}