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

  public comparar_igualdad_fechas(date1: Date, date2: Date) {
    const anhio: boolean = date1.getFullYear === date2.getFullYear;
    const mes: boolean = date1.getMonth === date2.getMonth;
    const dia: boolean = date1.getDay === date2.getDay;
    return anhio && mes && dia;
  }

  /**
   * Recibe 2 fechas y responde verdadero si la primera es mayor o igual a la segunda fecha suministrada
   * @param fecha_mayor Date, corresponde a la fecha más reciente a comparar
   * @param fecha_menor Date, corresponde a la fecha más antigua a comparar
   */
  public fecha_mayor_igual_fecha(fecha_mayor: Date, fecha_menor: Date) {
    return (fecha_mayor.getTime() - fecha_menor.getTime()) > 0;
  }
  public fecha_mayor(fecha_mayor: Date, fecha_menor: Date) {
    return (fecha_mayor.getTime() - fecha_menor.getTime()) >= 0;
  }

}
