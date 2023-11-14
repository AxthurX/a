import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

//export interface RespostaUsuarios extends RespostaAPIModel<ValueBaseModel[]> {}
//export interface RespostaDetalhesOperacao extends RespostaAPIModel<DetalhesVendas> {}
export interface DetalhesVendas {
  itens: DetalhesVendasItem[];
  destinatario: string;
  identificacao: string;
  forma_pagamento: string;
  tipo_operacao: string;
  vendedor: string;
  data: string;
  desconto_real: number;
  liquido: number;
}
export interface DetalhesVendasItem {
  id: number;
  quantidade: number;
  liquido: number;
  descricao: string;
}
@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  getUsuarios(): Observable<any> {
    // return this.http.get<RespostaUsuarios>(
    //   `${this.auth.getUrlAPI()}/consultas/usuarios?id_empresa=${this.auth.getEmpresaLogada().id_empresa}`
    // );
    return
  }
  getDetalhesVenda(id: number): Observable<any> {
    // return this.http.get<RespostaDetalhesOperacao>(
    //   `${this.auth.getUrlAPI()}/consultas/operacao_saida/detalhes?id=${id}`
    // );
    return
  }

  getDetalhesOS(id: number): Observable<any> {
    // return this.http.get<RespostaDetalhesOperacao>(
    //   `${this.auth.getUrlAPI()}/consultas/ordem_servico/detalhes?id=${id}`
    // );
    return
  }
}
