import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { PageHeaderModule } from './../../shared';
//import { DatePickerComponent } from '../../../app/layout/bs-component/components/date-picker/date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitorregistrationComponent } from '../visitorregistration/visitorregistration.component';
import { VisitorregistrationRoutingModule } from './visitorregistration-routing.module';

@NgModule({
    imports: [
        CommonModule,
        VisitorregistrationRoutingModule,
        FormsModule,
        PageHeaderModule,
        NgbModule,
    ],
    declarations: [VisitorregistrationComponent,/*DatePickerComponent*/ ]
})
export class VisitorregistrationModule {}
