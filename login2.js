let login = [];
let usuario;
let pass;
let salir = true;
registro();
iniciarSesion();

function registro() {
	if (confirm('Bienvenido a nuestra web. Deseas Registrarte?')) {
		do {
			usuario = prompt('Ingrese nombre de Usuario:');
			if (usuario === null) {
				salir = false;
			} else {
				if (usuario.length > 3) {
					pass = prompt('Ingrese una contraseña:');
					if (pass === null) {
						salir = false;
					} else {
						usuario = usuario.toLocaleLowerCase();
						if (pass.length > 6) {
							login[usuario] = pass;
							alert('Usuario creado correctamente');
							console.log('Usuario: ' + usuario + ' Contraseña:' + login[usuario]);
							salir = false;
						} else {
							alert('Contraseña incorrecta. ingrese los datos nuevamente');
						}
					}
				} else {
					alert('El usuario debe tener al menos 4 caracteres');
				}
			}
		} while (salir === true);
		salir = true;
	}
}

function iniciarSesion() {
	if (confirm('Deseas Iniciar Sesion?')) {
		do {
			usuario = prompt('Ingrese nombre de Usuario:');
			if (usuario === null) {
				salir = false;
			} else {
				usuario = usuario.toLocaleLowerCase();
				pass = prompt('Ingrese la contraseña:');
				if (pass === null) {
					salir = false;
				} else {
					if (login[usuario] == pass) {
						alert('Iniciaste sesion correctamente');
						salir = false;
					} else {
						if (!confirm('Usuario o contraseña incorrecto. Desea vovler a intentarlo?')) {
							salir = false;
						}
					}
				}
			}
		} while (salir == true);
		salir = false;
	}
}
