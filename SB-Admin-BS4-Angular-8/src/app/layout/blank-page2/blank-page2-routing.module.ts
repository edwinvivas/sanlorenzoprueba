import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankPage2Component } from './blank-page2.component';

const routes: Routes = [
    {
        path: '',
        component: BlankPage2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 export class BlankPage2RoutingModule {}
