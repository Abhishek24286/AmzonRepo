import { cartElement, removeFromCart, ItemCount } from './cart.js';
import { updatePrice } from './payment-info.js';

async function loadCheckout() {

  const response = await fetch(
    'https://amazon-product-api-1.onrender.com/product/api'
  );

  const TodoList = await response.json();

  let productHTML = '';

  cartElement.forEach(cartItem => {

    const productExist = TodoList.find(product =>
      product.id === cartItem.productId
    );

    if (!productExist) return;

    productHTML += `
      <div class="product-container product-specific-id-${productExist.id}">
        <div class="Delivery-date">
          Delivery date: Monday, February 16
        </div>

        <div class="product-items">
          <div class="product-image">
            <img
              class="socks-image"
              src="https://amazon-product-api-1.onrender.com/${productExist.image}"
            >
          </div>

          <div class="product-details">
            <div class="product-details-image">
              ${productExist.name}
            </div>

            <div class="product-price">
              Rs ${(productExist.priceCents / 100).toFixed(2)}
            </div>

            <div class="js-update-div">
              <div class="order-quantity">
                Quantity : ${cartItem.quantity}
              </div>

              <span class="update">update</span>

              <span
                class="delete-cart-element"
                data-product-id="${productExist.id}">
                delete
              </span>
            </div>
          </div>

          <div class="product-delivery-option"></div>
        </div>
      </div>
    `;
  });

  document.querySelector('.product-flex-container').innerHTML = productHTML;

  ItemCount();
  updatePrice();

  document.querySelectorAll('.delete-cart-element')
    .forEach(link => {
      link.addEventListener('click', () => {

        const productId = link.dataset.productId;

        removeFromCart(productId);

        document
          .querySelector(`.product-specific-id-${productId}`)
          ?.remove();

        ItemCount();
        updatePrice();
      });
    });
}

loadCheckout();