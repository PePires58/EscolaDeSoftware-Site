import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EnviarEmailService } from './enviar-email.service';
import { SpinnerService } from './spinner.service';

@NgModule({
  imports: [CommonModule],
  providers: [EnviarEmailService, SpinnerService]
})
export class ServiceModule { }
