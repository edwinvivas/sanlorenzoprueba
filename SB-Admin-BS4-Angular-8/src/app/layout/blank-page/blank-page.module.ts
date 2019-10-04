import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../../../app/layout/bs-component/components/date-picker/date-picker.component';



@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, FormsModule, NgbModule],
    declarations: [BlankPageComponent, RegistroComponent, DatePickerComponent]
})

export class BlankPageModule {}
