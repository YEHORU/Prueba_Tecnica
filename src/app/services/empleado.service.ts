import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Empleado } from './../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private api = 'https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf';

  constructor(
    private http:HttpClient
  ) { }

  // Funciones empleados----------------------------------------------
    getAllEmpleados(){
      const path = `${this.api}/user/`;
      return this.http.get<Empleado[]>(path);
    }

    getEmpleado(id:string) {
      const path = `${this.api}/user/${id}`;
      return this.http.get<Empleado>(path);
    }

}
