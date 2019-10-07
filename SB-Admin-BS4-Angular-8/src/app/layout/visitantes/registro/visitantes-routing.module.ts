import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitantesComponent } from '../visitantes.component';
import { ɵNgClassR2Impl } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: VisitantesComponent
    },
    {
        path: 'registro',
        loadChildren: () => import('./visitorregistration.module').then(m => m.VisitorregistrationModule)
    },
   /*  {
        path: 'ingreso',
        loadChildren: () => import('.././registroingreso/registroingreso.component').then(m => m.registroingreso.module)
    } */

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisitantesRoutingModule {}


