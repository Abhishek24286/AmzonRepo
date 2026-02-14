    
      import {TodoList} from './product-data.js'; 
      import {cartElement,addToCart,updateCartQuantity} from './cart.js';        

let combineHTML = '';

for (let i = 0; i < TodoList.length; i++) {
  const Todo = TodoList[i];

  const html = `
    <div class="product-details-container">
      <div class="product-image-container">
        <img class="main-image" src="${Todo.image}">
      </div>

      <div class="product-name">
        
          ${Todo.name}
        
      </div>

      <div class="product-rating">
        <img class="product-rating-class" src="images/ratings/rating-${Todo.rating.stars *10}.png">
        <div class="product-rating-count">${Todo.rating.count}</div>
      </div>

      <div class="product-price">Rs ${(Todo.priceCents/10).toFixed(2)}</div>

      <div class="product-quantity">
        <select class="select-menu"  data-product-id="${Todo.id}">
          <option>1</option>
          <option >2</option>
          <option >3</option>
          <option >4</option>
        </select>
      </div>

      <div class="div-space"></div>
       
      <div class="add-to-cart-button2">
          <p class="added-to-cart  067D62"></p>
     
        <button class="add-to-cart-button" data-product-id="${Todo.id}">
        
          Add to Cart
        </button>
      </div>
    </div>
  `;

  combineHTML += html;
}
updateCartQuantity();



document.querySelector('.main-container').innerHTML = combineHTML;


 document.querySelectorAll('.add-to-cart-button')
  .forEach(button => {
    button.addEventListener('click', () => {

      const productId = button.dataset.productId;

      addToCart(productId);
      updateCartQuantity();

      // ✅ find correct message element
      const container = button.closest('.add-to-cart-button2');
      const message = container.querySelector('.added-to-cart');

      message.textContent = "Added ";

      setTimeout(() => {
        message.textContent = "";
      }, 2000);

    });
  });
 let count=1;
  document.querySelector('.home-menu')
  .addEventListener('click',()=>{
    let cartQuantity=updateCartQuantity();
      if(count % 2===1){
          const html=`
      <div class="menu-bar">
      <a class= "Return-link"href="Orders.html">Returns & Orders</a>
      <a class="return-to-cart" href="checkout.html">Cart(<span class="cart-design-items">${cartQuantity}</span>)</a>
    </div>
    `;
    
         document.querySelector('.js-menu-bar-selector').innerHTML=html;
         
      }
      else{
   document.querySelector('.js-menu-bar-selector').innerHTML='';

      }
      count+=1;
  });
  document.querySelector('.js-top-button')
  .addEventListener('click',()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  });
 

  
   
  
  

 

 