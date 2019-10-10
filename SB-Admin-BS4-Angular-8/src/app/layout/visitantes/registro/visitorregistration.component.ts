import { Component, OnInit } from '@angular/core';
import { ParametricosService } from 'src/app/shared/services/parametricos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Visitante } from '../../../shared/Models/Visitante';
import { VisitantesService } from 'src/app/shared/services/visitantes.service';
import { WebcamImage} from 'ngx-webcam';

@Component({
    selector: 'app-visitorregistration',
    templateUrl: './visitorregistration.component.html',
    styleUrls: ['./visitorregistration.component.scss']
})
export class VisitorregistrationComponent implements OnInit {
    public visitante: Visitante;
    public image:any;

    public imageUrl: any;
    public webcamImage: WebcamImage;
    constructor(
        public _parametricos_srv: ParametricosService,
        public _visitantes_srv: VisitantesService,
        
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
    public cambiarfotografia() {}

  

    public log(data) {
        console.log(data);
    }
    guardar() {
        alert(JSON.stringify(this.visitante));

        this._visitantes_srv.guardar(this.visitante);
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
