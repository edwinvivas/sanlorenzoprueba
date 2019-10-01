import { NgModule } from '@angular/core';
import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';
import { StatModule } from '../../shared';

 @NgModule({
    imports: [
         VisitantesRoutingModule,
         StatModule
        ],
    declarations: [VisitantesComponent]
})

export class VisitantesModule {}
