import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {}

  ngOnChanges(): void {
    // this.tentativas
    // this.coracoes.length
    // tslint:disable-next-line: triple-equals
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;

      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit() {}
}
