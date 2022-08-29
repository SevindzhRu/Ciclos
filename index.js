for(let i = 1; i <= 15; i++){
    console.log(i)
}

console.log("Fin del ciclo")

let x = prompt("Ingrese un dato (ESC para salir)")

while(x.toUpperCase() != "ESC"){
    alert("El usuario ingreso: "+ x)
    x = prompt("Ingrese otro dato")
}

do{
nombre = prompt("Ingresar un nombre")
if(nombre != ""){
alert("El nombre ingresado es: "+ nombre)
}
}while(nombre !="")

let seleccionUsuario = parseInt(
    prompt(
        "Donde desea viajar: \n 1. Barcelona \n 2. Miami \n 3. Buenos Aires \n 4. Moscu"
    )
);