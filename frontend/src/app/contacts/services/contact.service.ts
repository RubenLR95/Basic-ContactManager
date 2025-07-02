import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  //IMPORTA EL injectable PARA QUE ANGULAR SEPA QUE ESTA CLASE ES UN SERVICIO
import { Observable } from 'rxjs';
// DEFINICION DE LA INTERFAZ CONTACT CON LOS CAMBIOS DE CONTACTO

export interface Contact{
  id?: number; //ID opcional (JSON server lo genera automáticamente al crear) EN TYPESCRIPT COLOCAMOS "?" PARA INDICAR QQUE EL CAMPO PUEDE ESTAR AUSENTE
  name: string; //NOMBRE DE CONTACTO (INDICAR REQUIRED EN HTML)
  email: string; //EMAIL DE CONTACTO (INDICAR EN EL HTML QUE ES OBLITORIO)
  phone?: string; //TELÉFONO (OPCIONAL)
}



@Injectable({    //MARCA LA CLASE ESPECIFICADA EN LA SIGUIENTE LINEA COMO UN SERVICIO INJECTABLE EN TODA LA APP
  providedIn: 'root'
})


export class ContactService {

  private api = 'http://localhost:3001/contacts'  //URL BASE DE LA API JSON SERVER DONDE SE GSTIONAN LOS CONTACTOS


  constructor(private http: HttpClient) { }       // INYECTA HTTPCLIENT PARA PODER USAR MÉTODOS HTTP DENTRO DEL SERVICIO


  getAll(): Observable<Contact[]>{   //OBTIENE TODOS LOS CONTACTOS. CON Observable QUE EMITE UN ARRAY DE CONTACT
    return this.http.get<Contact[]>(this.api);
  }
  add(c: Contact): Observable<Contact>{   // AÑADE UN NUEVO CONTACTO USANDO c: Contact. Observable EMITE EL Contact CREADO
    return this.http.post<Contact>(this.api, c);
  }
  update(c: Contact): Observable<Contact>{    //ACTUALIZA UN CONTACTO EXISTENTE. ES DECIR, PERMITE Y OBTIENE MODIFICACIONES EN LOS CONTACTOS POR PARTE DEL USUARIO
    return this.http.put<Contact>(`${this.api}/${c.id}`, c);
  }
  delete(id: number): Observable<void>{       //ELIMINA EL CONTACTO ELEGIDO TOMANDO COMO REFERENCIA SU ID
    return this.http.delete<void>(`${this.api}/${id}`);
  }
 

}
