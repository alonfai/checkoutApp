import { ProductSkuType, RuleKeyType } from './types';
import { Item } from './products';
import { Rules, Validator } from './rules';

/**
 * returns List of pre-defined products in the system
 */
export function initProducts(): Record<ProductSkuType, Item> {
  return {
    mbp: {
      name: 'MacBook Pro',
      sku: 'mbp',
      price: 1399.99,
    },
    ipd: {
      name: 'Super iPad',
      sku: 'ipd',
      price: 549.99,
    },
    atv: {
      name: 'Apple TV',
      sku: 'atv',
      price: 109.5,
    },
    vga: {
      name: 'VGA adapter',
      sku: 'vga',
      price: 30.0,
    },
  };
}

/**
 * returns List of pre-defined pricing rules in the system
 */
export function initPricingRules(): Map<RuleKeyType, Validator> {
  const pricingRules = new Rules();

  //define the logic for each of the pre-defined set of pricing rules

  // 3 for 2 deal on Apple TVs
  pricingRules.add('THREE_FOR_TWO_ON_ATV', (cart) => {
    const appleTvItems = cart.get('atv');
    if (appleTvItems) {
      const quotientItems = Math.floor(appleTvItems.length / 2) * 2;
      cart.set('atv', appleTvItems.slice(0, quotientItems));
    }
    return cart;
  });

  // Super iPad discount bulk if buy more than 4
  pricingRules.add('SUPER_IPAD_DISCOUNT_BULK', (cart) => {
    const ipadItems = cart.get('ipd');
    if (ipadItems && ipadItems.length > 4) {
      const discountedItems = ipadItems.map((item) => ({ ...item, price: 499.99 }));
      cart.set('ipd', discountedItems);
    }
    return cart;
  });

  // Free VGA adapter on MacBook Pro
  pricingRules.add('FREE_VGS_ADAPTER_ON_MBP', (cart) => {
    const mbpItems = cart.get('mbp');
    if (mbpItems) {
      const vgaItems = cart.get('vga');
      const vgaCount = vgaItems ? vgaItems.length : 0;
      const freeVgaItems = vgaItems ? vgaItems.slice(0, Math.min(vgaCount, mbpItems.length)) : [];
      cart.set('vga', vgaItems ? vgaItems.slice(freeVgaItems.length) : []);
    }
    return cart;
  });

  /**
   * List of pre-defined rules in the system
   */
  return pricingRules._rules;
}

const products = initProducts();
const rules = Array.from(initPricingRules().values());

export { products, rules };
