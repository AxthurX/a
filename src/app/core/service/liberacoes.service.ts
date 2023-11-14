import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

//export interface RespostaUsuarios extends RespostaAPIModel<ValueBaseModel[]> {}
//export interface RespostaConsulta extends RespostaAPIModel<LiberacoesItem[]> {}
export interface LiberacoesItem {
  exibir_detalhes: boolean;
  id: number;
  status: number;
  id_parametro: number;
  id_operacoes_saida?: number;
  id_operacoes_entrada?: number;
  id_negociacao_dividas?: number;
  id_ordem_servico?: number;
  itens: LiberacoesItem[];
  descricao_agrupamento: string;
  status_descricao: string;
  descricao_solicitacao: string;
  usuario_solicitou: string;
  usuario_liberou: string;
  data_solicitacao: string;
  data_processamento: string;
  observacao: string;
  selecionada: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LiberacoesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getLiberacoes(body: any): Observable<any> {
    // return this.http.post<RespostaConsulta>(`${this.auth.getUrlAPI()}/liberacoes/consultar`, {
    //   ...body,
    //   id_empresa: this.auth.getEmpresaLogada().id_empresa,
    // });
    return;
  }

  processarLiberacoes(body: any): Observable<any> {
    // return this.http.post<RespostaAPIGenerico>(`${this.auth.getUrlAPI()}/liberacoes/processar`, {
    //   ...body,
    //   id_empresa: this.auth.getEmpresaLogada().id_empresa,
    //   id_usuario: this.auth.getEmpresaLogada().id_usuario,
    // });
    return;
  }
}
