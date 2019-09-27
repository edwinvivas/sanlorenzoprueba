import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { Apartamento } from '../apartamento';
import { ParametricosService } from 'src/app/shared/services/parametricos.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    constructor(public _parametricos_srv: ParametricosService) {}
    public persona1: Persona;
    public nuevoResidente: Persona;
    public edit: boolean;
    public mostrarFormulario: boolean;

    @Input()
    public residentes: Array<Persona>;

    ngOnInit() {
        this.edit = false;
        this.mostrarFormulario = false;
        this.nuevoResidente = new Persona();
        this.nuevoResidente.tipo_documento = 'CC';

        this.persona1 = new Persona();
        this.persona1.tipo_documento = 'CC';
        this.persona1.numero_documento = '1010188564';
        this.persona1.primer_nombre = 'Lucero';
        this.persona1.primer_nombre = 'Vivas';
        this.persona1.segundo_apellido = 'Soto';

        const apartamento: Apartamento = new Apartamento();
        apartamento.interior = '1';
        apartamento.numero = '101';

        this.persona1.apartamento = apartamento;
    }

    public guardar() {
        if (this.edit === false) {
            this.residentes.push(this.nuevoResidente);
        } else {
            this.edit = false;
        }

        this.nuevoResidente = new Persona();

        this.mostrarFormulario = false;
        this._parametricos_srv.saludar();
    }
    public editarResidente(residente: Persona) {
        this.edit = true;
        this.mostrarFormulario = true;
        this.nuevoResidente = residente;
    }
    public MostrarFormAgregarResidente() {
        this.mostrarFormulario = true;
    }
}
