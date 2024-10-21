import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'Cart/CartShow';

console.log('Container!');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));