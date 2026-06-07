import{cartElement,ItemCount} from './cart.js';
import{TodoList} from './product-data.js';


export function updatePrice() {

  let TotalPrice = 0;

  cartElement.forEach((item) => {

    const productExist = TodoList.find(
      product => product.id === item.productId
    );

    if (!productExist) {
      return;
    }

    TotalPrice += item.quantity * productExist.priceCents;

  });

  TotalPrice = TotalPrice / 10;

  document.querySelector('.product-amount').textContent =
    `Rs ${TotalPrice.toFixed(2)}`;

  let shippingPrice = 0;

  if (TotalPrice >= 1000) {
    shippingPrice = 0;
  } else if (TotalPrice > 500) {
    shippingPrice = 30;
  } else if (TotalPrice > 300) {
    shippingPrice = 40;
  } else if (TotalPrice > 100) {
    shippingPrice = 45;
  } else if (TotalPrice > 0) {
    shippingPrice = 35;
  }

  document.querySelector('.shippingAmount').textContent =
    `Rs ${shippingPrice.toFixed(2)}`;

  const TotalPriceBeforeTax =
    TotalPrice + shippingPrice;

  document.querySelector('.totalAmounxtBeforetax').textContent =
    `Rs ${TotalPriceBeforeTax.toFixed(2)}`;

  const TotalPriceTax =
    TotalPriceBeforeTax * 0.10;

  document.querySelector('.EstimatedTaxPrice').textContent =
    `Rs ${TotalPriceTax.toFixed(2)}`;

  const TotalpriceFinal =
    TotalPriceBeforeTax + TotalPriceTax;

  document.querySelector('.total-amount').textContent =
    `Rs ${TotalpriceFinal.toFixed(2)}`;
}