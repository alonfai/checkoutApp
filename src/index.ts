import { Checkout } from './checkout';
import { PRODUCT_NAMES } from './types';
import { products, rules } from './data';

console.log('Creating a cart with a pre-defined price rules');
const co = new Checkout(products, rules);

console.log(`Adding item ${PRODUCT_NAMES.atv}`);
co.scan('atv');

console.log(`Adding item ${PRODUCT_NAMES.atv}`);
co.scan('atv');

console.log(`Adding item ${PRODUCT_NAMES.atv}`);
co.scan('atv');

console.log(`Adding item ${PRODUCT_NAMES.vga}`);
co.scan('vga');

console.log('Total price for the cart: $', co.total());
