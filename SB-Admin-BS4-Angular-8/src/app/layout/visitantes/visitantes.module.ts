import { NgModule } from '@angular/core';
import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';
import { StatModule } from '../../shared';
import { PageHeaderModule } from './../../shared';

 @NgModule({
    imports: [
         VisitantesRoutingModule,
         StatModule,
         PageHeaderModule
        ],
    declarations: [VisitantesComponent]
})

export class VisitantesModule {}
