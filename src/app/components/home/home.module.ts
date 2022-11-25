import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LancamentoComponent } from './lancamento/lancamento.component';
import { TreinamentocorporativoComponent } from './treinamentocorporativo/treinamentocorporativo.component';
import { EvidenciasComponent } from './evidencias/evidencias.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ServiceModule } from 'src/app/services/service.module';

@NgModule({
  declarations: [
    HomeComponent,
    SobrenosComponent,
    CursosComponent,
    LancamentoComponent,
    TreinamentocorporativoComponent,
    EvidenciasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ]
})
export class HomeModule { }
