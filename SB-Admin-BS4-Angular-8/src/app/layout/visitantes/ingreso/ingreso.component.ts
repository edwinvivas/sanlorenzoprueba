import { Component, OnInit, Input } from '@angular/core';
import { Visitante } from '../../../shared/Models/Visitante';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  constructor() {}




  @Input()
  public visitantes: Array<Visitante>;

  ngOnInit() {


  }





}

