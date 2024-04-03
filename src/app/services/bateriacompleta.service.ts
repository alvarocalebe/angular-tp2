import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BateriaCompleta } from '../models/bateriacompleta.model';


@Injectable({
  providedIn: 'root'
})
export class BateriaCompletaService {
  private baseUrl = 'http://localhost:8080/bateriacompleta';

  constructor(private httpClient: HttpClient) {  }

  findAll(): Observable<BateriaCompleta[]> {
    return this.httpClient.get<BateriaCompleta[]>(this.baseUrl);
  }

  findById(id: string): Observable<BateriaCompleta> {
    return this.httpClient.get<BateriaCompleta>(`${this.baseUrl}/${id}`);
  }


  insert(bateriaCompleta: BateriaCompleta): Observable<BateriaCompleta> {
    const data = {
      nomeBateria: bateriaCompleta.nomeBateria,
      quantidadeTambor: bateriaCompleta.quantidadeTambor,
      descricao: bateriaCompleta.descricao,
      preco: bateriaCompleta.preco,
      quantidadeEstoque: bateriaCompleta.quantidadeEstoque,
      nomeImagem: bateriaCompleta.nomeImagem,
      IdCategoria: bateriaCompleta.categoria.id,
      IdMarca: bateriaCompleta.marca.id
      
    }
    return this.httpClient.post<BateriaCompleta>(this.baseUrl, data);
  }

  update(bateriaCompleta: BateriaCompleta): Observable<BateriaCompleta> {
    const data = {
        nomeBateria: bateriaCompleta.nomeBateria,
        quantidadeTambor: bateriaCompleta.quantidadeTambor,
        descricao: bateriaCompleta.descricao,
        preco: bateriaCompleta.preco,
        quantidadeEstoque: bateriaCompleta.quantidadeEstoque,
        nomeImagem: bateriaCompleta.nomeImagem,
        IdMarca: bateriaCompleta.marca.id,
        IdCategoria: bateriaCompleta.categoria.id
    }
    return this.httpClient.put<BateriaCompleta>(`${this.baseUrl}/${bateriaCompleta.id}`, data);
  }

  delete(bateriaCompleta: BateriaCompleta): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${bateriaCompleta.id}`);
  }

}