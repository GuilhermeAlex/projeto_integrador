import { Carrinho } from './Carrinho';

export class Cliente{
  public id_cliente: number;
  public nome: string;
  public cpf: string;
  public email: string;
  public senha: string;
  public carrinho: Carrinho;
}
