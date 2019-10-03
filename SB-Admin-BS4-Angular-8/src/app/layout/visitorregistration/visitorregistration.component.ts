import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ParametricosService } from 'src/app/shared/services/parametricos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

class DataModel {
    public tipodocumento: string;
    public numero_documento: string;
    public expedida:string;
    public genero:string;
    public rh:string;
    public visitantecel:string;
    public nacimiento:string;
    public eps:string;
    public emergencia:string;
    public emergenciacel:string;
    public primernombre: string;
    public segundonombre: string;
    public surname: string;
    public secondsurname: string;
    public hora: Time;
    public xphr: string;
    public constructor() {
        this.numero_documento = null;
        this.expedida = null;
        this.genero = null;
        this.rh = null;
        this.visitantecel = null;
        this.nacimiento = null;
        this.eps = null;
        this.emergencia = null;
        this.emergenciacel = null;
        this.primernombre = null;
        this.segundonombre = null;
        this.surname = null;
        this.secondsurname = null;
    }
}

@Component({
    selector: 'app-visitorregistration',
    templateUrl: './visitorregistration.component.html',
    styleUrls: ['./visitorregistration.component.scss']
})
export class VisitorregistrationComponent implements OnInit {
    public data: DataModel;

    constructor(public _parametricos_srv: ParametricosService, private _ngbModal_srv: NgbModal) {}
    public mostrarvisitante: boolean;
    ngOnInit() {
        this.mostrarvisitante = false;
        this.data = new DataModel();
    }
    public cambiarfotografia() {}

    public log(data) {
        console.log(data);
    }
    guardar() {
        alert(JSON.stringify(this.data));
    }
}
