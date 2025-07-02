import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),    // REEMPLAZA LA DETECCION DE CAMBIOS CLASICA POR UNA BASADA EN ZONAS DE MUKTIPLES EVENTOS PARA MEJORAR EL RENDIMIENTO
    provideRouter(routes),                                    // SE ENCARGA DEL ENRUTAMIENTO DE LOS ELEMENTOS DE NUESTRO ANGULAR
    provideHttpClient(),                                      // EN CASO DE ESTE PROYECTO, ESTE COMPONENTE ES NECESARIO PARA REGISTRAR LOS HTTP CLIENT EN EL INYECTOR GLOBAL, HACIENDO POSIBLE INYECTARLO EN SERVICIOS Y COMPONENTES
  ]
};
