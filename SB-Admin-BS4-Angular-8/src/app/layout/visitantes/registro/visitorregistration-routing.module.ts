import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorregistrationComponent } from './visitorregistration.component';

const routes: Routes = [
    {
        path: '',
        component: VisitorregistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 export class VisitorregistrationRoutingModule {}
