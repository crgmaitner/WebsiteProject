window.addEventListener('load', initializePage)

function initializePage() {
    var clickElement1 = document.getElementById('home_button');
    clickElement1.addEventListener('click', () => goToLocation('./'))

    var clickElement2 = document.getElementById('shop_link');
    clickElement2.addEventListener('click', () => goToLocation('/shop'))

    var clickElement3 = document.getElementById('account_link');
    clickElement3.addEventListener('click', () => goToLocation('/account'))

    var clickElement4 = document.getElementById('about_link');
    clickElement4.addEventListener('click', () => goToLocation('/about'))

    var clickElement5 = document.getElementById('checkout_button');
    clickElement5.addEventListener('click', () => goToLocation('/cart'))
}