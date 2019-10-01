import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    constructor(private modalService: NgbModal) {}

    open(content) {
        this.modalService.open(content).result.then(
            result => {
               // this.closeResult = `Closed with: ${result}`;
               console.log(result);
            },
            reason => {
                //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                console.log(this.getDismissReason(reason));
            }
        );
    }
    open2(content) {
        this.modalService.open(content).result.then(
            result => {
               // this.closeResult = `Closed with: ${result}`;
               console.log(result);
            },
            reason => {
                //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                console.log(this.getDismissReason(reason));
            }
        );
    }
    public eliminarResidenteModal(content, residente) {
        console.log(content);
        this.modalService.open(content,{  backdrop: 'static'}).result.then(
            result => {
                console.log(result);
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
}
