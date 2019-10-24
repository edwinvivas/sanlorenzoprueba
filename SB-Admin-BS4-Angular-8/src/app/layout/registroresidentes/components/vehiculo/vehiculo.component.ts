import { Component, OnInit, Input } from '@angular/core';
import { Vehiculo } from 'src/app/shared/Models/vehiculo';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  constructor(private _ngbModal_srv: NgbModal) { }

  public nuevoVehiculo: Vehiculo;
  public vehiculo: Vehiculo;

  public mostrarFormulario2: boolean;
   public edit: boolean;

   public ModalEliminarOptions = {
    ELIMINAR : 0,
    CANCELAR : 1
};


  @Input()
  public vehiculos: Array< Vehiculo>;

  ngOnInit() {
    this.mostrarFormulario2 = false;
    this.nuevoVehiculo = new Vehiculo();
    this.edit = false;
  }

  public guardar() {
    if (this.edit === false) {
        this.vehiculos.push(this.nuevoVehiculo);
    } else {
        this.edit = false;
    }

    this.nuevoVehiculo = new Vehiculo();

    this.mostrarFormulario2 = false;
}

  public editarVehiculo(vehiculo: Vehiculo) {
    this.edit = true;
    this.mostrarFormulario2 = true;
    this.nuevoVehiculo = vehiculo;
}

public eliminarVehiculoModal(content, vehiculo) {

  this._ngbModal_srv.open(content, { backdrop: 'static' }).result.then(
      result => {
          console.log(result);
          if (result === this.ModalEliminarOptions.ELIMINAR) {
              this.eliminarVehiculo(vehiculo);
          }
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

private eliminarVehiculo(vehiculo: Vehiculo) {
  const index = this.vehiculos.indexOf(vehiculo, 0);
  if (index > -1) {
      this.vehiculos.splice(index, 1);
  }
}
  public MostrarFormAgregarvehiculo() {
    this.mostrarFormulario2 = true;
}

}
