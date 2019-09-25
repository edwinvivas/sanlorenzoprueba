import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {CollapseComponent} from '../bs-component/components/collapse/collapse.component';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

 @NgModule({
    imports: [CommonModule,
         BlankPageRoutingModule,
        /* CollapseComponent*/
         ],
    declarations: [BlankPageComponent,
       /*CollapseComponent*/]
})

export class BlankPageModule {}




