import { Component } from '@angular/core';
import { EmpleadoService } from './services/empleado.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba_Tecnica';
  columnas: string[] = ['id', 'nombre', 'apellido'];
  public empleados:Array<any> = []
  dataSource:any;

  id:any;
  nombre:any;
  apellido:any;
  telefono:any;
  rut:any;
  fechanacimiento:any;
  direccion:any;
  calle:any;
  numero:any;
  comuna:any;
  activo:any;


  oculto:boolean = false;

  diamalo:string = "";
  mesmalo:string = "";
  aniomalo:string = "";

  rutmalo:string = "";

  constructor(
    private empleadoService: EmpleadoService
    ){}

  getAllEmpleados() {
    this.empleadoService.getAllEmpleados()
    .subscribe(empleado => {
      console.log(empleado)
    });
  }

  getEmpleados(id:string) {
    this.empleadoService.getEmpleado(id)
    .subscribe(empleado => {
      console.log(empleado)
    });
  }

  ngOnInit(){
    this.empleadoService.getAllEmpleados()
    .subscribe((resp:any)=>{
      this.dataSource = new MatTableDataSource(resp);
    })

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

  viewDataEmpleados(empleado:any){
    this.diamalo = "";
    this.mesmalo = "";
    this.aniomalo = "";
    this.rutmalo = "";


    this.id = empleado.id
    this.nombre = empleado.nombre
    this.apellido = empleado.apellido
    this.telefono = empleado.telefono

    this.rut = empleado.rut
    this.rutValidation(this.rut)
    
    this.fechanacimiento = empleado.fechaNacimiento
    this.dateValidation(this.fechanacimiento)

    this.direccion = empleado.direccion
    this.calle = empleado.direccion.calle
    this.numero = empleado.direccion.numero
    this.comuna = empleado.direccion.comuna
    if (empleado.activo == 1){
      this.activo = "Si"
    } 
    else{
      this.activo = "No"
    }
    this.oculto = true
  }

  dateValidation(fecha:string){
    var f1 = fecha.substr(0, 2);     
    var f2 = fecha.substr(3, 2);     
    var f3 = fecha.substr(6);
    if (parseInt(f1)>31 || parseInt(f1)<1) {
      this.diamalo = "Error en el día"
    }
    if (parseInt(f2)>12 || parseInt(f2)<1) {
      this.mesmalo = "Error en el mes"
    }
    if (f3.length!=4) {
      this.aniomalo = "Error en el año"
    }

  }

  //Se realizó de todas manera un validador, pero no se encuentra ningún error en los RUT's
  rutValidation(rut:string){
    var r1 = rut.length

    if (r1>10 || r1<9) {
      this.rutmalo = "Rut fuera del formato"
    }
  }
}
