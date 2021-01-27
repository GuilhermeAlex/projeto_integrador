import { Cliente } from './Cliente';

export class Carrinho{
  public id_carrinho: number;
  public valor_total: number;
  public quantidade: number;
  public cliente: Cliente;
}
