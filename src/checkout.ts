import { ProductSkuType } from './types';
import { Item } from './products';
import { Validator } from './rules';
import { products } from './data';

export class Checkout {
  /**
   * Cart Map object with set of items
   */
  private _cart: Map<ProductSkuType, Item[]>;
  /**
   * Given set of pricing rules applied to the cart
   */
  private _rules: Validator[];

  /**
   * Create a new instance of the Checkout cart
   * @param rules Optional list of pricing rules to apply
   * @returns new Checkout object
   */
  constructor(rules?: Validator[]) {
    this._rules = rules ?? [];
    this._cart = new Map<ProductSkuType, Item[]>();
  }

  /**
   * Scans a new item product to the cart
   * @param item
   */
  scan(sku: ProductSkuType): void {
    this._cart.set(sku, [...(this._cart.get(sku) ?? []), products[sku]]);
  }

  /**
   * get total price of the package
   * @returns number
   */
  total(): number {
    /**
     * Apply the pricing rules on the cart
     */
    for (const ruleCallback of this._rules) {
      this._cart = ruleCallback(this._cart);
    }
    /**
     * Calculate the total cost of the cart by going over all items inside
     */
    let cartTotalCost = 0;
    const cartItems = Array.from(this._cart.values());
    for (const items of cartItems) {
      const itemTotalCost = items.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      cartTotalCost += itemTotalCost;
    }
    return cartTotalCost;
  }
}
