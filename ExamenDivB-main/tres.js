function mostrar()
{
	let origen;
	let contAsia;
	let contEuropa;
	let contUsa;
	let acumAsia = 0;
	let acumEuropa = 0;
	let acumUsa = 0;
	let cantidadVacunas;
	let costoVuelo;
	let acumVuelo = 0;
	let promedio;
	let respuesta;
	let acumVacunas = 1;

	for (let i = 1; i < 10; i++) {
	cantidadVacunas = parseInt(prompt("Ingrese cantidad de vacunas recibidas: "));
	acumVacunas+= cantidadVacunas;
	if(cantidadVacunas == 0){
		cantidadVacunas = parseInt(prompt("Error. Ingrese cantidad de vacunas recibidas: "));
	}
	origen = prompt(`Ingrese origen de vuelo: "Asia", "Europa" o "Usa"`).toLowerCase();
	switch(origen){
		case "asia":
			acumAsia += acumVacunas;
			contAsia++;
			break;

		case "europa":
			acumEuropa += acumVacunas;
			contEuropa++;
			break;
		
		case "usa":
		acumUsa += acumVacunas;
		contUsa++;
		break;
	
	}
	costoVuelo = parseInt(prompt("Ingrese costo del vuelo: "));
	if (costoVuelo<1000000 || costoVuelo > 5000000){
		respuesta = parseInt(prompt("Error. Reingrese el costo del vuelo: "));
	}
	acumVuelo+= costoVuelo;
}
	if(acumVacunas > 4000000){
		alert("El total a pagar es:" +costoVuelo);
		acumVuelo = acumVuelo * 0.70;
		alert("El costo tiene un descuento del 30%, el precio final a pagar es: " +acumVuelo);
	} else if (acumVacunas > 2000000 && acumVacunas < 4000000) {
		alert("El total a pagar es: " + acumVuelo);
		acumVuelo = acumVuelo * 0.80;
		alert("El costo tiene un descuento del 20%, el precio final a pagar es: " + acumVuelo);
	} else {
		alert("El total a pagar es: " + acumVuelo);
	}

if (acumAsia > acumEuropa && acumAsia > acumUsa){
	alert("El origen que envió mayor cantidad de vacunas fue Asia, con un total de: " +acumAsia);
} else if (acumEuropa > acumAsia && acumEuropa >acumUsa){
	alert("El origen que envió mayor cantidad de vacunas fue Europa, con un total de: " + acumEuropa);
} else if (acumUsa > acumAsia && acumUsa > acumEuropa){
	alert("El origen quee nvió mayor cantidad de vacunas fue Usa con un total de: " + acumUsa);
}

promedio = acumAsia	/ 10;
alert("El promedio de vacunas llegadas de asia es de: " + promedio);

}