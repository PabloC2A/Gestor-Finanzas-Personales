document.addEventListener('DOMContentLoaded', function() {
	// Obtener todos los datos disponibles como botones y listas
	const botonIngreso = document.getElementById('añadirIngreso');
	const botonGasto = document.getElementById('añadirGasto');
	const listaIngresos = document.getElementById('listaIngresos');
	const listaGastos = document.getElementById('listaGastos');
	const indicadorFinanciero = document.getElementById('indicadorFinanciero');

	// Eventos para agregar ingresos o gastos
	botonIngreso.addEventListener('click', function() {
		agregarTransaccion('ingreso');
	});

	botonGasto.addEventListener('click', function() {
		agregarTransaccion('gasto');
	});

	// Función para agregar transacciones segun el tipo (ingreso o gasto)
	const agregarTransaccion = (tipo) => {

		const monto = parseFloat(prompt(`Ingrese el monto del ${tipo}:`));

		if (isNaN(monto)) {
			alert('Por favor, ingrese un monto válido.');
			return;
		}

		const transaccion = crearElementoTransaccion(monto, tipo);

		// Agregar a (HTML = li) la transaccion segun a que lista corresponda (listaIngreso/listaGasto)
		if (tipo === 'ingreso') {
			listaIngresos.appendChild(transaccion);
		} else {
			listaGastos.appendChild(transaccion);
		}

		// Calcular y actualizar el indicador financiero
		actualizarIndicadorFinanciero();
	};

	// Funcion para crear elementos para (HTML ul => li)
	const crearElementoTransaccion = (monto, tipo) => {
		const elementoTransaccion = document.createElement('li');
		elementoTransaccion.textContent = `${tipo.charAt(0).toUpperCase() + tipo.slice(1)}: $${monto.toFixed(2)}`;
		return elementoTransaccion;
	};

	// Funcion para calcular y actualizar el indicador financiero (Anonima)
	const actualizarIndicadorFinanciero = () => {
		const totalIngresos = obtenerMontoTotal(listaIngresos);
		const totalGastos = obtenerMontoTotal(listaGastos);
		const valorIndicador = totalIngresos - totalGastos;

		indicadorFinanciero.textContent = `$${valorIndicador.toFixed(2)}`;

		// Consejos financieros de acuerdo al estado del indicador financiero
		if (valorIndicador <= 0) {
			mostrarModal('¡Cuidado!', "Tu indicador financiero es negativo o cero. Contacta con un profesional en Finanzas");
		} else {
			if (totalGastos >= 0.5 * totalIngresos) {
				mostrarModal('Advertencia', "Tus gastos han superado el 50% de tus ingresos. Es momento de ahorrar");
			} else {
				if (totalGastos >= 0.8 * totalIngresos) {
					mostrarModal('Peligro', "Tus gastos han superado el 80% de tus ingresos. ¡Controla tus gastos, estas muy ajustado!");
				}
			}
		}
		
	};

	// Función para mostrar un modal al usuario con un titulo y mensaje para hacer de consejo financiero
    const mostrarModal = (titulo, mensaje) => {
        // Crear elementos del modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
    
        const contenidoModal = document.createElement('div');
        contenidoModal.classList.add('modal-contenido', 'p-2');
    
        const tituloModal = document.createElement('h3');
        tituloModal.textContent = titulo;
    
        const mensajeModal = document.createElement('p');
        mensajeModal.textContent = mensaje;
    
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'Cerrar';
        botonCerrar.classList.add('btn');
        botonCerrar.addEventListener('click', () => {
          document.body.removeChild(modal);
        });
    
        // Agregar elementos al modal
        contenidoModal.appendChild(tituloModal);
        contenidoModal.appendChild(mensajeModal);
        contenidoModal.appendChild(botonCerrar);
        modal.appendChild(contenidoModal);
    
        // Agregar el modal al HTML
        document.body.appendChild(modal);
    
        // Para mostrar el modal
        modal.style.display = 'flex';
      };


	// Función para calcular el dinero total de una lista (listaIngresos o listaGastos)
	const obtenerMontoTotal = (lista) => {
		return Array.from(lista.children).reduce((total, transaccion) => {
			const monto = parseFloat(transaccion.textContent.match(/\d+\.\d+/)[0]);
			return total + monto;
		}, 0);
	};

	// Cargar transacciones almacenadas al cargar la página
	document.addEventListener('DOMContentLoaded', () => {
		actualizarIndicadorFinanciero();
	});
});