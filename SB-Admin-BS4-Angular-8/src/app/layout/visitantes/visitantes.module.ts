import { NgModule } from '@angular/core';
import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';


 @NgModule({
    imports: [
         VisitantesRoutingModule
        ],
    declarations: [VisitantesComponent]
})

export class VisitantesModule {}
