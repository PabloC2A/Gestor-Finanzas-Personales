let ingresos = [];
let gastos = [];

// Funcion para almacenar los ingresos
document.getElementById('añadirIngreso').addEventListener('click', function (event) {
    event.preventDefault();
  
    const montoIngreso = parseFloat(document.getElementById('montoIngreso').value);
    const descripcionIngreso = document.getElementById('descripcionIngreso').value;
  
    // Validar que el monto sea un número válido
    if (!isNaN(montoIngreso) && montoIngreso > 0) {
      ingresos.push({ monto: montoIngreso, descripcion: descripcionIngreso });
      actualizarInterfaz();
    } else {
      alert('Por favor, ingrese un monto válido.');
    }
});


// Funcion para almacenar los gastos
document.getElementById('añadirGasto').addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    const montoGasto = parseFloat(document.getElementById('montoGasto').value);
    const descripcionGasto = document.getElementById('descripcionGasto').value;
  
    // Validar que el monto sea un número válido
    if (!isNaN(montoGasto) && montoGasto > 0) {
      gastos.push({ monto: montoGasto, descripcion: descripcionGasto });
      actualizarInterfaz();

    } else {
      alert('Por favor, ingrese un monto válido.');
    }
});

// Funcion para actualizar View
function actualizarInterfaz() {
    document.getElementById('ingresosUsuario').innerText = calcularTotal(ingresos) + "$";
    document.getElementById('gastosUsuario').innerText = calcularTotal(gastos) + "$";
    document.getElementById('indicardorFinanciero').innerText = calcularIndicadorFinanciero() + "$";
}

//Funcion para el indicador financiero
function calcularIndicadorFinanciero() {
    return calcularTotal(ingresos) - calcularTotal(gastos);
}

// Función para calcular el total de una lista de registros
function calcularTotal(registros) {
  return registros.reduce((total, registro) => total + registro.monto, 0);
}