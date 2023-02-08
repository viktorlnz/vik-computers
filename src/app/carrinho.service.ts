import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() {
    this.itens = this.getCarrinho();
   }

  getCarrinho(): IProdutoCarrinho[]{
    return JSON.parse(localStorage.getItem('carrinho') || "[]");
  }

  adicionarItem(item: IProdutoCarrinho){
    this.itens.push(item);

    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerItem(id:number){
    this.itens = this.itens.filter(i => i.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));

    return this.itens;
  }

  limparCarrinho():void{
    this.itens = [];
    
    localStorage.removeItem('carrinho');
  }


}
