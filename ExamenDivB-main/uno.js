
function mostrar()
{
//declaro variables	
let nombre;
let edad;
let vacuna;
let contVacRusa = 0;
let contVacChina = 0;
let contVacUsa = 0;
let acumVacRusa = 0;
let acumVacChina = 0;
let acumVacAmericana = 0;
let dosis;
let primeraDosis;
let segundaDosis;
let sexo;
let respuesta;
let mayorEdad;
let totalVacunados;
let promedio;
//mientras el usuario quiera bucle do while
// de cada vacunado se solicita:
// nombre (entre 3 y 10 caracteres)
do {
nombre = prompt("Ingrese el nombre del vacunado: ");
while(nombre!=(nombre.length <=3 && nombre.length >=10)){
nombre  = prompt("Error. Ingrese el nombre - entre 3 a 10 caracteres-:")
}
edad = parseInt(prompt("Ingrese la edad del vacunado"));
if (edad < 12){
	respuesta = prompt("Edad incorrecta. Ingrese nuevamente la edad del vacunado.");
	vacuna = prompt("Ingrese si la vacuna dada fue rusa, china o americana").toLowerCase();
} else if (edad<= 17 && edad>= 12){
	edad = prompt("Solo puede ingresar vacuna americana");
}
switch(vacuna){
	case "rusa":
contVacRusa++;
acumVacRusa = contVacRusa + acumVacRusa;
		break;
	case "china":
		contVacChina++;
		acumVacChina = contVacChina + acumVacChina
		break;

	case "americana":
		contVacUsa++;
		acumVacAmericana = contVacUsa + acumVacAmericana
}
dosis = prompt(`Ingrese si es su primera dosis "p" y si es su segunda dosis "s":`).toLowerCase();
while (dosis != "p" && dosis != "s"){
	dosis = prompt ("Error. Reingrese si la dosis es primera (p) o segunda (s)");
}

sexo = prompt(`Ingrese el sexo del vacunado: "f" o "m"`).toLowerCase();
while (sexo != "m" && sexo!= "f"){
	sexo = prompt(`Error. Ingrese el sexo: "f" o "m"`).toLowerCase();
}
respuesta = prompt("Desea registrar más datos?: ");
} while (respuesta = "s");


totalVacunados = acumVacAmericana + acumVacChina + acumVacRusa

//edad >= 12 
//vacuna: rusa - china - americana
// si la edad esta entre 12 y 17 inclusive solo se permite
//la vacuna americana
//dosis (p en caso de ser primera dosis o s en caso de ser segunda dosis)
//sexo f o m
//informar:
//a-promedio de edad de los que se vacunaron con la rusa
//b-nombre y vacunad de las mjeres con más edad
//c- de las personas que reciieron la vacuna americana, que porcentaje son mayores de edad
//d- porcentaje de los que estan vacunados con 2 dosis sobre el total de vacunados
//e- vacuna menos inoculada
}
