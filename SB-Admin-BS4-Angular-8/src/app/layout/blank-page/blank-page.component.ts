import { Component, OnInit } from '@angular/core';
import { Persona } from './components/persona';
import { Propietario } from '../../shared/Models/Propietario';
import { ContactoEmergencia } from '../../shared/Models/contactoemergencia';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Vehiculo } from '../../shared/Models/vehiculo';
import { Mascota } from '../../shared/Models/mascota';
import { ServicioDomestico } from '../../shared/Models/serviciodomestico';
import { Inmobiliaria } from '../../shared/Models/inmobiliaria';

class RegistroApartamento {
    public datosBasicos: any;
    public propietario: any;
    public residentes: Array<Persona>;

    public constructor() {
        this.residentes = new Array<Persona>();
    }


}


@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    public data: RegistroApartamento;
    constructor(private _ngbModal_srv: NgbModal) {}

    public propietario: Propietario;
    public vehiculo: Vehiculo;
    public mascota: Mascota;
    public inmobiliaria: Inmobiliaria;
    public serviciodomestico: ServicioDomestico;
    public contactoemergencia: ContactoEmergencia;
    public mostrarvehiculo: boolean;
    public mostrarmascota: boolean;
    public mostrarservicio: boolean;
    public mostrarinmobiliaria: boolean;

    ngOnInit() {
        this.contactoemergencia = new ContactoEmergencia ();
        this.propietario = new Propietario ();
        this.vehiculo = new Vehiculo();
        this.mascota = new Mascota();
        this.inmobiliaria = new Inmobiliaria();
        this.serviciodomestico = new ServicioDomestico();
        this.data = new RegistroApartamento();
        this.mostrarvehiculo = false;
        this.mostrarmascota = false;
        this.mostrarservicio = false;
        this.mostrarinmobiliaria = false;

    }
    public log(data) {
        console.log(data);
    }

    public change_opciones_vehiculo() {
        switch (this.vehiculo.opciones_vehiculo) {
            case 'positivo':
            {
                this.vehiculo.marca = '';
                this.vehiculo.color = '';
                this.vehiculo.placa = '';
                break;
            }
            default: {
                this.vehiculo.marca = 'No aplica';
                this.vehiculo.color = 'No aplica';
                this.vehiculo.placa = 'No aplica';

                break;
            }
        }
    }
    public change_opciones_mascota() {
        switch (this.mascota.opciones_mascota) {
            case 'si':
            {
                this.mascota.raza = '';
                this.mascota.clase = '';
                break;
            }
            default: {
                this.mascota.raza = 'No aplica';
                this.mascota.clase = 'No aplica';
                break;
            }
        }
    }
    public change_opciones_servicio() {
        switch (this.serviciodomestico.opciones_servicio) {
            case 'aplica':
            {
                this.serviciodomestico.nombres_apellidos = '';
                this.serviciodomestico.numero_documento = '';
                break;
            }
            default: {
                this.serviciodomestico.nombres_apellidos = 'No aplica';
                this.serviciodomestico.numero_documento = 'No aplica';
                break;
            }
        }
    }

    public change_opciones_inmobiliaria() {
        switch (this.inmobiliaria.opciones_inmobiliaria) {
            case 'valido':
            {
                this.inmobiliaria.razon_social = '';

                break;
            }
            default: {
                this.inmobiliaria.razon_social = 'No aplica';

                break;
            }
        }
    }


}
