import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-visitantes',
    templateUrl: './visitantes.component.html',
    styleUrls: ['./visitantes.component.scss']
})
export class VisitantesComponent implements OnInit {
    constructor() {}
    public mostrarvisitante: boolean;
    ngOnInit() {
        this.mostrarvisitante = false;
    }
    public RegistroVisitante() {}
    public RegistroSalida() {}
    public RegistroIngreso() {}

    public MostrarFormvisitante() {
        this.mostrarvisitante = true;
    }

}
