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
    const selected_items = document.querySelectorAll('.selected');
    console.log(selected_items);

    let foodInfoArray = (selected_items[0].innerText).split("\n");
    let drinkInfoArray = (selected_items[1].innerText).split("\n");
    let dessertInfoArray = (selected_items[2].innerText).split("\n");

    const price1 = Number(foodInfoArray[2].replace("R$ " , "").replace(',' , "."));
    const price2 = Number(drinkInfoArray[2].replace("R$ " , "").replace(',' , "."));
    const price3 = Number(dessertInfoArray[2].replace("R$ " , "").replace(',' , "."));
    console.log(price1+price2+price3);
    

    let price = (price1 + price2 + price3).toFixed(2);

    let text = encodeURIComponent(`
        Olá, gostaria de fazer o pedido:
        - Prato: ${foodInfoArray[0]}
        - Bebida: ${drinkInfoArray[0]}
        - Sobremesa: ${dessertInfoArray[0]}
        Total: R$ ${price}
    `);

    let link = 'https://wa.me/5573988983200?text='+text;
    document.querySelector('.button_footer a').setAttribute('href', link);
}