import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private navegacao: NavController) {}

  public caixaTexto: String='';
  public resultado: String='';
  public titulo: String = 'Meu Primeiro App';
  public imagemWeb: String = 'https://pbs.twimg.com/media/Fqhyh59XsAMEXlK?format=jpg&name=large'
  public imagemLocal: String = '../assets/icon/favicon.png';

  public mudaTitulo(): void{
    this.titulo = 'Clicado!';
  }
  public atualizaTitulo(): void{
    this.titulo = 'Digitado!'
  }
  trocarPagina(){
    this.navegacao.navigateForward('botoes');
  }
  recuperar(){
    this.resultado = this.caixaTexto;
  }
  ngOnInit() {
  }
}
