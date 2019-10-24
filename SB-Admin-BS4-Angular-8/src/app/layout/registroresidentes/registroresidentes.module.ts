import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroresidentesRoutingModule } from './registroresidentes-routing.module';
import { RegistroresidentesComponent } from './registroresidentes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../bs-component/components/date-picker/date-picker.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';



@NgModule({
    imports: [CommonModule, RegistroresidentesRoutingModule , FormsModule, NgbModule],
    declarations: [RegistroresidentesComponent, RegistroComponent, DatePickerComponent, VehiculoComponent]
})

export class RegistroresidentesModule {}
