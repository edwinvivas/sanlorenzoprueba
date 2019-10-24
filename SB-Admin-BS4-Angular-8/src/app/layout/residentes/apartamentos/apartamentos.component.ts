import { Component, OnInit } from '@angular/core';
import { Apartamento } from '../../../shared/Models/apartamento';
import { Router, NavigationEnd } from '@angular/router';
import { ResidentesService } from 'src/app/shared/services/residentes.service';

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

  constructor(public router: Router, private residentes_srv: ResidentesService) { }

  ngOnInit() {
    this.buscar = '';
    this.apartamentos = [];
     this.residentes_srv.getPropiedades().subscribe( (response)  => {
      this.apartamentos = response.results;
      console.log(response.results);
     });

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
