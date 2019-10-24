import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidentesComponent } from './residentes/residentes.component';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';

const routes: Routes = [
    { path: '', component: ResidentesComponent },
    { path: 'apartamentos', component: ApartamentosComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class ResidentesRoutingModule { }
