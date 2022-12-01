import { EnviarEmailService } from 'src/app/services/enviar-email.service';
import { InfoTreinamentoCorporativo } from 'src/app/models/info-treinamento-corporativo';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-treinamentocorporativo',
  templateUrl: './treinamentocorporativo.component.html',
  styleUrls: ['./treinamentocorporativo.component.scss']
})
export class TreinamentocorporativoComponent {

  infoTreinamentoCorporativo: InfoTreinamentoCorporativo;
  formTreinamento: FormGroup;

  constructor(formBuilder: FormBuilder, private enviarEmailService: EnviarEmailService) {
    this.infoTreinamentoCorporativo = new InfoTreinamentoCorporativo();
    this.formTreinamento = formBuilder.group({
      'Email': new FormControl(this.infoTreinamentoCorporativo.Email, Validators.required),
      'Mensagem': new FormControl(this.infoTreinamentoCorporativo.Mensagem, [Validators.required, Validators.maxLength(1000)])
    });
  }

  onEnviarDados() {
    if (this.formTreinamento.valid) {
      this.enviarEmailService.Post(this.infoTreinamentoCorporativo)
        .subscribe({
          next: this.onEnviarDados.bind(this),
          error: this.onEnviarDadosErro.bind(this)
        });
    }
    else
      this.formTreinamento.markAllAsTouched();
  }

  onEnviarDadosOk() {
    alert('E-mail enviado com sucesso');
    this.formTreinamento.reset();
  }

  onEnviarDadosErro(error: any) {
    alert('Ocorreu um erro ao enviar seu e-mail');
    console.log(error);
  }
}
