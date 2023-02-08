import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { IProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();

    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get('descricao')?.toLowerCase();

      if(descricao){
        this.produtos = produtos.filter(p => p.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    })
  }
}
