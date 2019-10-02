import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';

import { VisitorregistrationComponent } from '../visitorregistration/visitorregistration.component';
import { VisitorregistrationRoutingModule } from './visitorregistration-routing.module';

@NgModule({
    imports: [
        CommonModule,
        VisitorregistrationRoutingModule,
        FormsModule
    ],
    declarations: [VisitorregistrationComponent]
})
export class VisitorregistrationModule {}
