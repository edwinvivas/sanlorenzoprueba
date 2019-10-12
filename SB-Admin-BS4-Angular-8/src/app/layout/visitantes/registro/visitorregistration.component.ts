import { Component, OnInit } from '@angular/core';
import { ParametricosService } from 'src/app/shared/services/parametricos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Visitante } from '../../../shared/Models/Visitante';
import { VisitantesService } from 'src/app/shared/services/visitantes.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { WebcamImage} from 'ngx-webcam';

@Component({
    selector: 'app-visitorregistration',
    templateUrl: './visitorregistration.component.html',
    styleUrls: ['./visitorregistration.component.scss']
})
export class VisitorregistrationComponent implements OnInit {

    public estadosValidacionesPersonalizadas = {
        'fecha_expedicion' : false,
        'fecha_nacimiento' : false
    };



    public visitante: Visitante;
    public image:any;

    public imageUrl: any;
    public webcamImage: WebcamImage;
    constructor(
        public _parametricos_srv: ParametricosService,
        public _visitantes_srv: VisitantesService,
        public _utils_srv: UtilsService,
        private _ngbModal_srv: NgbModal
    ) {}
    public mostrarvisitante: boolean;
    public mostrarempresa: boolean;
    ngOnInit() {
        this.image = {
            imageUrl:'',
            webcamImage : null
        }
        this.mostrarempresa = false;

        this.mostrarvisitante = false;

        this.visitante = new Visitante();
    }
    private validacionesPersonalizadas() {
        return false;
    }
    public cambiarfotografia() {}



    public log(data) {
        console.log(data);
    }
    guardar() {
        alert(JSON.stringify(this.visitante));

        this._visitantes_srv.guardar(this.visitante);
    }

    /**
     * Valida si la fecha de expedicion es mayor que la fecha de nacimiento
     *  y que la fecha de nacimiento sea mayor que 01/01/1920
     */
    public validate_fecha_expedicion() {
        console.info("validando fecha de expedicion");
        const fecha_expedicion: Date = this._utils_srv.str_to_date_gmt_co(this.visitante.fecha_expedicion);
        const fecha_nacimiento: Date = this._utils_srv.str_to_date_gmt_co(this.visitante.fecha_nacimiento);
        const minima_fecha_nacimiento = new Date('01/01/1920');
        const valid: boolean =  (fecha_expedicion > fecha_nacimiento) && fecha_nacimiento > minima_fecha_nacimiento;
        this.estadosValidacionesPersonalizadas.fecha_expedicion = valid;
    }

    /**
     * Valida si la fecha de expedicion es mayor que la fecha de nacimiento
     * y que la fecha de nacimiento sea mayor que 01/01/1920
     */
    public validate_fecha_nacimiento() {
        console.info("validando fecha de nacimiento");
        const fecha_expedicion: Date = this._utils_srv.str_to_date_gmt_co(this.visitante.fecha_expedicion);
        const fecha_nacimiento: Date = this._utils_srv.str_to_date_gmt_co(this.visitante.fecha_nacimiento);
        const minima_fecha_nacimiento = new Date('01/01/1920');
        const valid: boolean =  (fecha_expedicion > fecha_nacimiento) && fecha_nacimiento > minima_fecha_nacimiento ;
        this.estadosValidacionesPersonalizadas.fecha_nacimiento = valid;
    }

    public validaciones_personalidas_ok() {
        this.ejecutar_validaciones_personalizadas();
        return this.estadosValidacionesPersonalizadas.fecha_expedicion
        && this.estadosValidacionesPersonalizadas.fecha_nacimiento;
    }

    public ejecutar_validaciones_personalizadas() {
        this.validate_fecha_expedicion();
        this.validate_fecha_nacimiento();
    }
    /**
     * @description Detecta el cambio del tipo de visitante,
     * para controlar los valores de los campos segun el tipo
     * @author "edwin.vivas(at)xphera.co"
     */
    public change_tipo_visitante(){
        switch (this.visitante.tipo_visitante){
            case "servicios":
            case "domiciliario":
            {
                this.visitante.empresa = "";
                this.visitante.arl = "";
                break;
            }
            default:{
                this.visitante.empresa = "NO APLICA";
                this.visitante.arl = "NO APLICA";
                break;
            }
        }
    }
}
