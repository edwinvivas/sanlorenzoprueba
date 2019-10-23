import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* interface Municipios {
  codigo: string;
  detalle: string;
} */


interface Municipios {
  codigo: Number;
  nombre: string;
  departamento: Number;
}

interface BaseMunicipiosResponse {
  count: Number;
  next?: string;
  previous?: string;
  results: Array<Municipios>;
}

@Injectable({
  providedIn: 'root'
})


export class MunicipiosService {
  private basePathParameticos = 'http://127.0.0.1:8000/parametricos';
  constructor(private httpClient: HttpClient) { }

  public saludar() {
    console.log('hola');
}

public getMunicipios() {
  return this.httpClient.get<BaseMunicipiosResponse>(`${this.basePathParameticos}/municipio`);
}


}
