import { Rules } from './rules';

describe('rules', () => {
  it('scan rule was added correctly', () => {
    const pricingRules = new Rules();
    pricingRules.add('THREE_FOR_TWO_ON_ATV', (cart) => {
      return cart;
    });

    expect(pricingRules._rules.size).toEqual(1);
    expect(pricingRules._rules.has('THREE_FOR_TWO_ON_ATV')).toEqual(true);
  });

  it('scan rule was removed correctly', () => {
    const pricingRules = new Rules();
    pricingRules.add('THREE_FOR_TWO_ON_ATV', (cart) => {
      return cart;
    });

    expect(pricingRules._rules.size).toEqual(1);
    expect(pricingRules._rules.has('THREE_FOR_TWO_ON_ATV')).toEqual(true);

    pricingRules.remove('THREE_FOR_TWO_ON_ATV');
    expect(pricingRules._rules.size).toEqual(0);
    expect(pricingRules._rules.has('THREE_FOR_TWO_ON_ATV')).toEqual(false);
  });
});
