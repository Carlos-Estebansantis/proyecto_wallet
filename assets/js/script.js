$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    // Verificar las credenciales
    if (username === 'esantis' && password === '12345') {
      // Credenciales válidas, redirigir a la pantalla de wallet
      window.location.href = 'menu.html';
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
      window.location.href = 'login.html';
    }
  });
});


$(document).ready(function () {
  var balance = 0;

  function updateBalance() {
    $('#balance').text(balance.toFixed(2));
  }

  $('#depositBtn').click(function () {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $('#amount').val('');
      alert('Deposit realizado!');
    } else {
      alert('Monto invalido. Por favor ingrese un número positivo.');
    }
  });

  $('#withdrawBtn').click(function () {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      $('#amount').val('');
      alert('Retiro exitoso!');
    } else {
      alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
    }
  });
});



