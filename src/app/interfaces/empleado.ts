export interface Empleado {
    id:string;
    nombre:string;
    apellido:string;
    telefono:string;
    rut:string;
    fechaNacimiento:string;
    direccion:{calle:string; numero:string; comuna:string;};
    activo:string;
}
