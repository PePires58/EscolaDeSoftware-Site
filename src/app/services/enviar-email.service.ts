import { InfoTreinamentoCorporativo } from './../models/info-treinamento-corporativo';
import { environment } from './../../environments/environment';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  urlPost: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public Post(dados: InfoTreinamentoCorporativo): Observable<HttpResponse<InfoTreinamentoCorporativo>> {
    console.log('dados post');
    console.log(dados);
    return this.httpClient.post<InfoTreinamentoCorporativo>(`${this.urlPost}`, dados, {
      observe: 'response'
    });
  }
}
