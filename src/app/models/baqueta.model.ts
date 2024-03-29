import { Categoria } from "./categoria.model";
import { Marca } from "./marca.model";

export class Baqueta {
    id!: number;
    nomeBaqueta!: string;
    tamanho!: string;
    tipoMadeira!: string;
    quantidadeEstoque!: number;
    marca!: Marca;
    categoria!: Categoria;
    fotoProduto!: string;
}