import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroresidentesComponent } from './registroresidentes.component';

const routes: Routes = [
    {
        path: ':id',
        component: RegistroresidentesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistroresidentesRoutingModule {}
