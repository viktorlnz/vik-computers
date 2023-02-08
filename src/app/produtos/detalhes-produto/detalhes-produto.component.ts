import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void {
    const routeParams = this.route.snapshot.paramMap;

    const id = routeParams.get('id');

    this.produto = this.produtosService.getOne(Number(id));
  }

  adicionarAoCarrinho(){

    const produtoCarrinho: IProdutoCarrinho = {
      ...this.produto!,
      quantidadeCompra: this.quantidade
    }

    this.carrinhoService.adicionarItem(produtoCarrinho);

    this.notificacaoService.notificar('O produto foi adicionado ao carrinho');
  }
}
