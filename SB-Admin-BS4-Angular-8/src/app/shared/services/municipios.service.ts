import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(private httpClient: HttpClient) { }


  public getDane() {
    return [
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5001',
        'municipio': 'Medellín'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5002',
        'municipio': 'Abejorral'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5004',
        'municipio': 'Abriaquí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5021',
        'municipio': 'Alejandría'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5030',
        'municipio': 'Amagá'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5031',
        'municipio': 'Amalfi'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5034',
        'municipio': 'Andes'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5036',
        'municipio': 'Angelópolis'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5038',
        'municipio': 'Angostura'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5040',
        'municipio': 'Anorí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68176',
        'municipio': 'Chimá'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5044',
        'municipio': 'Anza'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5045',
        'municipio': 'Apartadó'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5051',
        'municipio': 'Arboletes'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5055',
        'municipio': 'Argelia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5059',
        'municipio': 'Armenia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5079',
        'municipio': 'Barbosa'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5088',
        'municipio': 'Bello'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5091',
        'municipio': 'Betania'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5093',
        'municipio': 'Betulia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5101',
        'municipio': 'Ciudad Bolívar'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5107',
        'municipio': 'Briceño'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5113',
        'municipio': 'Buriticá'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5120',
        'municipio': 'Cáceres'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5125',
        'municipio': 'Caicedo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5129',
        'municipio': 'Caldas'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5134',
        'municipio': 'Campamento'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5138',
        'municipio': 'Cañasgordas'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5142',
        'municipio': 'Caracolí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5145',
        'municipio': 'Caramanta'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5147',
        'municipio': 'Carepa'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70670',
        'municipio': 'Sampués'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5150',
        'municipio': 'Carolina'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5154',
        'municipio': 'Caucasia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5172',
        'municipio': 'Chigorodó'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5190',
        'municipio': 'Cisneros'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5197',
        'municipio': 'Cocorná'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5206',
        'municipio': 'Concepción'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5209',
        'municipio': 'Concordia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5212',
        'municipio': 'Copacabana'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5234',
        'municipio': 'Dabeiba'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5237',
        'municipio': 'Don Matías'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5240',
        'municipio': 'Ebéjico'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5250',
        'municipio': 'El Bagre'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5264',
        'municipio': 'Entrerrios'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5266',
        'municipio': 'Envigado'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5282',
        'municipio': 'Fredonia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5306',
        'municipio': 'Giraldo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5308',
        'municipio': 'Girardota'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5310',
        'municipio': 'Gómez Plata'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85225',
        'municipio': 'Nunchía'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5315',
        'municipio': 'Guadalupe'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5318',
        'municipio': 'Guarne'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5321',
        'municipio': 'Guatapé'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5347',
        'municipio': 'Heliconia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5353',
        'municipio': 'Hispania'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5360',
        'municipio': 'Itagui'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5361',
        'municipio': 'Ituango'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '54',
        'departamento': 'Norte de Santander',
        'c_digo_dane_del_municipio': '54518',
        'municipio': 'Pamplona'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5368',
        'municipio': 'Jericó'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5376',
        'municipio': 'La Ceja'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5380',
        'municipio': 'La Estrella'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5390',
        'municipio': 'La Pintada'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5400',
        'municipio': 'La Unión'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5411',
        'municipio': 'Liborina'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5425',
        'municipio': 'Maceo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5440',
        'municipio': 'Marinilla'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5467',
        'municipio': 'Montebello'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5475',
        'municipio': 'Murindó'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5480',
        'municipio': 'Mutatá'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5483',
        'municipio': 'Nariño'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5490',
        'municipio': 'Necoclí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5495',
        'municipio': 'Nechí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5501',
        'municipio': 'Olaya'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5541',
        'municipio': 'Peñol'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5543',
        'municipio': 'Peque'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5576',
        'municipio': 'Pueblorrico'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5579',
        'municipio': 'Puerto Berrío'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5585',
        'municipio': 'Puerto Nare'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5591',
        'municipio': 'Puerto Triunfo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5604',
        'municipio': 'Remedios'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5607',
        'municipio': 'Retiro'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5615',
        'municipio': 'Rionegro'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5628',
        'municipio': 'Sabanalarga'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5631',
        'municipio': 'Sabaneta'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5642',
        'municipio': 'Salgar'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25019',
        'municipio': 'Albán'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '97',
        'departamento': 'Vaupés',
        'c_digo_dane_del_municipio': '97889',
        'municipio': 'Yavaraté'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5652',
        'municipio': 'San Francisco'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5656',
        'municipio': 'San Jerónimo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23466',
        'municipio': 'Montelíbano'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86568',
        'municipio': 'Puerto Asís'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5660',
        'municipio': 'San Luis'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5664',
        'municipio': 'San Pedro'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70215',
        'municipio': 'Corozal'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5667',
        'municipio': 'San Rafael'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5670',
        'municipio': 'San Roque'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5674',
        'municipio': 'San Vicente'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5679',
        'municipio': 'Santa Bárbara'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52110',
        'municipio': 'Buesaco'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5690',
        'municipio': 'Santo Domingo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5697',
        'municipio': 'El Santuario'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5736',
        'municipio': 'Segovia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5761',
        'municipio': 'Sopetrán'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5789',
        'municipio': 'Támesis'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5790',
        'municipio': 'Tarazá'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5792',
        'municipio': 'Tarso'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5809',
        'municipio': 'Titiribí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5819',
        'municipio': 'Toledo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5837',
        'municipio': 'Turbo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5842',
        'municipio': 'Uramita'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5847',
        'municipio': 'Urrao'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5854',
        'municipio': 'Valdivia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5856',
        'municipio': 'Valparaíso'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5858',
        'municipio': 'Vegachí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5861',
        'municipio': 'Venecia'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85139',
        'municipio': 'Maní'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5885',
        'municipio': 'Yalí'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5887',
        'municipio': 'Yarumal'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5890',
        'municipio': 'Yolombó'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5893',
        'municipio': 'Yondó'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5895',
        'municipio': 'Zaragoza'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8001',
        'municipio': 'Barranquilla'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8078',
        'municipio': 'Baranoa'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13268',
        'municipio': 'El Peñón'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8141',
        'municipio': 'Candelaria'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8296',
        'municipio': 'Galapa'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '76',
        'departamento': 'Valle del Cauca',
        'c_digo_dane_del_municipio': '76834',
        'municipio': 'Tuluá'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73152',
        'municipio': 'Casabianca'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8421',
        'municipio': 'Luruaco'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8433',
        'municipio': 'Malambo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8436',
        'municipio': 'Manatí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25040',
        'municipio': 'Anolaima'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8549',
        'municipio': 'Piojó'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8558',
        'municipio': 'Polonuevo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25175',
        'municipio': 'Chía'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52835',
        'municipio': 'San Andrés de Tumaco'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8634',
        'municipio': 'Sabanagrande'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8638',
        'municipio': 'Sabanalarga'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8675',
        'municipio': 'Santa Lucía'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8685',
        'municipio': 'Santo Tomás'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8758',
        'municipio': 'Soledad'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8770',
        'municipio': 'Suan'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8832',
        'municipio': 'Tubará'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8849',
        'municipio': 'Usiacurí'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18460',
        'municipio': 'Milán'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68147',
        'municipio': 'Capitanejo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13006',
        'municipio': 'Achí'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73043',
        'municipio': 'Anzoátegui'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13042',
        'municipio': 'Arenal'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13052',
        'municipio': 'Arjona'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13062',
        'municipio': 'Arroyohondo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '76',
        'departamento': 'Valle del Cauca',
        'c_digo_dane_del_municipio': '76275',
        'municipio': 'Florida'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13140',
        'municipio': 'Calamar'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13160',
        'municipio': 'Cantagallo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13188',
        'municipio': 'Cicuco'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13212',
        'municipio': 'Córdoba'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13222',
        'municipio': 'Clemencia'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8606',
        'municipio': 'Repelón'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13248',
        'municipio': 'El Guamo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5284',
        'municipio': 'Frontino'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13430',
        'municipio': 'Magangué'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13433',
        'municipio': 'Mahates'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13440',
        'municipio': 'Margarita'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13458',
        'municipio': 'Montecristo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13468',
        'municipio': 'Mompós'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13473',
        'municipio': 'Morales'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13490',
        'municipio': 'Norosí'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13549',
        'municipio': 'Pinillos'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13580',
        'municipio': 'Regidor'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13600',
        'municipio': 'Río Viejo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13647',
        'municipio': 'San Estanislao'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13650',
        'municipio': 'San Fernando'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25258',
        'municipio': 'El Peñón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '54',
        'departamento': 'Norte de Santander',
        'c_digo_dane_del_municipio': '54520',
        'municipio': 'Pamplonita'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13657',
        'municipio': 'San Juan Nepomuceno'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91460',
        'municipio': 'Miriti Paraná'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85400',
        'municipio': 'Támara'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13673',
        'municipio': 'Santa Catalina'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13683',
        'municipio': 'Santa Rosa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15806',
        'municipio': 'Tibasosa'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13744',
        'municipio': 'Simití'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13760',
        'municipio': 'Soplaviento'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13780',
        'municipio': 'Talaigua Nuevo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13810',
        'municipio': 'Tiquisio'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13836',
        'municipio': 'Turbaco'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13838',
        'municipio': 'Turbaná'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13873',
        'municipio': 'Villanueva'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19517',
        'municipio': 'Páez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15001',
        'municipio': 'Tunja'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15022',
        'municipio': 'Almeida'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15047',
        'municipio': 'Aquitania'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15051',
        'municipio': 'Arcabuco'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73001',
        'municipio': 'Ibagué'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15090',
        'municipio': 'Berbeo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15092',
        'municipio': 'Betéitiva'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15097',
        'municipio': 'Boavita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15104',
        'municipio': 'Boyacá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15106',
        'municipio': 'Briceño'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15109',
        'municipio': 'Buena Vista'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15114',
        'municipio': 'Busbanzá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15131',
        'municipio': 'Caldas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15135',
        'municipio': 'Campohermoso'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15162',
        'municipio': 'Cerinza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15172',
        'municipio': 'Chinavita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15176',
        'municipio': 'Chiquinquirá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15180',
        'municipio': 'Chiscas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15183',
        'municipio': 'Chita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15185',
        'municipio': 'Chitaraque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15187',
        'municipio': 'Chivatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15204',
        'municipio': 'Cómbita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15212',
        'municipio': 'Coper'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15215',
        'municipio': 'Corrales'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15218',
        'municipio': 'Covarachía'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15223',
        'municipio': 'Cubará'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15224',
        'municipio': 'Cucaita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15226',
        'municipio': 'Cuítiva'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15232',
        'municipio': 'Chíquiza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15236',
        'municipio': 'Chivor'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15238',
        'municipio': 'Duitama'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15244',
        'municipio': 'El Cocuy'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15248',
        'municipio': 'El Espino'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15272',
        'municipio': 'Firavitoba'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15276',
        'municipio': 'Floresta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15293',
        'municipio': 'Gachantivá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15296',
        'municipio': 'Gameza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15299',
        'municipio': 'Garagoa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15317',
        'municipio': 'Guacamayas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15322',
        'municipio': 'Guateque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15325',
        'municipio': 'Guayatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15332',
        'municipio': 'Güicán'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15362',
        'municipio': 'Iza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15367',
        'municipio': 'Jenesano'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15368',
        'municipio': 'Jericó'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15377',
        'municipio': 'Labranzagrande'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15380',
        'municipio': 'La Capilla'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15401',
        'municipio': 'La Victoria'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8573',
        'municipio': 'Puerto Colombia'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52083',
        'municipio': 'Belén'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15425',
        'municipio': 'Macanal'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15442',
        'municipio': 'Maripí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15455',
        'municipio': 'Miraflores'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15464',
        'municipio': 'Mongua'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15466',
        'municipio': 'Monguí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15469',
        'municipio': 'Moniquirá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15480',
        'municipio': 'Muzo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15491',
        'municipio': 'Nobsa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15494',
        'municipio': 'Nuevo Colón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15500',
        'municipio': 'Oicatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15507',
        'municipio': 'Otanche'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15511',
        'municipio': 'Pachavita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15514',
        'municipio': 'Páez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15516',
        'municipio': 'Paipa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15518',
        'municipio': 'Pajarito'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15522',
        'municipio': 'Panqueba'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15531',
        'municipio': 'Pauna'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15533',
        'municipio': 'Paya'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25758',
        'municipio': 'Sopó'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15542',
        'municipio': 'Pesca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15550',
        'municipio': 'Pisba'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15572',
        'municipio': 'Puerto Boyacá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15580',
        'municipio': 'Quípama'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15599',
        'municipio': 'Ramiriquí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15600',
        'municipio': 'Ráquira'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15621',
        'municipio': 'Rondón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15632',
        'municipio': 'Saboyá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15638',
        'municipio': 'Sáchica'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15646',
        'municipio': 'Samacá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15660',
        'municipio': 'San Eduardo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27150',
        'municipio': 'Carmen del Darien'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25299',
        'municipio': 'Gama'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15673',
        'municipio': 'San Mateo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25718',
        'municipio': 'Sasaima'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52240',
        'municipio': 'Chachagüí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15686',
        'municipio': 'Santana'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15690',
        'municipio': 'Santa María'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '54',
        'departamento': 'Norte de Santander',
        'c_digo_dane_del_municipio': '54001',
        'municipio': 'Cúcuta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15696',
        'municipio': 'Santa Sofía'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15720',
        'municipio': 'Sativanorte'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15723',
        'municipio': 'Sativasur'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15740',
        'municipio': 'Siachoque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15753',
        'municipio': 'Soatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15755',
        'municipio': 'Socotá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15757',
        'municipio': 'Socha'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15759',
        'municipio': 'Sogamoso'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15761',
        'municipio': 'Somondoco'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15762',
        'municipio': 'Sora'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15763',
        'municipio': 'Sotaquirá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15764',
        'municipio': 'Soracá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15774',
        'municipio': 'Susacón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15776',
        'municipio': 'Sutamarchán'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15778',
        'municipio': 'Sutatenza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15790',
        'municipio': 'Tasco'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15798',
        'municipio': 'Tenza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15804',
        'municipio': 'Tibaná'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15808',
        'municipio': 'Tinjacá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15810',
        'municipio': 'Tipacoque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15814',
        'municipio': 'Toca'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13001',
        'municipio': 'Cartagena'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15820',
        'municipio': 'Tópaga'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15822',
        'municipio': 'Tota'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15835',
        'municipio': 'Turmequé'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5313',
        'municipio': 'Granada'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15839',
        'municipio': 'Tutazá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15842',
        'municipio': 'Umbita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15861',
        'municipio': 'Ventaquemada'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15879',
        'municipio': 'Viracachá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15897',
        'municipio': 'Zetaquira'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17001',
        'municipio': 'Manizales'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17013',
        'municipio': 'Aguadas'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17042',
        'municipio': 'Anserma'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17050',
        'municipio': 'Aranzazu'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17088',
        'municipio': 'Belalcázar'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17174',
        'municipio': 'Chinchiná'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17272',
        'municipio': 'Filadelfia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17380',
        'municipio': 'La Dorada'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17388',
        'municipio': 'La Merced'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17433',
        'municipio': 'Manzanares'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17442',
        'municipio': 'Marmato'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17446',
        'municipio': 'Marulanda'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17486',
        'municipio': 'Neira'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17495',
        'municipio': 'Norcasia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17513',
        'municipio': 'Pácora'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17524',
        'municipio': 'Palestina'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17541',
        'municipio': 'Pensilvania'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17614',
        'municipio': 'Riosucio'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17616',
        'municipio': 'Risaralda'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17653',
        'municipio': 'Salamina'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17662',
        'municipio': 'Samaná'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17665',
        'municipio': 'San José'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17777',
        'municipio': 'Supía'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17867',
        'municipio': 'Victoria'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17873',
        'municipio': 'Villamaría'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17877',
        'municipio': 'Viterbo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18001',
        'municipio': 'Florencia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18029',
        'municipio': 'Albania'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47720',
        'municipio': 'Santa Bárbara de Pinto'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13442',
        'municipio': 'María la Baja'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18205',
        'municipio': 'Curillo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18247',
        'municipio': 'El Doncello'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18256',
        'municipio': 'El Paujil'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18479',
        'municipio': 'Morelia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18592',
        'municipio': 'Puerto Rico'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18410',
        'municipio': 'La Montañita'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18753',
        'municipio': 'San Vicente del Caguán'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18756',
        'municipio': 'Solano'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18785',
        'municipio': 'Solita'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18860',
        'municipio': 'Valparaíso'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19001',
        'municipio': 'Popayán'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19022',
        'municipio': 'Almaguer'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19050',
        'municipio': 'Argelia'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19075',
        'municipio': 'Balboa'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19100',
        'municipio': 'Bolívar'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19110',
        'municipio': 'Buenos Aires'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19130',
        'municipio': 'Cajibío'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19137',
        'municipio': 'Caldono'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19142',
        'municipio': 'Caloto'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19212',
        'municipio': 'Corinto'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19256',
        'municipio': 'El Tambo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19290',
        'municipio': 'Florencia'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19300',
        'municipio': 'Guachené'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19318',
        'municipio': 'Guapi'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19355',
        'municipio': 'Inzá'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19364',
        'municipio': 'Jambaló'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19392',
        'municipio': 'La Sierra'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19397',
        'municipio': 'La Vega'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19418',
        'municipio': 'López'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19450',
        'municipio': 'Mercaderes'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19455',
        'municipio': 'Miranda'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19473',
        'municipio': 'Morales'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19513',
        'municipio': 'Padilla'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19532',
        'municipio': 'Patía'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19533',
        'municipio': 'Piamonte'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19548',
        'municipio': 'Piendamó'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19573',
        'municipio': 'Puerto Tejada'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19585',
        'municipio': 'Puracé'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19622',
        'municipio': 'Rosas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68250',
        'municipio': 'El Peñón'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5364',
        'municipio': 'Jardín'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19701',
        'municipio': 'Santa Rosa'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19743',
        'municipio': 'Silvia'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19760',
        'municipio': 'Sotara'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19780',
        'municipio': 'Suárez'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19785',
        'municipio': 'Sucre'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19807',
        'municipio': 'Timbío'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19809',
        'municipio': 'Timbiquí'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19821',
        'municipio': 'Toribio'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19824',
        'municipio': 'Totoró'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19845',
        'municipio': 'Villa Rica'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20001',
        'municipio': 'Valledupar'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20011',
        'municipio': 'Aguachica'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20013',
        'municipio': 'Agustín Codazzi'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20032',
        'municipio': 'Astrea'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20045',
        'municipio': 'Becerril'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20060',
        'municipio': 'Bosconia'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20175',
        'municipio': 'Chimichagua'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20178',
        'municipio': 'Chiriguaná'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20228',
        'municipio': 'Curumaní'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20238',
        'municipio': 'El Copey'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20250',
        'municipio': 'El Paso'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20295',
        'municipio': 'Gamarra'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20310',
        'municipio': 'González'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20383',
        'municipio': 'La Gloria'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '76',
        'departamento': 'Valle del Cauca',
        'c_digo_dane_del_municipio': '76364',
        'municipio': 'Jamundí'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20443',
        'municipio': 'Manaure'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20517',
        'municipio': 'Pailitas'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20550',
        'municipio': 'Pelaya'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20570',
        'municipio': 'Pueblo Bello'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27787',
        'municipio': 'Tadó'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20621',
        'municipio': 'La Paz'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20710',
        'municipio': 'San Alberto'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20750',
        'municipio': 'San Diego'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20770',
        'municipio': 'San Martín'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20787',
        'municipio': 'Tamalameque'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23001',
        'municipio': 'Montería'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23068',
        'municipio': 'Ayapel'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23079',
        'municipio': 'Buenavista'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23090',
        'municipio': 'Canalete'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23162',
        'municipio': 'Cereté'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23168',
        'municipio': 'Chimá'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23182',
        'municipio': 'Chinú'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85230',
        'municipio': 'Orocué'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23300',
        'municipio': 'Cotorra'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73411',
        'municipio': 'Líbano'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23417',
        'municipio': 'Lorica'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23419',
        'municipio': 'Los Córdobas'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23464',
        'municipio': 'Momil'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23500',
        'municipio': 'Moñitos'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23555',
        'municipio': 'Planeta Rica'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23570',
        'municipio': 'Pueblo Nuevo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23574',
        'municipio': 'Puerto Escondido'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25885',
        'municipio': 'Yacopí'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23586',
        'municipio': 'Purísima'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23660',
        'municipio': 'Sahagún'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23670',
        'municipio': 'San Andrés Sotavento'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23672',
        'municipio': 'San Antero'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63130',
        'municipio': 'Calarcá'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5756',
        'municipio': 'Sonsón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '54',
        'departamento': 'Norte de Santander',
        'c_digo_dane_del_municipio': '54245',
        'municipio': 'El Carmen'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23686',
        'municipio': 'San Pelayo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23807',
        'municipio': 'Tierralta'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23815',
        'municipio': 'Tuchín'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23855',
        'municipio': 'Valencia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73408',
        'municipio': 'Lérida'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25035',
        'municipio': 'Anapoima'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25053',
        'municipio': 'Arbeláez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25086',
        'municipio': 'Beltrán'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25095',
        'municipio': 'Bituima'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25099',
        'municipio': 'Bojacá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25120',
        'municipio': 'Cabrera'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25123',
        'municipio': 'Cachipay'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25126',
        'municipio': 'Cajicá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25148',
        'municipio': 'Caparrapí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25151',
        'municipio': 'Caqueza'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23350',
        'municipio': 'La Apartada'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25168',
        'municipio': 'Chaguaní'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25178',
        'municipio': 'Chipaque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25181',
        'municipio': 'Choachí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25183',
        'municipio': 'Chocontá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25200',
        'municipio': 'Cogua'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25214',
        'municipio': 'Cota'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25224',
        'municipio': 'Cucunubá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25245',
        'municipio': 'El Colegio'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25260',
        'municipio': 'El Rosal'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25279',
        'municipio': 'Fomeque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25281',
        'municipio': 'Fosca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25286',
        'municipio': 'Funza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25288',
        'municipio': 'Fúquene'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25293',
        'municipio': 'Gachala'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25295',
        'municipio': 'Gachancipá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25297',
        'municipio': 'Gachetá'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13620',
        'municipio': 'San Cristóbal'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25307',
        'municipio': 'Girardot'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25312',
        'municipio': 'Granada'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25317',
        'municipio': 'Guachetá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25320',
        'municipio': 'Guaduas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25322',
        'municipio': 'Guasca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25324',
        'municipio': 'Guataquí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25326',
        'municipio': 'Guatavita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25290',
        'municipio': 'Fusagasugá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25335',
        'municipio': 'Guayabetal'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25339',
        'municipio': 'Gutiérrez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25368',
        'municipio': 'Jerusalén'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25372',
        'municipio': 'Junín'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25377',
        'municipio': 'La Calera'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25386',
        'municipio': 'La Mesa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25394',
        'municipio': 'La Palma'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25398',
        'municipio': 'La Peña'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25402',
        'municipio': 'La Vega'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25407',
        'municipio': 'Lenguazaque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25426',
        'municipio': 'Macheta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25430',
        'municipio': 'Madrid'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25436',
        'municipio': 'Manta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25438',
        'municipio': 'Medina'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25473',
        'municipio': 'Mosquera'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25483',
        'municipio': 'Nariño'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25486',
        'municipio': 'Nemocón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25488',
        'municipio': 'Nilo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25489',
        'municipio': 'Nimaima'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25491',
        'municipio': 'Nocaima'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25506',
        'municipio': 'Venecia'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25513',
        'municipio': 'Pacho'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25518',
        'municipio': 'Paime'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25524',
        'municipio': 'Pandi'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25530',
        'municipio': 'Paratebueno'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25535',
        'municipio': 'Pasca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25572',
        'municipio': 'Puerto Salgar'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25580',
        'municipio': 'Pulí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25592',
        'municipio': 'Quebradanegra'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25594',
        'municipio': 'Quetame'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25596',
        'municipio': 'Quipile'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25599',
        'municipio': 'Apulo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25612',
        'municipio': 'Ricaurte'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13894',
        'municipio': 'Zambrano'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25649',
        'municipio': 'San Bernardo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25653',
        'municipio': 'San Cayetano'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25658',
        'municipio': 'San Francisco'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15403',
        'municipio': 'La Uvita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25899',
        'municipio': 'Zipaquirá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25736',
        'municipio': 'Sesquilé'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25740',
        'municipio': 'Sibaté'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25743',
        'municipio': 'Silvania'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25745',
        'municipio': 'Simijaca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25754',
        'municipio': 'Soacha'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25769',
        'municipio': 'Subachoque'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25772',
        'municipio': 'Suesca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25777',
        'municipio': 'Supatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25779',
        'municipio': 'Susa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25781',
        'municipio': 'Sutatausa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25785',
        'municipio': 'Tabio'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63302',
        'municipio': 'Génova'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25793',
        'municipio': 'Tausa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25797',
        'municipio': 'Tena'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25799',
        'municipio': 'Tenjo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25805',
        'municipio': 'Tibacuy'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25807',
        'municipio': 'Tibirita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25815',
        'municipio': 'Tocaima'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25817',
        'municipio': 'Tocancipá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25823',
        'municipio': 'Topaipí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25839',
        'municipio': 'Ubalá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25841',
        'municipio': 'Ubaque'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73770',
        'municipio': 'Suárez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25845',
        'municipio': 'Une'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25851',
        'municipio': 'Útica'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50150',
        'municipio': 'Castilla la Nueva'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25867',
        'municipio': 'Vianí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25871',
        'municipio': 'Villagómez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25873',
        'municipio': 'Villapinzón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25875',
        'municipio': 'Villeta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25878',
        'municipio': 'Viotá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25898',
        'municipio': 'Zipacón'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27001',
        'municipio': 'Quibdó'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27006',
        'municipio': 'Acandí'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27025',
        'municipio': 'Alto Baudo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27050',
        'municipio': 'Atrato'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27073',
        'municipio': 'Bagadó'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27075',
        'municipio': 'Bahía Solano'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27077',
        'municipio': 'Bajo Baudó'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15087',
        'municipio': 'Belén'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27099',
        'municipio': 'Bojaya'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27810',
        'municipio': 'Unión Panamericana'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47570',
        'municipio': 'Pueblo Viejo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27160',
        'municipio': 'Cértegui'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27205',
        'municipio': 'Condoto'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86885',
        'municipio': 'Villagarzón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25269',
        'municipio': 'Facatativá'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27372',
        'municipio': 'Juradó'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27413',
        'municipio': 'Lloró'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27425',
        'municipio': 'Medio Atrato'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27430',
        'municipio': 'Medio Baudó'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27450',
        'municipio': 'Medio San Juan'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27491',
        'municipio': 'Nóvita'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27495',
        'municipio': 'Nuquí'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27580',
        'municipio': 'Río Iro'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27600',
        'municipio': 'Río Quito'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27615',
        'municipio': 'Riosucio'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23580',
        'municipio': 'Puerto Libertador'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27745',
        'municipio': 'Sipí'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27800',
        'municipio': 'Unguía'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41001',
        'municipio': 'Neiva'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41006',
        'municipio': 'Acevedo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41013',
        'municipio': 'Agrado'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41016',
        'municipio': 'Aipe'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41020',
        'municipio': 'Algeciras'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41026',
        'municipio': 'Altamira'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41078',
        'municipio': 'Baraya'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41132',
        'municipio': 'Campoalegre'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41206',
        'municipio': 'Colombia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41244',
        'municipio': 'Elías'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41298',
        'municipio': 'Garzón'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41306',
        'municipio': 'Gigante'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41319',
        'municipio': 'Guadalupe'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41349',
        'municipio': 'Hobo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41357',
        'municipio': 'Iquira'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41359',
        'municipio': 'Isnos'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41378',
        'municipio': 'La Argentina'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41396',
        'municipio': 'La Plata'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '17',
        'departamento': 'Caldas',
        'c_digo_dane_del_municipio': '17444',
        'municipio': 'Marquetalia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41483',
        'municipio': 'Nátaga'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41503',
        'municipio': 'Oporapa'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41518',
        'municipio': 'Paicol'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41524',
        'municipio': 'Palermo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41530',
        'municipio': 'Palestina'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41548',
        'municipio': 'Pital'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41551',
        'municipio': 'Pitalito'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41615',
        'municipio': 'Rivera'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41660',
        'municipio': 'Saladoblanco'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52051',
        'municipio': 'Arboleda'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41676',
        'municipio': 'Santa María'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41770',
        'municipio': 'Suaza'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41791',
        'municipio': 'Tarqui'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41797',
        'municipio': 'Tesalia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41799',
        'municipio': 'Tello'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41801',
        'municipio': 'Teruel'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41807',
        'municipio': 'Timaná'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41872',
        'municipio': 'Villavieja'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '41',
        'departamento': 'Huila',
        'c_digo_dane_del_municipio': '41885',
        'municipio': 'Yaguará'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44001',
        'municipio': 'Riohacha'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44035',
        'municipio': 'Albania'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44078',
        'municipio': 'Barrancas'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44090',
        'municipio': 'Dibula'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44098',
        'municipio': 'Distracción'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44110',
        'municipio': 'El Molino'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44279',
        'municipio': 'Fonseca'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44378',
        'municipio': 'Hatonuevo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44430',
        'municipio': 'Maicao'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44560',
        'municipio': 'Manaure'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44847',
        'municipio': 'Uribia'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44855',
        'municipio': 'Urumita'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44874',
        'municipio': 'Villanueva'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47001',
        'municipio': 'Santa Marta'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47030',
        'municipio': 'Algarrobo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47053',
        'municipio': 'Aracataca'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47058',
        'municipio': 'Ariguaní'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47161',
        'municipio': 'Cerro San Antonio'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47170',
        'municipio': 'Chivolo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47205',
        'municipio': 'Concordia'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47245',
        'municipio': 'El Banco'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47258',
        'municipio': 'El Piñon'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47268',
        'municipio': 'El Retén'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47288',
        'municipio': 'Fundación'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47318',
        'municipio': 'Guamal'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47460',
        'municipio': 'Nueva Granada'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47541',
        'municipio': 'Pedraza'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47551',
        'municipio': 'Pivijay'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47555',
        'municipio': 'Plato'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47605',
        'municipio': 'Remolino'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47675',
        'municipio': 'Salamina'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47703',
        'municipio': 'San Zenón'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47707',
        'municipio': 'Santa Ana'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47745',
        'municipio': 'Sitionuevo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47798',
        'municipio': 'Tenerife'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47960',
        'municipio': 'Zapayán'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47980',
        'municipio': 'Zona Bananera'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50001',
        'municipio': 'Villavicencio'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50006',
        'municipio': 'Acacias'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50124',
        'municipio': 'Cabuyaro'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50223',
        'municipio': 'Cubarral'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50226',
        'municipio': 'Cumaral'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50245',
        'municipio': 'El Calvario'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50251',
        'municipio': 'El Castillo'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50270',
        'municipio': 'El Dorado'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '76',
        'departamento': 'Valle del Cauca',
        'c_digo_dane_del_municipio': '76109',
        'municipio': 'Buenaventura'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50313',
        'municipio': 'Granada'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50318',
        'municipio': 'Guamal'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50325',
        'municipio': 'Mapiripán'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50330',
        'municipio': 'Mesetas'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50350',
        'municipio': 'La Macarena'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50370',
        'municipio': 'Uribe'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50400',
        'municipio': 'Lejanías'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50450',
        'municipio': 'Puerto Concordia'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50568',
        'municipio': 'Puerto Gaitán'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50573',
        'municipio': 'Puerto López'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50577',
        'municipio': 'Puerto Lleras'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50590',
        'municipio': 'Puerto Rico'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50606',
        'municipio': 'Restrepo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47189',
        'municipio': 'Ciénaga'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8560',
        'municipio': 'Ponedera'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50686',
        'municipio': 'San Juanito'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50689',
        'municipio': 'San Martín'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50711',
        'municipio': 'Vista Hermosa'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52001',
        'municipio': 'Pasto'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52019',
        'municipio': 'Albán'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52022',
        'municipio': 'Aldana'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52036',
        'municipio': 'Ancuyá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15832',
        'municipio': 'Tununguá'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52079',
        'municipio': 'Barbacoas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15476',
        'municipio': 'Motavita'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '23',
        'departamento': 'Córdoba',
        'c_digo_dane_del_municipio': '23675',
        'municipio': 'San Bernardo del Viento'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52203',
        'municipio': 'Colón'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52207',
        'municipio': 'Consaca'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52210',
        'municipio': 'Contadero'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52215',
        'municipio': 'Córdoba'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52224',
        'municipio': 'Cuaspud'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52227',
        'municipio': 'Cumbal'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52233',
        'municipio': 'Cumbitara'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52250',
        'municipio': 'El Charco'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52254',
        'municipio': 'El Peñol'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52256',
        'municipio': 'El Rosario'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27361',
        'municipio': 'Istmina'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52260',
        'municipio': 'El Tambo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52287',
        'municipio': 'Funes'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52317',
        'municipio': 'Guachucal'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52320',
        'municipio': 'Guaitarilla'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52323',
        'municipio': 'Gualmatán'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52352',
        'municipio': 'Iles'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52354',
        'municipio': 'Imués'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52356',
        'municipio': 'Ipiales'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52378',
        'municipio': 'La Cruz'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52381',
        'municipio': 'La Florida'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52385',
        'municipio': 'La Llanada'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52390',
        'municipio': 'La Tola'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52399',
        'municipio': 'La Unión'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52405',
        'municipio': 'Leiva'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52411',
        'municipio': 'Linares'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52418',
        'municipio': 'Los Andes'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52427',
        'municipio': 'Magüí'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52435',
        'municipio': 'Mallama'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52473',
        'municipio': 'Mosquera'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52480',
        'municipio': 'Nariño'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52490',
        'municipio': 'Olaya Herrera'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52506',
        'municipio': 'Ospina'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52520',
        'municipio': 'Francisco Pizarro'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52540',
        'municipio': 'Policarpa'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52560',
        'municipio': 'Potosí'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52565',
        'municipio': 'Providencia'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52573',
        'municipio': 'Puerres'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52585',
        'municipio': 'Pupiales'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52612',
        'municipio': 'Ricaurte'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52621',
        'municipio': 'Roberto Payán'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52678',
        'municipio': 'Samaniego'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52683',
        'municipio': 'Sandoná'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52685',
        'municipio': 'San Bernardo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52687',
        'municipio': 'San Lorenzo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52693',
        'municipio': 'San Pablo'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5086',
        'municipio': 'Belmira'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15189',
        'municipio': 'Ciénega'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52696',
        'municipio': 'Santa Bárbara'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52720',
        'municipio': 'Sapuyes'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52786',
        'municipio': 'Taminango'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52788',
        'municipio': 'Tangua'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52699',
        'municipio': 'Santacruz'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52838',
        'municipio': 'Túquerres'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '52',
        'departamento': 'Nariño',
        'c_digo_dane_del_municipio': '52885',
        'municipio': 'Yacuanquer'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68575',
        'municipio': 'Puerto Wilches'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68573',
        'municipio': 'Puerto Parra'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63001',
        'municipio': 'Armenia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63111',
        'municipio': 'Buenavista'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63190',
        'municipio': 'Circasia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63212',
        'municipio': 'Córdoba'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63272',
        'municipio': 'Filandia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63401',
        'municipio': 'La Tebaida'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63470',
        'municipio': 'Montenegro'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63548',
        'municipio': 'Pijao'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63594',
        'municipio': 'Quimbaya'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '63',
        'departamento': 'Quindío',
        'c_digo_dane_del_municipio': '63690',
        'municipio': 'Salento'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66001',
        'municipio': 'Pereira'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66045',
        'municipio': 'Apía'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66075',
        'municipio': 'Balboa'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66170',
        'municipio': 'Dosquebradas'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66318',
        'municipio': 'Guática'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66383',
        'municipio': 'La Celia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66400',
        'municipio': 'La Virginia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66440',
        'municipio': 'Marsella'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66456',
        'municipio': 'Mistrató'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66572',
        'municipio': 'Pueblo Rico'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66594',
        'municipio': 'Quinchía'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66687',
        'municipio': 'Santuario'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68001',
        'municipio': 'Bucaramanga'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68013',
        'municipio': 'Aguada'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68020',
        'municipio': 'Albania'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68051',
        'municipio': 'Aratoca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68077',
        'municipio': 'Barbosa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68079',
        'municipio': 'Barichara'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68081',
        'municipio': 'Barrancabermeja'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68092',
        'municipio': 'Betulia'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68101',
        'municipio': 'Bolívar'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68121',
        'municipio': 'Cabrera'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68132',
        'municipio': 'California'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68152',
        'municipio': 'Carcasí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68160',
        'municipio': 'Cepitá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68162',
        'municipio': 'Cerrito'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68167',
        'municipio': 'Charalá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68169',
        'municipio': 'Charta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68179',
        'municipio': 'Chipatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68190',
        'municipio': 'Cimitarra'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68207',
        'municipio': 'Concepción'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68209',
        'municipio': 'Confines'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68211',
        'municipio': 'Contratación'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68217',
        'municipio': 'Coromoro'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68229',
        'municipio': 'Curití'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68245',
        'municipio': 'El Guacamayo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68255',
        'municipio': 'El Playón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68264',
        'municipio': 'Encino'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68266',
        'municipio': 'Enciso'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68271',
        'municipio': 'Florián'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68276',
        'municipio': 'Floridablanca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68296',
        'municipio': 'Galán'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68298',
        'municipio': 'Gambita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68307',
        'municipio': 'Girón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68318',
        'municipio': 'Guaca'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68320',
        'municipio': 'Guadalupe'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68322',
        'municipio': 'Guapotá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68324',
        'municipio': 'Guavatá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68327',
        'municipio': 'Güepsa'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68368',
        'municipio': 'Jesús María'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68370',
        'municipio': 'Jordán'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68377',
        'municipio': 'La Belleza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68385',
        'municipio': 'Landázuri'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68397',
        'municipio': 'La Paz'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68406',
        'municipio': 'Lebríja'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68418',
        'municipio': 'Los Santos'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68425',
        'municipio': 'Macaravita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68432',
        'municipio': 'Málaga'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68444',
        'municipio': 'Matanza'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68464',
        'municipio': 'Mogotes'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68468',
        'municipio': 'Molagavita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68498',
        'municipio': 'Ocamonte'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68500',
        'municipio': 'Oiba'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68502',
        'municipio': 'Onzaga'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68522',
        'municipio': 'Palmar'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68533',
        'municipio': 'Páramo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68547',
        'municipio': 'Piedecuesta'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68549',
        'municipio': 'Pinchote'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68572',
        'municipio': 'Puente Nacional'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68615',
        'municipio': 'Rionegro'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68669',
        'municipio': 'San Andrés'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68679',
        'municipio': 'San Gil'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68682',
        'municipio': 'San Joaquín'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68686',
        'municipio': 'San Miguel'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68705',
        'municipio': 'Santa Bárbara'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68745',
        'municipio': 'Simacota'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68755',
        'municipio': 'Socorro'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68770',
        'municipio': 'Suaita'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68773',
        'municipio': 'Sucre'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68780',
        'municipio': 'Suratá'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68820',
        'municipio': 'Tona'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68861',
        'municipio': 'Vélez'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68867',
        'municipio': 'Vetas'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68872',
        'municipio': 'Villanueva'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68895',
        'municipio': 'Zapatoca'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70001',
        'municipio': 'Sincelejo'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70110',
        'municipio': 'Buenavista'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70124',
        'municipio': 'Caimito'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70204',
        'municipio': 'Coloso'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70221',
        'municipio': 'Coveñas'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70230',
        'municipio': 'Chalán'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70233',
        'municipio': 'El Roble'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70235',
        'municipio': 'Galeras'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70265',
        'municipio': 'Guaranda'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70400',
        'municipio': 'La Unión'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70418',
        'municipio': 'Los Palmitos'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70429',
        'municipio': 'Majagual'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70473',
        'municipio': 'Morroa'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70508',
        'municipio': 'Ovejas'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70523',
        'municipio': 'Palmito'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70678',
        'municipio': 'San Benito Abad'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70708',
        'municipio': 'San Marcos'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70713',
        'municipio': 'San Onofre'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70717',
        'municipio': 'San Pedro'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70771',
        'municipio': 'Sucre'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70823',
        'municipio': 'Tolú Viejo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73024',
        'municipio': 'Alpujarra'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73026',
        'municipio': 'Alvarado'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73030',
        'municipio': 'Ambalema'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73055',
        'municipio': 'Armero'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73067',
        'municipio': 'Ataco'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73124',
        'municipio': 'Cajamarca'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73168',
        'municipio': 'Chaparral'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73200',
        'municipio': 'Coello'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73217',
        'municipio': 'Coyaima'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73226',
        'municipio': 'Cunday'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73236',
        'municipio': 'Dolores'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73268',
        'municipio': 'Espinal'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73270',
        'municipio': 'Falan'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73275',
        'municipio': 'Flandes'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73283',
        'municipio': 'Fresno'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73319',
        'municipio': 'Guamo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73347',
        'municipio': 'Herveo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73349',
        'municipio': 'Honda'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73352',
        'municipio': 'Icononzo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73443',
        'municipio': 'Mariquita'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73449',
        'municipio': 'Melgar'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73461',
        'municipio': 'Murillo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73483',
        'municipio': 'Natagaima'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73504',
        'municipio': 'Ortega'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73520',
        'municipio': 'Palocabildo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73547',
        'municipio': 'Piedras'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73555',
        'municipio': 'Planadas'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73563',
        'municipio': 'Prado'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73585',
        'municipio': 'Purificación'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73616',
        'municipio': 'Rio Blanco'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73622',
        'municipio': 'Roncesvalles'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73624',
        'municipio': 'Rovira'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73671',
        'municipio': 'Saldaña'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73686',
        'municipio': 'Santa Isabel'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73861',
        'municipio': 'Venadillo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73870',
        'municipio': 'Villahermosa'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73873',
        'municipio': 'Villarrica'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81065',
        'municipio': 'Arauquita'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81220',
        'municipio': 'Cravo Norte'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81300',
        'municipio': 'Fortul'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81591',
        'municipio': 'Puerto Rondón'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81736',
        'municipio': 'Saravena'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81794',
        'municipio': 'Tame'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '81',
        'departamento': 'Arauca',
        'c_digo_dane_del_municipio': '81001',
        'municipio': 'Arauca'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85001',
        'municipio': 'Yopal'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85010',
        'municipio': 'Aguazul'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85015',
        'municipio': 'Chámeza'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85125',
        'municipio': 'Hato Corozal'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85136',
        'municipio': 'La Salina'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85162',
        'municipio': 'Monterrey'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85263',
        'municipio': 'Pore'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85279',
        'municipio': 'Recetor'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85300',
        'municipio': 'Sabanalarga'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85315',
        'municipio': 'Sácama'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85410',
        'municipio': 'Tauramena'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85430',
        'municipio': 'Trinidad'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85440',
        'municipio': 'Villanueva'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86001',
        'municipio': 'Mocoa'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86219',
        'municipio': 'Colón'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86320',
        'municipio': 'Orito'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86569',
        'municipio': 'Puerto Caicedo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86571',
        'municipio': 'Puerto Guzmán'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86573',
        'municipio': 'Leguízamo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86749',
        'municipio': 'Sibundoy'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86755',
        'municipio': 'San Francisco'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86757',
        'municipio': 'San Miguel'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '86',
        'departamento': 'Putumayo',
        'c_digo_dane_del_municipio': '86760',
        'municipio': 'Santiago'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91001',
        'municipio': 'Leticia'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91263',
        'municipio': 'El Encanto'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91405',
        'municipio': 'La Chorrera'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91407',
        'municipio': 'La Pedrera'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91430',
        'municipio': 'La Victoria'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91536',
        'municipio': 'Puerto Arica'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91540',
        'municipio': 'Puerto Nariño'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91669',
        'municipio': 'Puerto Santander'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '91',
        'departamento': 'Amazonas',
        'c_digo_dane_del_municipio': '91798',
        'municipio': 'Tarapacá'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94001',
        'municipio': 'Inírida'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94343',
        'municipio': 'Barranco Minas'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94663',
        'municipio': 'Mapiripana'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94883',
        'municipio': 'San Felipe'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94884',
        'municipio': 'Puerto Colombia'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94885',
        'municipio': 'La Guadalupe'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94886',
        'municipio': 'Cacahual'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94887',
        'municipio': 'Pana Pana'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '94',
        'departamento': 'Guainía',
        'c_digo_dane_del_municipio': '94888',
        'municipio': 'Morichal'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '97',
        'departamento': 'Vaupés',
        'c_digo_dane_del_municipio': '97001',
        'municipio': 'Mitú'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '97',
        'departamento': 'Vaupés',
        'c_digo_dane_del_municipio': '97161',
        'municipio': 'Caruru'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '97',
        'departamento': 'Vaupés',
        'c_digo_dane_del_municipio': '97511',
        'municipio': 'Pacoa'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '97',
        'departamento': 'Vaupés',
        'c_digo_dane_del_municipio': '97666',
        'municipio': 'Taraira'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '97',
        'departamento': 'Vaupés',
        'c_digo_dane_del_municipio': '97777',
        'municipio': 'Papunaua'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '99',
        'departamento': 'Vichada',
        'c_digo_dane_del_municipio': '99001',
        'municipio': 'Puerto Carreño'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '99',
        'departamento': 'Vichada',
        'c_digo_dane_del_municipio': '99524',
        'municipio': 'La Primavera'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '99',
        'departamento': 'Vichada',
        'c_digo_dane_del_municipio': '99624',
        'municipio': 'Santa Rosalía'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '99',
        'departamento': 'Vichada',
        'c_digo_dane_del_municipio': '99773',
        'municipio': 'Cumaribo'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18610',
        'municipio': 'San José del Fragua'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50110',
        'municipio': 'Barranca de Upía'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68524',
        'municipio': 'Palmas del Socorro'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25662',
        'municipio': 'San Juan de Río Seco'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8372',
        'municipio': 'Juan de Acosta'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50287',
        'municipio': 'Fuente de Oro'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85325',
        'municipio': 'San Luis de Gaceno'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27250',
        'municipio': 'El Litoral del San Juan'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25843',
        'municipio': 'Villa de San Diego de Ubate'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13074',
        'municipio': 'Barranco de Loba'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15816',
        'municipio': 'Togüí'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13688',
        'municipio': 'Santa Rosa del Sur'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '27',
        'departamento': 'Chocó',
        'c_digo_dane_del_municipio': '27135',
        'municipio': 'El Cantón del San Pablo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15407',
        'municipio': 'Villa de Leyva'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47692',
        'municipio': 'San Sebastián de Buenavista'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15537',
        'municipio': 'Paz de Río'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '13',
        'departamento': 'Bolívar',
        'c_digo_dane_del_municipio': '13300',
        'municipio': 'Hatillo de Loba'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '47',
        'departamento': 'Magdalena',
        'c_digo_dane_del_municipio': '47660',
        'municipio': 'Sabanas de San Angel'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '95',
        'departamento': 'Guaviare',
        'c_digo_dane_del_municipio': '95015',
        'municipio': 'Calamar'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20614',
        'municipio': 'Río de Oro'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5665',
        'municipio': 'San Pedro de Uraba'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '95',
        'departamento': 'Guaviare',
        'c_digo_dane_del_municipio': '95001',
        'municipio': 'San José del Guaviare'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15693',
        'municipio': 'Santa Rosa de Viterbo'
      },
      {
        'region': 'Región Pacífico',
        'c_digo_dane_del_departamento': '19',
        'departamento': 'Cauca',
        'c_digo_dane_del_municipio': '19698',
        'municipio': 'Santander de Quilichao'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '95',
        'departamento': 'Guaviare',
        'c_digo_dane_del_municipio': '95200',
        'municipio': 'Miraflores'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5042',
        'municipio': 'Santafé de Antioquia'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '50',
        'departamento': 'Meta',
        'c_digo_dane_del_municipio': '50680',
        'municipio': 'San Carlos de Guaroa'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '8',
        'departamento': 'Atlántico',
        'c_digo_dane_del_municipio': '8520',
        'municipio': 'Palmar de Varela'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5686',
        'municipio': 'Santa Rosa de Osos'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '5',
        'departamento': 'Antioquia',
        'c_digo_dane_del_municipio': '5647',
        'municipio': 'San Andrés de Cuerquía'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '73',
        'departamento': 'Tolima',
        'c_digo_dane_del_municipio': '73854',
        'municipio': 'Valle de San Juan'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68689',
        'municipio': 'San Vicente de Chucurí'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68684',
        'municipio': 'San José de Miranda'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '88',
        'departamento': 'Archipiélago de San Andrés, Providencia y Santa Catalina',
        'c_digo_dane_del_municipio': '88564',
        'municipio': 'Providencia'
      },
      {
        'region': 'Región Eje Cafetero - Antioquia',
        'c_digo_dane_del_departamento': '66',
        'departamento': 'Risaralda',
        'c_digo_dane_del_municipio': '66682',
        'municipio': 'Santa Rosa de Cabal'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '25',
        'departamento': 'Cundinamarca',
        'c_digo_dane_del_municipio': '25328',
        'municipio': 'Guayabal de Siquima'
      },
      {
        'region': 'Región Centro Sur',
        'c_digo_dane_del_departamento': '18',
        'departamento': 'Caquetá',
        'c_digo_dane_del_municipio': '18094',
        'municipio': 'Belén de Los Andaquies'
      },
      {
        'region': 'Región Llano',
        'c_digo_dane_del_departamento': '85',
        'departamento': 'Casanare',
        'c_digo_dane_del_municipio': '85250',
        'municipio': 'Paz de Ariporo'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '68',
        'departamento': 'Santander',
        'c_digo_dane_del_municipio': '68720',
        'municipio': 'Santa Helena del Opón'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15681',
        'municipio': 'San Pablo de Borbur'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '44',
        'departamento': 'La Guajira',
        'c_digo_dane_del_municipio': '44420',
        'municipio': 'La Jagua del Pilar'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '20',
        'departamento': 'Cesar',
        'c_digo_dane_del_municipio': '20400',
        'municipio': 'La Jagua de Ibirico'
      },
      {
        'region': 'Región Caribe',
        'c_digo_dane_del_departamento': '70',
        'departamento': 'Sucre',
        'c_digo_dane_del_municipio': '70742',
        'municipio': 'San Luis de Sincé'
      },
      {
        'region': 'Región Centro Oriente',
        'c_digo_dane_del_departamento': '15',
        'departamento': 'Boyacá',
        'c_digo_dane_del_municipio': '15667',
        'municipio': 'San Luis de Gaceno'
      }
    ];
  }
}
