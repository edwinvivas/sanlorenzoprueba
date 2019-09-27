import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 @NgModule({
    imports: [CommonModule,
         BlankPageRoutingModule,
         FormsModule,
         NgbModule
         ],
    declarations: [BlankPageComponent, RegistroComponent
      ]
})

export class BlankPageModule {}




