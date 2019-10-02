import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Time } from "@angular/common";


class DataModel {
    public surname: string;
    public hora: Time;
    public xphr: string;
    public constructor() {
      this.surname = null;

    }
  }

@Component({
    selector: 'app-visitorregistration',
    templateUrl: './visitorregistration.component.html',
    styleUrls: ['./visitorregistration.component.scss']
})
export class VisitorregistrationComponent implements OnInit {
      public data: DataModel;

    constructor() {}
    public mostrarvisitante: boolean;
    ngOnInit() {
        this.mostrarvisitante = false;
        this.data = new DataModel();
    }

    guardar(forma: NgForm) {

    }

    public cambiarfotografia() {}
}
