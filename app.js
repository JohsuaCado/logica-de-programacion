//variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario= 0;
let intentos =1;
let maximosintentos =3;
while (numeroUsuario != numeroSecreto){
    numeroUsuario=parseInt(prompt ('Indicar un numero entre el el 1 y el 10:'));
    /*este codigo realiza la comparacion*/ 
    console.log(numeroUsuario);
    if (numeroUsuario==numeroSecreto){
        alert(`Acertaste, el numero es:${numeroUsuario} Lo hicistes ${intentos} ${intentos ==1? 'vez':'veces'}`);
    }else{
        if (numeroUsuario>numeroSecreto){
            alert('El numero es menor');
        }else {
            alert('El numero es mayor');
        }
        intentos ++;
        if (intentos >maximosintentos){
            alert(`Has escedido los numeros de ${maximosintentos} intentos`);
            break;
        }
        //alert ('Numero incorrecto');
    }
}