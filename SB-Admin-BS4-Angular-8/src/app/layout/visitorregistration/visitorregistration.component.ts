import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitorregistration',
  templateUrl: './visitorregistration.component.html',
  styleUrls: ['./visitorregistration.component.scss']
})
export class VisitorregistrationComponent implements OnInit {

  constructor() { }
  public mostrarvisitante: boolean;
  ngOnInit() {
    this.mostrarvisitante = false;
  }

  public cambiarfotografia() {}

}
