import { ProductSkuType, RuleKeyType } from './types';
import { Item } from './products';

/**
 * Validates an input cart against a given pricing rule and return the updated cart after price adjustments.
 * Note: this method is immutable and not changing the original cart
 */
export type Validator = (cart: Map<ProductSkuType, Item[]>) => Map<ProductSkuType, Item[]>;

/**
 * Wrapper for keeping all different pricing special rules
 */
export class Rules {
  /**
   * List of pricing rules
   */
  readonly _rules: Map<RuleKeyType, Validator>;

  constructor() {
    this._rules = new Map<RuleKeyType, Validator>();
  }

  /**
   * Adds a new pricing rule to the system
   * @param name unique key for the rule
   * @param validator callback to run cart check and price updates
   */
  add(name: RuleKeyType, validator: Validator) {
    this._rules.set(name, validator);
  }

  /**
   * Remove a pricing rule from the system
   * @param name key of price ruling to remove from list
   */
  remove(name: RuleKeyType) {
    this._rules.delete(name);
  }
}
