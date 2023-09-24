function contadorDeVisualizacoes() {

    // Obtém o elemento HTML que exibirá o contador
    const contadorElemento = document.getElementById('contador');
  
    // Obtém o número atual de visualizações do post
    let visualizacoes = parseInt(contadorElemento.innerText);
  
    // Incrementa o número de visualizações
    visualizacoes++;
  
    // Atualiza o elemento HTML com o novo número de visualizações
    contadorElemento.innerText = visualizacoes.toString();
  }