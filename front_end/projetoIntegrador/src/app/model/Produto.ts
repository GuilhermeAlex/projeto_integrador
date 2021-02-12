import { Carrinho } from './Carrinho';
import { Categoria } from './Categoria';

export class Produto{
  public id_produto: number;
  public estoque: number;
  public nome: string;
  public preco: number;
  public descricao: string;
  public tamanho: string;
  public foto: string;
  public categoria: Categoria;
  public carrinho: Carrinho;
}
