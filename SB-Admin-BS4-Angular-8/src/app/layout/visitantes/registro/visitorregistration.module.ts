import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared';
import { CamaraComponent } from '../camara/camara.component';
import { FormsModule } from '@angular/forms';
// importar la librería de cámara web.
import { WebcamModule } from 'ngx-webcam';
// Modulo para recortar imágenes
 import { AngularCropperjsModule } from 'angular-cropperjs';
// modulo HTTP
import { HttpClientModule } from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitorregistrationComponent } from './visitorregistration.component';
import { VisitorregistrationRoutingModule } from './visitorregistration-routing.module';
import { CollapseComponent } from '../../bs-component/components/collapse/collapse.component';

@NgModule({
    imports: [CommonModule,
        VisitorregistrationRoutingModule,
         FormsModule,
         PageHeaderModule,
          NgbModule,
          WebcamModule,
          AngularCropperjsModule

        ],
        providers: [HttpClientModule],
    declarations: [VisitorregistrationComponent, CollapseComponent, CamaraComponent ]
})
export class VisitorregistrationModule {}
