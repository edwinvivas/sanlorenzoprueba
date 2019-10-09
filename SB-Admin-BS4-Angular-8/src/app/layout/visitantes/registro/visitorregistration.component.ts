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
    ngOnInit() {
        this.image = {
            imageUrl:'',
            webcamImage : null
        }
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
}
