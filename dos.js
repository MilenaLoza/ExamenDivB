function mostrar()
{
  let nacionalidad;
  let resultado;
  let edad;
  let cepa;
  let acumPositivos = 0;
  let acumNegativos = 0;
  let porcentajePos;
  let porcentajeNeg;
  let acumCepaD = 0;
  let acumCepaA = 0;
  let acumCepaB = 0;

    for(tripulante = 1; tripulante < 8; tripulante++){
    nacionalidad = prompt("Ingrese su nacionalidad: argentino/extranjero").toLowerCase();
    while (nacionalidad != "argentino" && nacionalidad != "extranjero"){
        nacionalidad = prompt("Error. Ingrese su nacionalidad otra vez: argentino/extranjero:").toLocaleLowerCase;
    }
    resultado = prompt("Ingrese el resultado del hisopado: positivo/negativo:").toLowerCase();
    while (resultado != "positivo" && resultado!= "negativo") {
        resultado = prompt("Error. Ingrese su resultado nuevamente: positivo/negativo").toLowerCase();   
    } if (resultado == "positivo") {
        acumPositivos = acumPositivos++;
    } else if (resultado == "negativo"){
        acumNegativos = acumNegativos++;
    }
    
    edad = prompt("Ingrese su edad -entre 18 a 65 años-:");
    while (edad < 18 || edad > 65){
        edad = prompt ("Error. Ingrese nuevamente su edad - entre 18 a 65 años- :");
    }
    cepa = prompt("Ingrese la cepa: delta/alfa/beta").toLowerCase();
    while (cepa != "delta" && cepa!= "alfa" && cepa != "beta"){
        cepa = prompt("Error. Reingrese la cepa: delta/alfa/beta").toLowerCase();
    } 
    switch(cepa){
        case "delta":
        acumCepaD = cepa + acumCepaD;
        break;

        case "alfa":
        acumCepaA = cepa + acumCepaA;
        break;

        case "beta":
        acumCepaB = cepa + acumCepaB;
        break;
    }
    }  

    porcentajePos = acumPositivos * 100  / 8 -100;
    alert("El porcentaje de hisopados positivos es del: " + porcentajePos + "%");
    porcentajeNeg = acumNegativos * 100 / 8 -100;
    alert("El procentaje de hisopados negativos es del " + porcentajeNeg + "%");

    if (acumCepaA > acumCepaB && acumCepaA > acumCepaD){
    alert("La cepa más encontrada es la Alfa, con un total de: " + acumCepaA + " casos");    
    } else if (acumCepaB > acumCepaA && acumCepaB > acumCepaD){
    alert("La cepa más encontrada es la Beta, con un total de: " + acumCepaB + " casos");
    } else if (acumCepaD > acumCepaA && acumCepaD > acumCepaB){
    alert ("La cepa más encontrada es la Delta, con un total de: " + acumCepaD + " casos");
}

while (nacionalidad == "extranjero" && resultado == "positivo"){
alert("La edad del mayor extranjero contagiado es de: ");
}

while (nacionalidad == "argentino" && cepa == "delta"){
    alert("La cantidad de personas argentinas contagiadas con la delta es de: " + acumCepaD); 
}

}

   //INFORMAR:
   //D- EDAD DEL MAYOR EXTRANJERO CONTAGIADO
   //E- CANTIDAD DE PERSONAS ARGENTINAS CONTAGIADAS CON LA DELTA
