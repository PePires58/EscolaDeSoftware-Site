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
  arquivoBuffer: ArrayBuffer;
  nomeArquivo: string;

  constructor(formBuilder: FormBuilder, private enviarEmailService: EnviarEmailService) {
    this.arquivoBuffer = new ArrayBuffer(0);
    this.nomeArquivo = '';
    this.infoTreinamentoCorporativo = new InfoTreinamentoCorporativo();
    this.formTreinamento = formBuilder.group({
      'emailTelefone': new FormControl('', Validators.required),
      'descricao': new FormControl('', [Validators.required, Validators.maxLength(1000)])
    });
  }

  onEnviarDados() {
    if (this.formTreinamento.valid) {
      this.enviarEmailService.Post(this.infoTreinamentoCorporativo)
    }
    else
      this.formTreinamento.markAllAsTouched();
  }

  onAdicionarAnexo() {
    const txtAnexo: any = document.querySelector('#txtAnexo');

    if (typeof (FileReader) !== 'undefined') {
      const leitorArquivo = new FileReader();

      leitorArquivo.onload = (e: any) => {
        this.arquivoBuffer = e.target.result;
      };

      this.nomeArquivo = txtAnexo.files[0].name;
      leitorArquivo.readAsArrayBuffer(txtAnexo.files[0]);
    }
  }

}
