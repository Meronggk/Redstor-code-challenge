class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.cart = {};
  }

  // 

  scan(item) {
    if (this.cart[item]) {
      this.cart[item]++;             
    } else {
      this.cart[item] = 1;
    }
  }

  calculateTotal() {
    let total = 0;

    for (let item in this.cart) {
      // console.log(item);
      if (this.pricingRules.hasOwnProperty(item)) {
        const { unitPrice, specialPrice } = this.pricingRules[item];

        if (specialPrice && this.cart[item] >= specialPrice.quantity) {
          const specialPriceCount = Math.floor(
            this.cart[item] / specialPrice.quantity
          );
          total += specialPriceCount * specialPrice.price;
          const remainingCount = this.cart[item] % specialPrice.quantity;
          total += remainingCount * unitPrice;
        } else {
          total += this.cart[item] * unitPrice;
        }
      } else {

        console.log(`No pricing rule for item ${item}`);
      //    throw new Error('No pricing rule')
       }

    }

    return total;
  }
}

// Example pricing rules

const pricingRules = {
  A: { unitPrice: 60, specialPrice: { quantity: 3, price: 150 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 30 },
  D: { unitPrice: 25 },
};


module.exports = {
  pricingRules, Checkout
}

