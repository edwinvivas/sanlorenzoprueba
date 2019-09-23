import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { BlankPage2RoutingModule } from './blank-page2-routing.module';
import { BlankPage2Component } from './blank-page2.component';

@NgModule({
    imports: [CommonModule, BlankPage2RoutingModule ,PageHeaderModule],
    declarations: [BlankPage2Component]
})
export class BlankPage2Module {}