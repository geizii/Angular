import { Component } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent {
  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  constructor() {}

  ngOnInit() {
    
  }
}
