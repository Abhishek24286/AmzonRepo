import { cartElement,removeFromCart,ItemCount} from './cart.js';
import { TodoList } from './product-data.js';
import{updatePrice} from './payment-info.js';

let productHTML = '';


cartElement.forEach(cartItem => {
  let productExist = null;

  TodoList.forEach(product => {
    if (cartItem.productId === product.id) {
      productExist = product;
    }
  });
  ItemCount();
  

  productHTML += `
    <div class="product-container product-specific-id-${productExist.id}">
      <div class="Delivery-date">
        Delivery date: Monday, February 16
      </div>

      <div class="product-items">
        <div class="product-image">
          <img class="socks-image" src="${productExist.image}">
        </div>

        <div class="product-details">
          <div class="product-details-image">
            ${productExist.name}
          </div>
          <div class="product-price">
            Rs ${(productExist.priceCents / 10).toFixed(2)}
          </div>
          <div class="js-update-div">
            <div class="order-quantity"> Quantity :${cartItem.quantity}</div>
            <span class="update">update</span>
            <span class="delete-cart-element"
            data-product-id="${productExist.id}">delete</span>
          </div>
          
        </div>
        

        <div class="product-delivery-option"></div>
      </div>
    </div>
  `;
  
});
updatePrice();

document.querySelector('.product-flex-container').innerHTML = productHTML;
document.querySelectorAll('.delete-cart-element')
  .forEach((link) => {
    link.addEventListener('click', () => {
     const productId = link.dataset.productId;
      removeFromCart(productId);
      updatePrice();
      ItemCount();
        document.querySelector(`.product-specific-id-${productId}`).remove();
      
       
    });
   
   
  });
 

 
 