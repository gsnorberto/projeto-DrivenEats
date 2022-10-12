const ad = document.querySelector('.main-course .ad');

const clicked = (category, price, id) => {
    const adSelected = document.querySelector(`.${category} .ad.selected`);
    

    if(adSelected){ // tem elemento selecionado na categoria
        adSelected.classList.remove('selected');
    } 

    document.getElementById(id).classList.add('selected');

    const selected_items = (document.querySelectorAll('.selected').length);
    if(selected_items == 3){
        document.querySelector('.button_footer').style.backgroundColor = '#3EB503';
        document.querySelector('.button_footer').removeAttribute('disabled');
    }
}

const review_order = () => {
    console.log('ok');
}