import { Apartamento } from './apartamento';

export class Persona {
    public tipo_documento: string;
    public numero_documento: string;

    public primer_apellido: string;
    public segundo_apellido: string;

    public primer_nombre: string;
    public segundo_nombre: string;

    public apartamento: Apartamento;

    public constructor() {
        this.tipo_documento = 'CC';
        this.numero_documento = '';
        this.primer_nombre = '';
        this.segundo_nombre = '';
        this.primer_apellido = '';
        this.segundo_apellido = '';
    }
}
