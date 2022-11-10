import { Component, OnInit } from '@angular/core';
import { InfoItemCurso } from 'src/app/models/info-item-curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  itensCurso: InfoItemCurso[];

  constructor() {
    this.itensCurso = [{
      titulo: 'CLOUD PRACTITIONER',
      categoria: 'AWS',
      descricaoItem: 'Tudo o que você precisa saber para se preparar para a certificação de entrada da AWS',
      urlCurso: 'https://www.youtube.com/playlist?list=PLnvCdeUQQSUHZ4PwZ1MsXWkPfxQA4NTP1',
      urlImagem: 'cloud-practitioner.webp',
      altImagem: 'AWS Cloud Practitioner'
    },
    {
      titulo: 'DEVELOPER ASSOCIATE',
      categoria: 'AWS',
      descricaoItem: 'Aulas teóricas focadas na certificação da AWS Developer Associate',
      urlCurso: 'https://www.youtube.com/playlist?list=PLnvCdeUQQSUHNz2HGoAyj0FUCpmRnrpXX',
      urlImagem: 'cloud-developer.webp',
      altImagem: 'AWS Developer Associate'
    },
    {
      titulo: 'HTML 5',
      categoria: 'Front-end',
      descricaoItem: 'Introdução ao HTML e suas principais tags utilizadas no mercado de trabalho',
      urlCurso: 'https://www.youtube.com/playlist?list=PLnvCdeUQQSUElwCuOTKJS8KpFhlRYSSgG',
      urlImagem: 'html5.webp',
      altImagem: 'HTML 5'
    }]
  }

  ngOnInit(): void {
  }

}
