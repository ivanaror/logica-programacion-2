console.log("Hola Mundo, sirve para saber que me conecto")
//Funciona, pero no me gusta del todo, es el primer intento de hacerlo
let GradosC = Number(prompt("Dame un número"));
let GradosF;
let GradosK;

//     while(true){
//     if(isNaN(GradosC)){
//         alert('No me diste un número, dame un numero por favor')
//         GradosC = Number(prompt("Dame un número"));
//     }else{
//         GradosK = (GradosC + 273.15);
//         GradosF = (GradosC * 1.8) + 32;
//         console.log(`Tenias como grado Celcius ${GradosC} pero al al convertirlo a grados Kelvin tenemos ${GradosK}`);
//         console.log(`Tenias como grado Celcius ${GradosC} pero al al convertirlo a grados Fahrenheit tenemos ${GradosF}`);
//         break;
// }
//     }


    //Segundo intento de hacerlo bien



    while(isNaN(GradosC)){
        GradosC = Number(prompt("Dame un número"));
    }
    GradosK = (GradosC + 273.15);
        GradosF = (GradosC * 1.8) + 32;
        console.log(`Tenias como grado Celcius ${GradosC} pero al al convertirlo a grados Kelvin tenemos ${GradosK}`);
        console.log(`Tenias como grado Celcius ${GradosC} pero al al convertirlo a grados Fahrenheit tenemos ${GradosF}`);