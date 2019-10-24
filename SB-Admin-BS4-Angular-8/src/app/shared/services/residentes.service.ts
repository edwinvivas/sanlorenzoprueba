import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartamento } from 'src/app/shared/Models/apartamento';

interface BaseApartamentosResponse {
  count: Number;
  next?: string;
  previous?: string;
  results: Array<Apartamento>;
}

@Injectable({
  providedIn: 'root'
})
export class ResidentesService {

  private basePathResidentes = 'http://127.0.0.1:8000/residentes';

  constructor(private httpClient: HttpClient) {}


  public getPropiedades() {

      return this.httpClient.get<BaseApartamentosResponse>(`${this.basePathResidentes}/propiedad`);

  }
}
