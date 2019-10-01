import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorregistrationComponent } from '../visitorregistration/visitorregistration.component';
import { VisitorregistrationRoutingModule } from './visitorregistration-routing.module';

@NgModule({
    imports: [CommonModule, VisitorregistrationRoutingModule],
    declarations: [VisitorregistrationComponent]
})
export class VisitorregistrationModule {}


