import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(
    public carrinhoService: CarrinhoService,
    public router: Router
  ){}

  ngOnInit():void{
    this.itensCarrinho = this.carrinhoService.getCarrinho();
  };

  removeProdutoCarrinho(id:number){
    this.itensCarrinho = this.carrinhoService.removerItem(id);
  }

  calcularTotal():number{
    return this.itensCarrinho.reduce((a, b) => a + b.preco * b.quantidadeCompra, 0 );
  }

  comprar(){
    alert('Parabéns, você concluiu a sua compra!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/produtos']);
  }
}
