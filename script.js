const ad = document.querySelector('.main-course .ad');

const clicked = (category, price, id) => {
    const adSelected = document.querySelector(`.${category} .ad.selected`);


    if (adSelected) { // tem elemento selecionado na categoria
        adSelected.classList.remove('selected');
    }

    document.getElementById(id).classList.add('selected');

    const selected_items = (document.querySelectorAll('.selected').length);
    if (selected_items == 3) {
        document.querySelector('.button_footer').style.backgroundColor = '#3EB503';
        document.querySelector('.button_footer').removeAttribute('disabled');
    }
}

const review_order = () => {
    let foodName = 'comida teste';
    let drinkName = 'Bebida teste';
    let dessertName = 'Sobremesa teste';
    let price = '12.50';

    let text = encodeURIComponent(`
        Olá, gostaria de fazer o pedido:
        - Prato: ${foodName}
        - Bebida: ${drinkName}
        - Sobremesa: ${dessertName}
        Total: R$ ${price}
    `);

    let link = 'https://wa.me/5573988983200?text='+text;
    document.querySelector('.button_footer a').setAttribute('href', link);
}