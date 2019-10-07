import { Time } from '@angular/common';

export class Visitante {
    public tipodocumento: string;
    public numero_documento: string;
    public expedida: string;
    public fechaexpedicion: string;
    public genero: string;
    public rh: string;
    public visitantecel: string;
    public email: string;
    public nacimiento: string;
    public eps: string;
    public emergencia: string;
    public emergenciacel: string;
    public primernombre: string;
    public segundonombre: string;
    public surname: string;
    public segundoapellido: string;
    public empresa: string;
    public arl: string;
    public hora: Time;
    public xphr: string;
    public constructor() {
        this.numero_documento = null;
        this.expedida = null;
        this.fechaexpedicion = null;
        this.genero = null;
        this.rh = null;
        this.visitantecel = null;
        this.email = null;
        this.nacimiento = null;
        this.eps = null;
        this.emergencia = null;
        this.emergenciacel = null;
        this.primernombre = null;
        this.segundonombre = null;
        this.surname = null;
        this.segundoapellido = null;
        this.empresa = null;
        this.arl = null;
    }
}
