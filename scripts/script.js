document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.btn-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
            // Here you can add the item to a local cart (localStorage/sessionStorage, for example) 
            // and then redirect the user or update a cart count on the page without redirecting.
        });
    });
});
