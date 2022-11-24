import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'description',
        content: 'Somos uma escola de software especializada em treinamentos para certificações AWS e desenvolvimento BACK-END com C# e node.JS. Atuando tanto para treinamentos corporativos quanto para treinamentos para pessoas física'
      },
      {
        name: 'keywords',
        content: 'Treinamento AWS, Treinamento corporativo, Back-end, AWS'
      },
      {
        name: 'date',
        content: '2022-11-24',
        scheme: 'YYYY-MM-DD'
      }
    ])

    this.titleService.setTitle('Escola De Software - Página Inicial');
  }
}
