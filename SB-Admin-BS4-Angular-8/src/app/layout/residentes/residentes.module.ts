import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { ResidentesRoutingModule } from './residentes-routing.module';
import { ResidentesComponent } from './residentes/residentes.component';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResidentesComponent, ApartamentosComponent],
  imports: [
    CommonModule, ResidentesRoutingModule, FormsModule, RouterModule
  ]
})
export class ResidentesModule { }
