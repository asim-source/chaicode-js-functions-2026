/**
 * 🍳 Dosa Counter - Order Calculator
 *
 * Raju ka South Indian dosa counter hai Bangalore mein. Customer aata hai,
 * dosa ka type bolta hai, kitne chahiye bolta hai, aur spicy chahiye ya nahi.
 * Tujhe order calculate karke bill banana hai.
 *
 * Rules:
 *   - Dosa prices: plain=40, masala=60, onion=50, butter=70, paper=90, cheese=80
 *   - quantity ka default value 1 hai (agar nahi diya toh 1 maano)
 *   - isSpicy ka default value false hai
 *   - Agar isSpicy true hai, toh har dosa pe Rs 10 extra lagao
 *   - pricePerDosa = base price + (10 if spicy)
 *   - total = pricePerDosa * quantity
 *   - Return: { type, quantity, pricePerDosa, total }
 *   - Hint: Use default parameters, object return
 *
 * Validation:
 *   - Agar type string nahi hai ya unknown type hai, return null
 *   - Agar quantity positive number nahi hai (<=0 ya NaN), return null
 *
 * @param {string} type - Dosa type
 * @param {number} [quantity=1] - Number of dosas
 * @param {boolean} [isSpicy=false] - Add spicy for Rs 10 extra
 * @returns {{ type: string, quantity: number, pricePerDosa: number, total: number } | null}
 *
 * @example
 *   calculateDosaOrder("masala", 2, true)
 *   // => { type: "masala", quantity: 2, pricePerDosa: 70, total: 140 }
 *
 *   calculateDosaOrder("plain")
 *   // => { type: "plain", quantity: 1, pricePerDosa: 40, total: 40 }
 */
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  // Your code here
  if(typeof type!=="string") return null;
  if(type.toLowerCase()!=="plain".toLowerCase() && type.toLowerCase()!=="masala".toLowerCase() && type.toLowerCase()!=="onion".toLowerCase() && type.toLowerCase()!=="butter".toLowerCase() && type.toLowerCase()!=="paper".toLowerCase() && type.toLowerCase()!=="cheese".toLowerCase()) return null;
  if(!Number.isInteger(quantity) || quantity<=0) return null;
  let typing ;
  let quant ;
  let isSpicying;
  let valuePerDosa;
  let netTotal;
  if(type.toLowerCase()==="plain".toLowerCase()){
    typing = type;
    quant = quantity;
    isSpicying = isSpicy ? 10:0;
    valuePerDosa = 40 + isSpicying;
    netTotal = valuePerDosa * quant;
  }
  else if(type.toLowerCase()==="masala".toLowerCase()){
    typing = type;
    quant = quantity;
    isSpicying = isSpicy ? 10:0;
    valuePerDosa = 60 + isSpicying;
    netTotal = valuePerDosa * quant;
  }
  else if(type.toLowerCase()==="onion".toLowerCase()){
    typing = type;
    quant = quantity;
    isSpicying = isSpicy ? 10:0;
    valuePerDosa = 50 + isSpicying;
    netTotal = valuePerDosa * quant;
  }
  else if(type.toLowerCase()==="butter".toLowerCase()){
    typing = type;
    quant = quantity;
    isSpicying = isSpicy ? 10:0;
    valuePerDosa = 70 + isSpicying;
    netTotal = valuePerDosa * quant;
  }
  else if(type.toLowerCase()==="paper".toLowerCase()){
    typing = type;
    quant = quantity;
    isSpicying = isSpicy ? 10:0;
    valuePerDosa = 90 + isSpicying;
    netTotal = valuePerDosa * quant;
  }
  else if(type.toLowerCase()==="cheese".toLowerCase()){
    typing = type;
    quant = quantity;
    isSpicying = isSpicy ? 10:0;
    valuePerDosa = 80 + isSpicying;
    netTotal = valuePerDosa * quant;
  }

  return{type:typing,quantity:quant,pricePerDosa:valuePerDosa,total:netTotal,};
  
  
}
calculateDosaOrder("plain",2,true);
// console.log(typing);
// console.log(quant);
// console.log(isSpicying);
// console.log(valuePerDosa);
// console.log(netTotal);