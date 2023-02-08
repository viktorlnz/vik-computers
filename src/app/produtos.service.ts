import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;
  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(id: number){
    return this.produtos.find(p => p.id == id);
  }
}
