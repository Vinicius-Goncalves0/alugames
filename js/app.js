function alterarStatus(id){
    let gameId = document.getElementById(`game-${id}`)
    let image = gameId.querySelector('.dashboard__item__img'); /* o '.class' recupera um elemento na classe HTML */
    let button = gameId.querySelector('.dashboard__item__button');

    if(button.classList.contains('dashboard__item__button--return')){
        image.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
    } else {
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }
}