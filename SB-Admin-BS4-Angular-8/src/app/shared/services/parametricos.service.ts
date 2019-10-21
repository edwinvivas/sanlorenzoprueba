import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface TiposDocumento {
    abbr: string;
    detalle: string;
}

interface TiposSangre {
    prefi: string;
}

interface Genero {
    prefix: string;
}
interface ClasificacionGenero {
    id: Number;
    prefix: string;
    name: string;
}

interface BaseClasificacionGeneroResponse {
    count: Number;
    next?: string;
    previous?: string;
    results: Array<ClasificacionGenero>;
}
interface TiposDocumento {
    id: Number;
    prefix: string;
    name: string;
}

 interface BaseTipoDocumentoResponse {
    count: Number;
    next?: string;
    previous?: string;
    results: Array<TiposDocumento>;
}

interface TiposSangre {
    id: Number;
    name: string;
}

interface BaseTiposSangreResponse {
    count: Number;
    next?: string;
    previous?: string;
    results: Array<TiposSangre>;
}
@Injectable({
    providedIn: 'root'
})
export class ParametricosService {
    private basePathParameticos = 'http://127.0.0.1:8000/parametricos';
    constructor(private httpClient: HttpClient) {}

    public saludar() {
        console.log('hola');
    }

    public getTiposDocumento() {
        return this.httpClient.get<BaseTipoDocumentoResponse>(`${this.basePathParameticos}/tipoDocumento`);
    }

    public getTiposSangre() {
        return this.httpClient.get<BaseTiposSangreResponse>(`${this.basePathParameticos}/rh`);
    }



    public getClasificacionGenero() {
        return this.httpClient.get<BaseClasificacionGeneroResponse>(`${this.basePathParameticos}/genero`);
    }
}
