import { Component } from '@angular/core';
import { InfoItemEvidencia } from 'src/app/models/info-item-evidencia';

@Component({
  selector: 'app-evidencias',
  templateUrl: './evidencias.component.html',
  styleUrls: ['./evidencias.component.scss']
})
export class EvidenciasComponent {

  itensEvidencia: InfoItemEvidencia[];

  constructor() {
    this.itensEvidencia = [{
      nomePessoa: 'Leandro Roncon',
      descricaoEvidencia: 'Obrigado pelas aulas! Obrigado pela iniciativa de criar esse conteúdo e ajudar as pessoas!',
      linkEvidencia: 'https://www.youtube.com/watch?v=yXWqC9v_XjE'
    },
    {
      nomePessoa: 'Diego Rafael',
      descricaoEvidencia: 'Fiz seu curso e passei no pratictioner hoje, agora vamos pro developer, obrigado mano!',
      linkEvidencia: 'https://www.youtube.com/watch?v=fbMctGFFnAI'
    },
    {
      nomePessoa: 'Matheus Favari',
      descricaoEvidencia: 'Ontem fiz minha prova de certificação da AWS Cloud Practitioner, e justamente este ponto eu estava com dificuldade e graças a você, eu consegui entender e passar na certificação',
      linkEvidencia: 'https://www.youtube.com/watch?v=yXWqC9v_XjE'
    },
    {
      nomePessoa: 'Thais Soares',
      descricaoEvidencia: 'O seu conteúdo está bem legal, parabéns.',
      linkEvidencia: 'https://www.youtube.com/watch?v=tgMnKf96h2k'
    }];
  }
}
