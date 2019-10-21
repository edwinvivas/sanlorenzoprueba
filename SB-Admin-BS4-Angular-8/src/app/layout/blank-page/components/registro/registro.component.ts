
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { Apartamento } from '../apartamento';
import { ParametricosService } from 'src/app/shared/services/parametricos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    constructor(public _parametricos_srv: ParametricosService, private _ngbModal_srv: NgbModal) {}
    public persona1: Persona;
    public nuevoResidente: Persona;
    public edit: boolean;
    public mostrarFormulario: boolean;
    public ModalEliminarOptions = {
        ELIMINAR : 0,
        CANCELAR : 1
    };
    public tipos_documento: Array<any>;

    @Input()
    public residentes: Array<Persona>;

    ngOnInit() {

        this._parametricos_srv.getTiposDocumento().subscribe((tiposDocumento) => {
            const cantidad = tiposDocumento.count;
            this.tipos_documento = tiposDocumento.results;
        });


        this.edit = false;
        this.mostrarFormulario = false;
        this.nuevoResidente = new Persona();
        this.nuevoResidente.tipo_documento = '';

      /*   this.persona1 = new Persona();
        this.persona1.tipo_documento = 'CC';
        this.persona1.numero_documento = '1010188564';
        this.persona1.primer_nombre = 'Lucero';
        this.persona1.primer_nombre = 'Vivas';
        this.persona1.segundo_apellido = 'Soto'; */

        const apartamento: Apartamento = new Apartamento();
        apartamento.interior = '1';
        apartamento.numero = '101';

        /* this.persona1.apartamento = apartamento; */
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

    public eliminarResidenteModal(content, residente) {

        this._ngbModal_srv.open(content, { backdrop: 'static' }).result.then(
            result => {
                console.log(result);
                if (result === this.ModalEliminarOptions.ELIMINAR) {
                    this.eliminarResidente(residente);
                }
            },
            reason => {
                console.log(this.getDismissReason(reason));
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    private eliminarResidente(residente: Persona) {
        const index = this.residentes.indexOf(residente, 0);
        if (index > -1) {
            this.residentes.splice(index, 1);
        }
    }
    public MostrarFormAgregarResidente() {
        this.mostrarFormulario = true;
    }
}
