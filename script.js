let selected_items = [];

let foodInfoArray = [];
let drinkInfoArray = [];
let dessertInfoArray = [];

let price1 = 0;
let price2 = 0;
let price3 = 0;
let totalPrice = 0;

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
    selected_items = document.querySelectorAll('.selected');

    // Get item information: title, description and price
    foodInfoArray = (selected_items[0].innerText).split("\n");
    drinkInfoArray = (selected_items[1].innerText).split("\n");
    dessertInfoArray = (selected_items[2].innerText).split("\n");

    // price formatting - R$ 2,00 -> 2.00
    price1 = Number(foodInfoArray[2].replace("R$ ", "").replace(',', ".")).toFixed(2);
    price2 = Number(drinkInfoArray[2].replace("R$ ", "").replace(',', ".")).toFixed(2);
    price3 = Number(dessertInfoArray[2].replace("R$ ", "").replace(',', ".")).toFixed(2);

    //console.log(typeof(price1));
    totalPrice = (Number(price1) + Number(price2) + Number(price3)).toFixed(2);

    // insert food name and price in confirmation box
    document.querySelector('.item-1 .item-title').innerHTML = `${foodInfoArray[0]}`;
    document.querySelector('.item-1 .item-price').innerHTML = price1.toString().replace('.', ',');
    document.querySelector('.item-2 .item-title').innerHTML = `${drinkInfoArray[0]}`;
    document.querySelector('.item-2 .item-price').innerHTML = price2.toString().replace('.', ',');
    document.querySelector('.item-3 .item-title').innerHTML = `${dessertInfoArray[0]}`;
    document.querySelector('.item-3 .item-price').innerHTML = price3.toString().replace('.', ',');
    document.querySelector('.order-total-price .item-price').innerHTML = `R$ ${totalPrice.toString().replace('.', ',')}`;

    document.querySelector('.box-background').style.display = 'block';
}

const confirm_order = () => {
    let userName = prompt('Qual seu nome?');
    let address = prompt('Qual seu endereço?');

    let text = encodeURIComponent(`
        Olá, gostaria de fazer o pedido:
        - Prato: ${foodInfoArray[0]}
        - Bebida: ${drinkInfoArray[0]}
        - Sobremesa: ${dessertInfoArray[0]}
        Total: R$ ${totalPrice}

        Nome: ${userName}
        Endereço: ${address}
    `);

    let link = 'https://wa.me/5573988983200?text=' + text;
    document.querySelector('.button_box a').setAttribute('href', link);
}

const close_box = () => {
    document.querySelector('.box-background').style.display = 'none';
}