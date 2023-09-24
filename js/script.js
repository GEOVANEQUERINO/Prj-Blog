// Verifica se já existe um contador no local storage
if (localStorage.getItem('counter1')) {
  // Se existir, obtém o valor atual do contador da div 1
  var count1 = parseInt(localStorage.getItem('counter1'));
} else {
  // Se não existir, inicia o contador da div 1 com 0
  var count1 = 0;
}

if (localStorage.getItem('counter2')) {
  // Se existir, obtém o valor atual do contador da div 2
  var count2 = parseInt(localStorage.getItem('counter2'));
} else {
  // Se não existir, inicia o contador da div 2 com 0
  var count2 = 0;
}

if (localStorage.getItem('counter3')) {
  // Se existir, obtém o valor atual do contador da div 3
  var count3 = parseInt(localStorage.getItem('counter3'));
} else {
  // Se não existir, inicia o contador da div 3 com 0
  var count3 = 0;
}

if (localStorage.getItem('counter4')) {
  // Se existir, obtém o valor atual do contador da div 4
  var count4 = parseInt(localStorage.getItem('counter4'));
} else {
  // Se não existir, inicia o contador da div 4 com 0
  var count4 = 0;
}

// Adiciona um evento de clique à div 1
document.getElementById('elemento_post1').addEventListener('click', function() {
  // Incrementa o contador da div 1
  count1++;
  // Armazena o novo valor do contador da div 1 no local storage
  localStorage.setItem('counter1', count1.toString());
  // Atualiza o valor do contador da div 1 na página
  var counterElement = document.getElementById('counter1');
  if (counterElement) {
    counterElement.textContent = count1;
  }
});

// Adiciona um evento de clique à div 2
document.getElementById('elemento_post2').addEventListener('click', function() {
  // Incrementa o contador da div 2
  count2++;
  // Armazena o novo valor do contador da div 2 no local storage
  localStorage.setItem('counter2', count2.toString());
  // Atualiza o valor do contador da div 2 na página
  var counterElement = document.getElementById('counter2');
  if (counterElement) {
    counterElement.textContent = count2;
  }
});

// Adiciona um evento de clique à div 3
document.getElementById('elemento_post3').addEventListener('click', function() {
  // Incrementa o contador da div 3
  count3++;
  // Armazena o novo valor do contador da div 3 no local storage
  localStorage.setItem('counter3', count3.toString());
  // Atualiza o valor do contador da div 3 na página
  var counterElement = document.getElementById('counter3');
  if (counterElement) {
    counterElement.textContent = count3;
  }
});

// Adiciona um evento de clique à div 4
document.getElementById('elemento_post4').addEventListener('click', function() {
  // Incrementa o contador da div 4
  count4++;
  // Armazena o novo valor do contador da div 4 no local storage
  localStorage.setItem('counter4', count4.toString());
  // Atualiza o valor do contador da div 4 na página
  var counterElement = document.getElementById('counter4');
  if (counterElement) {
    counterElement.textContent = count4;
  }  
});

// função para validar e-mail
function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function verificarEmail() {
  var email = document.getElementById("emailInput").value;
  if (validarEmail(email)) {
    alert("Cadastro com sucesso!");
  } else {
    alert("E-mail não válido.");
  }
}




