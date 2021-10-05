let login = [];

let usuario;
let pass;
let salir = true;

do{
    if(!confirm("presione cancelar para salir")){
        alert("saliste correctamente");
        salir = false;
    }
}while(salir == true);

if(confirm("Bienvenido a nuestra web. Deseas Registrarte?")){

    console.log(prompt("Ingrese nombre de Usuario:").toLocaleLowerCase());
    usuario = prompt("Ingrese nombre de Usuario:").toLocaleLowerCase();
    if(usuario.length > 3){
        pass= prompt("Ingrese una contraseña:");
        if(pass.length>6){
            login[usuario]=pass;
        }else{
            pass= prompt("La contraseña debe tener al menos 6 caracteres. Ingrese una contraseña:");
            if(pass.length>6){
                login[usuario]=pass;
            }else{
                alert("No ingresaste una contraseña valida");            
            }            
        } 
    }else {
        usuario = prompt("El usuario debe tener mas de 3 caracteres. Ingrese nombre de Usuario:").toLocaleLowerCase();
        if(usuario.length > 3){
            pass= prompt("Ingrese una contraseña:");
            if(pass.length>6){
                login[usuario]=pass;
            }else{
                pass= prompt("La contraseña debe tener al menos 6 caracteres. Ingrese una contraseña:");
                if(pass.length>6){
                    login[usuario]=pass;
                }else{
                    alert("No ingresaste una contraseña valida");            
                }            
            }
        }else {
            alert("No ingresaste un usuario valido");
        }
    }
    alert("Usuario creado correctamente");
    console.log(usuario.toLocaleLowerCase() + " " +login[usuario.toLocaleLowerCase()]);
}
if(confirm("deseas iniciar seesion?")){
    usuario = prompt("Ingrese nombre de Usuario:").toLocaleLowerCase();
    pass= prompt("Ingrese la contraseña:");
    console.log(login[usuario]);
    console.log(pass);
    if(login[usuario] == pass){
        alert("Iniciaste sesion correctamente");
    }else{
        if(confirm("usuario o contraseña incorrecto. Desea volver a intentarlo?")){
            usuario = prompt("Ingrese nombre de Usuario:").toLocaleLowerCase();
            pass= prompt("Ingrese la contraseña:");
            if(login[usuario] = pass){
                alert("Iniciaste sesion correctamente");
            }else{
                alert("Usuario no logueado");
            }
        }else{
            alert("Usuario no logueado");
        }
    }
                
}
