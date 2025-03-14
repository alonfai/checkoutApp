import { Checkout } from './checkout';
import { products, rules } from './data';

describe('checkout different scenarios', () => {
  it('SKUs Scanned: atv, atv, atv, vga => returns $249.00', () => {
    // create the checkout cart
    const co = new Checkout(products, rules);

    // add items to the cart
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    // validate the total price is correct
    expect(co.total()).toEqual(249);
  });

  it('SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd => returns $2718.95', () => {
    // create the checkout cart
    const co = new Checkout(products, rules);

    // add items to the cart
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');

    // validate the total price is correct
    expect(co.total()).toEqual(2718.95);
  });

  it('SKUs Scanned: mbp, vga, ipd => returns $1949.98', () => {
    // create the checkout cart
    const co = new Checkout(products, rules);

    // add items to the cart
    co.scan('mbp');
    co.scan('vga');
    co.scan('ipd');

    // validate the total price is correct
    expect(co.total()).toEqual(1949.98);
  });
});
