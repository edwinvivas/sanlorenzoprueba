import { Component, OnInit } from '@angular/core';
import { Persona } from './components/persona';
import { Propietario } from '../../shared/Models/Propietario';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';




class RegistroApartamento {
    public datosBasicos: any;
    public propietario: any;
    public residentes: Array<Persona>;

    public constructor() {
        this.residentes = new Array<Persona>();
    }
}

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    public data: RegistroApartamento;
    constructor(private _ngbModal_srv: NgbModal) {}

    public propietario: Propietario;

    ngOnInit() {
        this.propietario = new Propietario ();
        this.data = new RegistroApartamento();

    }
    public log(data) {
        console.log(data);
    }

}
