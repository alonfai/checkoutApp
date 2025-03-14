import { ProductNameType, ProductSkuType } from './types';

/**
 * A given product item properties in the system
 */
export interface Item {
  /**
   * Name of product
   */
  name: ProductNameType;
  /**
   * Sku of the product
   */
  sku: ProductSkuType;
  /**
   * Price for the product
   */
  price: number;
}
