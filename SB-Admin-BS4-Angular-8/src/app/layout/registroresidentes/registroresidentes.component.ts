import { Component, OnInit } from '@angular/core';
import { Persona } from '../../shared/Models/persona';
import { Propietario } from '../../shared/Models/Propietario';
import { ContactoEmergencia } from '../../shared/Models/contactoemergencia';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Vehiculo } from '../../shared/Models/vehiculo';
import { Mascota } from '../../shared/Models/mascota';
import { ServicioDomestico } from '../../shared/Models/serviciodomestico';
import { Inmobiliaria } from '../../shared/Models/inmobiliaria';
import { Administracion } from '../../shared/Models/administracion';
import { ParametricosService } from 'src/app/shared/services/parametricos.service';
import { ActivatedRoute } from '@angular/router';
import { PropiedadesService } from 'src/app/shared/services/propiedades.service';
class RegistroApartamento {
    public datosBasicos: any;
    public propietario: any;
    public residentes: Array<Persona>;
    public vehiculos: Array<Vehiculo>;
    public tipos_documento: Array<any>;

    public constructor() {
        this.residentes = new Array<Persona>();
        this.vehiculos = new Array<Vehiculo>();
    }


}


@Component({
    selector: 'app-registroresidentes',
    templateUrl: './registroresidentes.component.html',
    styleUrls: ['./registroresidentes.component.scss']
})
export class RegistroresidentesComponent implements OnInit {
    public data: RegistroApartamento;

    public opcion_municipios: Array<any>;
    public opcion_departamentos: Array<any>;
    public tipos_documento: Array<any>;

    constructor(
        private _ngbModal_srv: NgbModal,
        public _parametricos_srv: ParametricosService,
        private _propiedades_srv: PropiedadesService,
        private _route: ActivatedRoute ) {}

    public propietario: Propietario;
    public vehiculo: Vehiculo;
    public mascota: Mascota;
    public inmobiliaria: Inmobiliaria;
    public administracion: Administracion;
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
        this.administracion = new Administracion();
        this.serviciodomestico = new ServicioDomestico();
        this.data = new RegistroApartamento();
        this.mostrarvehiculo = false;
        this.mostrarmascota = false;
        this.mostrarservicio = false;
        this.mostrarinmobiliaria = false;
        this.propietario.departamento_expedicion = '';
        this.propietario.municipio_expedicion = '';


        this._parametricos_srv.getDepartamento().subscribe((Departamento) => {
            /* console.log(Departamento.results); */
         this.opcion_departamentos = Departamento.results;
        });

        this._parametricos_srv.getTiposDocumento().subscribe((tiposDocumento) => {
            const cantidad = tiposDocumento.count;
            console.log(tiposDocumento.results);
            this.tipos_documento = tiposDocumento.results;
        });




        this._route.paramMap.subscribe(params => {
            const id_propiedad: Number = Number(params.get('id'));

                this._propiedades_srv.getPropiedad(id_propiedad).subscribe((response) => {
                    console.log(response);
                    this.propietario.tipo_documento_propietario = response.tipo_documento_propietario;
                    this.propietario.nombre_propietario = response.nombre_propietario;
                    this.propietario.interior = response.interior;
                    this.propietario.apartamento = response.numero;
                    this.propietario.numero_documento_propietario = response.numero_documento_propietario;
                    this.propietario.celular_propietario = response.celular_propietario;
                });


          });

    }
    public departamentoChange() {
        this._parametricos_srv.getMunicipios(this.propietario.departamento_expedicion).subscribe((Municipios) => {
            /*    console.log(Municipios.results); */
            this.opcion_municipios = Municipios.results;
        });
    }

    public log(data) {
        console.log(data);
        console.log(this.opcion_municipios);
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
