import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitantesComponent } from './visitantes.component';
import { ɵNgClassR2Impl } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: VisitantesComponent
    },
    {
        path: 'registro',
        loadChildren: () => import('../visitorregistration/visitorregistration.module').then(m => m.VisitorregistrationModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisitantesRoutingModule {}


