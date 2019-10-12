import { Injectable } from '@angular/core';

interface TiposDocumento {
    abbr: string;
    detalle: string;
}

interface Rh {
    prefi: string;
}

interface Genero {
    prefi: string;
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

    public getrh() {
        const rh: Array<Rh> = new Array<Rh>();

        rh.push({ prefi: 'O-' });
        rh.push({ prefi: 'O+' });
        rh.push({ prefi: 'A-' });
        rh.push({ prefi: 'A+' });
        rh.push({ prefi: 'B-' });
        rh.push({ prefi: 'B+' });
        rh.push({ prefi: 'AB-' });
        rh.push({ prefi: 'AB+' });

        return rh;
    }

    public getgenero() {
        const genero: Array<Genero> = new Array<Genero>();

        genero.push({ prefi: 'M' });
        genero.push({ prefi: 'F' });

        return genero;
    }
}
