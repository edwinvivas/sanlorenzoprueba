import { Injectable } from '@angular/core';

interface TiposDocumento {
    abbr: string;
    detalle: string;
}

@Injectable({
    providedIn: 'root'
})
export class ParametricosService {
    constructor() {}

    public saludar() {
        console.log('hola');
    }

    public getTiposDocumento() {
        const tiposDocumentos: Array<TiposDocumento> = new Array<TiposDocumento>();

        tiposDocumentos.push({ abbr: 'CC', detalle: 'Cédula de ciudadania' });
        tiposDocumentos.push({ abbr: 'CE', detalle: 'Cédula de Extranjeria' });
        tiposDocumentos.push({ abbr: 'PA', detalle: 'Pasaporte' });
        tiposDocumentos.push({ abbr: 'PE', detalle: 'Permiso Especial de Permanencia' });

        return tiposDocumentos;

    }


}
