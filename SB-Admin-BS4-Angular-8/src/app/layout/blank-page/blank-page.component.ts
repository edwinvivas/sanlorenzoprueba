import { Component, OnInit } from '@angular/core';
import { Persona } from './components/persona';

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
    constructor() {}

    ngOnInit() {
        this.data = new RegistroApartamento();
    }
}
