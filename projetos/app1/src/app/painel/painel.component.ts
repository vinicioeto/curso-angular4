import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;

  public instrucao: string = 'Traduza a frase:';
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  public verifcarResposta(): void {
    if (this.rodadaFrase.frasPtBr === this.resposta) {
      alert('A tradução está correta');

      // trocar pergunta da rodada
      this.rodada++;

      // atualiza barra de progresso
      this.progresso += 100 / this.frases.length;

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();
    } else {
      alert('A tradução está incoreta');
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  private atualizaRodada() {
    // define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];

    // limpa a resposta
    this.resposta = '';
  }
}
