import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
    /**
     * Entrega un objeto fecha transformando a GMT -5 para colombia
     * @param string_date fecha hora en string debe ir sin zona horaria definida.
     */
  public str_to_date_gmt_co(string_date: string) {
    return new Date(string_date + ' ' + 'GMT-0500');
  }


}
