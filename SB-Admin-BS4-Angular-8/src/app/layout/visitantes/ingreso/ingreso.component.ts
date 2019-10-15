import { Component, OnInit, Input } from '@angular/core';
import { Visitante } from '../../../shared/Models/Visitante';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  constructor() {}


  public nuevoVisitante: Visitante;
  public edit: boolean;


  @Input()
  public visitantes: Array<Visitante>;

  ngOnInit() {
    this.nuevoVisitante = new Visitante();

  }

  public guardar() {
    if (this.edit === false) {
        this.visitantes.push(this.nuevoVisitante);
    } else {
        this.edit = false;
    }

    this.nuevoVisitante = new Visitante();
}


}

