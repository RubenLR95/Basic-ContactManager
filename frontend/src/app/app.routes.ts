import { Routes } from '@angular/router';      // IMPORTAMOS EL TIPO route PARA DEFINIR RUTAS EN ANGULAR
import { ContactListComponent } from './contacts/components/contact-list/contact-list.component';
import { ContactAddComponent } from './contacts/components/contact-add/contact-add.component';

export const routes: Routes = [              // DEFINIMOS EL ARRAY DE RUTAS EN LA APLICACION
    { path: '', redirectTo: 'contacts', pathMatch: 'full'},  //NOS CREA UNA RUTA RAIZ VACÍA, PARA QUE NO REDIRIJA A CONTACTS. Y EL pathMatch: 'full' INDICA QUE LA URL DEBE COINCIDIR EXACTAMENTE CON '' 
    { path: 'contacts', component: ContactListComponent},  //MUESTRA LA LISTA DE CONTACTOS. 
    { path: 'contacts/add', component: ContactAddComponent}, // ME MUESTRA EL FORMULARIO PARA AÑADIR EL CONTACTO
    { path: '**', redirectTo: 'contacts'}   //RUTA COMODÍN: CAPTURA CUALQUIER URL NO DEFINIDA Y REDIRIJE A CONTACTS
];       
