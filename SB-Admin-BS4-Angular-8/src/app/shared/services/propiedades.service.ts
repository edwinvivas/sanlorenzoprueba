import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private basePath = 'http://127.0.0.1:8000/residentes/propiedad';
  constructor(private httpClient: HttpClient) { }


  public getPropiedad(propiedad_id: Number) {
    return this.httpClient.get<any>(`${this.basePath}/${propiedad_id}`);
  }
}
