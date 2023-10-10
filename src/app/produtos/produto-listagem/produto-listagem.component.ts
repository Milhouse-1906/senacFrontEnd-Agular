import { ProdutosService } from './../../shared/service/produtos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit {
  public produtos : Array<Produto> = new Array();

  constructor(private produtosService: ProdutosService){
  }
  gnOnInit(): void{
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
}
