

export let cartElement=


JSON.parse(localStorage.getItem('cartElement'));
if(!cartElement){
  cartElement=[];
}
function saveToStorage(){
  localStorage.setItem('cartElement', JSON.stringify(cartElement));
}
export function addToCart(productId){
  let itemFound = false;
  for (let i = 0; i < cartElement.length; i++) {
        if (cartElement[i].productId === productId) {
          cartElement[i].quantity += 1;
          itemFound = true;
          break;
        }
      }

      if (!itemFound) {
        cartElement.push({
          productId: productId,
          quantity: 1
        });
      }
      saveToStorage();
    
 }
 export function removeFromCart(productId){
   let newCart=[];
   cartElement.forEach((item)=>{
    if(item.productId!==productId){
      newCart.push(item);
    }
   });
   cartElement=newCart;
   
    saveToStorage();
 }
 
     export function ItemCount(){
         let CartConstantQuantity=0;
       for(let k=0;k<cartElement.length;k++){
         CartConstantQuantity+=1;
       }
       document.querySelector('.items-count').innerHTML=` (${CartConstantQuantity} items)`;
       document.querySelector('.js-items-1').textContent=`Items(${CartConstantQuantity})`;
      return CartConstantQuantity;
     saveToStorage();
     
  }

 
  export function updateCartQuantity(){
      let cartQuantity=0;
     
      for(let i=0;i<cartElement.length;i++){
      cartQuantity=cartElement[i].quantity+cartQuantity;
       
      }
      
        document.querySelector('.cart-notification').textContent=cartQuantity;
       return cartQuantity;
  }
 
