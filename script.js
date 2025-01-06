let semanas = 0;
let meses = 0;

document.getElementById('agregar-ahorro').addEventListener('click', function() {
    const ahorroDia = document.getElementById('ahorro-dia').value;
    
    // Verificar si se ingresó un valor
    if (ahorroDia !== "") {
        const historialLista = document.getElementById('historial-lista');
        
        // Crear nuevo item en el historial
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = `Día ${historialLista.children.length + 1}: $${ahorroDia}`;
        historialLista.appendChild(nuevoElemento);
        
        // Sumar al total semana y mes
        let totalSemana = document.getElementById('total-semana').textContent.replace('$', '');
        let totalMes = document.getElementById('total-mes').textContent.replace('$', '');
        
        totalSemana = parseFloat(totalSemana) + parseFloat(ahorroDia);
        totalMes = parseFloat(totalMes) + parseFloat(ahorroDia);
        
        // Actualizar los totales
        document.getElementById('total-semana').textContent = `$${totalSemana}`;
        document.getElementById('total-mes').textContent = `$${totalMes}`;
        
        // Limpiar el campo de entrada
        document.getElementById('ahorro-dia').value = '';
    } else {
        alert('Por favor, ingresa un monto válido.');
    }
});

document.getElementById('finalizar-semana').addEventListener('click', function() {
    // Sumar una semana
    semanas++;
    if (semanas % 4 === 0) {
        meses++; // Cada 4 semanas incrementa un mes
    }

    // Actualizar contador de semanas y meses
    document.getElementById('contador-semanas').textContent = `Semanas Ahorrando: ${semanas}`;
    document.getElementById('contador-meses').textContent = `Meses Ahorrando: ${meses}`;
    
    alert('Semana Finalizada. Los ahorros se han sumado para el mes.');
    
    // Resetear el total de la semana
    document.getElementById('total-semana').textContent = "$0";
});

