import { Injectable } from '@angular/core';
import { Visitante } from '../Models/Visitante';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {

  public visitantes: Array<Visitante>;
  constructor() {
    this.visitantes = new Array<Visitante>();
   }

   getVisitantes(){
       return this.visitantes;
   }
   guardar(visitante:Visitante){
       this.visitantes.push(visitante);
   }

}
