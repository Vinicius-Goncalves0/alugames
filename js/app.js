function alterarStatus(id){

    let jogosAlugados = 0;
    let gameId = document.getElementById(`game-${id}`)
    let image = gameId.querySelector('.dashboard__item__img'); /* o '.class' recupera um elemento na classe HTML. */
 let button = gameId.querySelector('.dashboard__item__button');

 function contarBotoesDevolver() {
     const lista = document.querySelector('.dashboard__items');
     const botoesDevolver = lista.querySelectorAll('.dashboard__item__button--return');
     return botoesDevolver.length;
 }


 if(button.classList.contains('dashboard__item__button--return')){

     if (!confirm('Você confirma a entrega do jogo?')) {
         return;
     }

     image.classList.remove('dashboard__item__img--rented');
     button.classList.remove('dashboard__item__button--return');
     button.textContent = 'Alugar';
     const quantidade = contarBotoesDevolver();
     console.log(`Jogos Alugados no momento: ${quantidade}`);
 } else {

     if (!confirm('Você confirma o aluguel do jogo?')) {
         return;
     }
     image.classList.add('dashboard__item__img--rented');
     button.classList.add('dashboard__item__button--return');
     button.textContent = 'Devolver';
     const quantidade = contarBotoesDevolver();
     console.log(`Jogos Alugados no momento: ${quantidade}`);
 }

}