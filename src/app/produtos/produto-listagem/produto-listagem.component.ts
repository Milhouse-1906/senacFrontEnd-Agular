import { Produto } from 'src/app/shared/model/produto';
import { ProdutosService } from './../../shared/service/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit {
  public produtos : Array<Produto> = new Array();

  constructor(private produtosService: ProdutosService){
  }

  ngOnInit(): void{
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtosService.listarTodos().subscribe(
    resultado =>{
      this.produtos = resultado;
    },
    error =>{
      console.log('Erro ao buscar produtos', error);
      }
    );
  }

  editar(id: number){
    //TODO
  }
}
