import { Component, OnInit } from '@angular/core';
import { Apartamento } from '../../blank-page/components/apartamento';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-apartamentos',
  templateUrl: './apartamentos.component.html',
  styleUrls: ['./apartamentos.component.scss']
})
export class ApartamentosComponent implements OnInit {


  public buscar: string;
  /**
   *
   * @todo: cambiar por un nuevo modelo en share
   * @type Array<Apartamento>
   * @memberof ApartamentosComponent
   */
  public apartamentos: Array<Apartamento>;

  constructor(public router: Router) { }

  ngOnInit() {
    this.buscar = '';
    const apartamento1: Apartamento = new Apartamento();
    apartamento1.interior = '1';
    apartamento1.numero = '201';


    const apartamento2: Apartamento = new Apartamento();
    apartamento2.interior = '2';
    apartamento2.numero = '101';


    const apartamento3: Apartamento = new Apartamento();
    apartamento3.interior = '5';
    apartamento3.numero = '301';

    const apartamento4: Apartamento = new Apartamento();
    apartamento4.interior = '2';
    apartamento4.numero = '205';

    this.apartamentos = new Array<Apartamento>();
    this.apartamentos.push(apartamento1);
    this.apartamentos.push(apartamento2);
    this.apartamentos.push(apartamento3);
    this.apartamentos.push(apartamento4);
  }

  get filtrarApartamentos() {
    if (this.buscar === '') {
      return this.apartamentos;
    } else {
      return this.apartamentos.filter(
        // apto => apto.numero.lastIndexOf(this.buscar) >= 0 || apto.interior.lastIndexOf(this.buscar) >= 0
         apto => apto.numero === this.buscar  || apto.interior === this.buscar
      );
    }
  }

}
