import{cartElement,ItemCount} from './cart.js';
import{TodoList} from './product-data.js';


export function updatePrice(){
     let TotalPrice=0;
  cartElement.forEach((items) =>{
     let productExist = null;

  TodoList.forEach(product => {
    if (items.productId === product.id) {
      productExist = product;
    }
  });
   
  TotalPrice=Number(TotalPrice+(items.quantity * productExist.priceCents));
  


  });
   
  if(TotalPrice!=0 ){
   TotalPrice=(TotalPrice/10);
 
  document.querySelector('.product-amount').textContent=`Rs ${TotalPrice.toFixed(2)}`;

 
  let shippingPrice=0;
  if(TotalPrice>=1000){
    shippingPrice=0;
  } 
  else if(TotalPrice>500 && TotalPrice<1000){
    shippingPrice=30;
  }
 else if(TotalPrice>300 && TotalPrice<=500){
  shippingPrice= 40;
 }
 else if(TotalPrice>100 && TotalPrice<=300){
   shippingPrice=45;
 }
 else if(TotalPrice<=100 && TotalPrice>0){
  shippingPrice=35;
 }
 
  document.querySelector('.shippingAmount').textContent=`Rs ${shippingPrice.toFixed(2)}`;

  const TotalPriceBeforeTax=Number(shippingPrice+TotalPrice);
 document.querySelector('.totalAmounxtBeforetax').textContent=`Rs ${TotalPriceBeforeTax.toFixed(2)}`;

  let TotalPriceTax=0;
  TotalPriceTax= Number(((TotalPriceBeforeTax * 10)/100));
    document.querySelector('.EstimatedTaxPrice').textContent=`Rs ${TotalPriceTax.toFixed(2)}`;


 const TotalpriceFinal=Number(TotalPriceBeforeTax+TotalPriceTax);
 document.querySelector('.total-amount').textContent=`Rs ${TotalpriceFinal.toFixed(2)}`;
  }
 

  }
  