import { addToCart, updateCartQuantity } from './cart.js';

async function loadProducts() {
  try {
    const response = await fetch(
      'https://amazon-product-api-1.onrender.com/product/api'
    );

    const TodoList = await response.json();

    let combineHTML = '';

    TodoList.forEach((Todo) => {
      combineHTML += `
        <div class="product-details-container" data-container-id="${Todo.id}">
          <div class="product-image-container">
            <img
              class="main-image"
              src="https://amazon-product-api-1.onrender.com/${Todo.image}"
            >
          </div>

          <div class="product-name">
            ${Todo.name}
          </div>

          <div class="product-rating">
            <img
              class="product-rating-class"
              src="images/ratings/rating-${Todo.rating.stars * 10}.png"
            >
            <div class="product-rating-count">
              ${Todo.rating.count}
            </div>
          </div>

          <div class="product-price">
            Rs ${(Todo.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity">
            <select
              class="select-menu"
              data-product-id="${Todo.id}"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div class="div-space"></div>

          <div class="add-to-cart-button2">
            <p class="added-to-cart"></p>

            <button
              class="add-to-cart-button"
              data-product-id="${Todo.id}"
            >
              Add to Cart
            </button>
          </div>
        </div>
      `;
    });

    document.querySelector('.main-container').innerHTML = combineHTML;

    updateCartQuantity();

    document.querySelectorAll('.add-to-cart-button')
      .forEach(button => {
        button.addEventListener('click', () => {

          const productId = button.dataset.productId;

          const select = document.querySelector(
            `.select-menu[data-product-id="${productId}"]`
          );

          const SelectedQu = Number(select.value);

          addToCart(productId, SelectedQu);

          updateCartQuantity();

          const container =
            button.closest('.add-to-cart-button2');

          const message =
            container.querySelector('.added-to-cart');

          message.textContent = 'Added';

          setTimeout(() => {
            message.textContent = '';
          }, 2000);
        });
      });

  } catch (error) {
    console.error('Error loading products:', error);
  }
}

loadProducts();