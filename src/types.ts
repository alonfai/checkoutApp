/**
 * List of product names
 */
export const PRODUCT_NAMES = {
  ipd: 'Super iPad',
  mbp: 'MacBook Pro',
  atv: 'Apple TV',
  vga: 'VGA adapter',
} as const;

/**
 * Type of product sku
 */
export type ProductSkuType = keyof typeof PRODUCT_NAMES;

/**
 * Type of product name
 */
export type ProductNameType = (typeof PRODUCT_NAMES)[ProductSkuType];

/**
 * List of predefined pricing rules in the system
 */
export const RULE_NAMES = {
  THREE_FOR_TWO_ON_ATV: '3 for 2 on Apple TV',
  SUPER_IPAD_DISCOUNT_BULK: 'Super iPad discount bulk if buy more than 4',
  FREE_VGS_ADAPTER_ON_MBP: 'Free VGA adapter on MacBook Pro',
} as const;

export type RuleKeyType = keyof typeof RULE_NAMES;
/**
 * Type of rule name
 */
export type RuleNameType = (typeof RULE_NAMES)[RuleKeyType];
