import { NgModule } from '@angular/core';
import { VisitantesRoutingModule } from './registro/visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';
import { StatModule } from '../../shared';
import { PageHeaderModule } from './../../shared';
// import { CamaraComponent } from './camara/camara.component';
import { FormsModule } from '@angular/forms';
// importar la librería de cámara web.
import { WebcamModule } from 'ngx-webcam';
// Modulo para recortar imágenes
 import { AngularCropperjsModule } from 'angular-cropperjs';
// modulo HTTP
import { HttpClientModule } from '@angular/common/http';
// común
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        VisitantesRoutingModule,
        StatModule,
        PageHeaderModule,
        AngularCropperjsModule,
        WebcamModule,
        CommonModule,
        FormsModule
    ],
    providers: [HttpClientModule],
    declarations: [VisitantesComponent, /*CamaraComponent*/]
})
export class VisitantesModule {}
