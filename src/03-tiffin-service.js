/**
 * 🍱 Mumbai Tiffin Service - Plan Builder
 *
 * Mumbai ki famous tiffin delivery service hai. Customer ka plan banana hai
 * using destructuring parameters aur rest/spread operators.
 *
 * Functions:
 *
 *   1. createTiffinPlan({ name, mealType = "veg", days = 30 })
 *      - Destructured parameter with defaults!
 *      - Meal prices per day: veg=80, nonveg=120, jain=90
 *      - Agar mealType unknown hai, return null
 *      - Agar name missing/empty, return null
 *      - Return: { name, mealType, days, dailyRate, totalCost }
 *
 *   2. combinePlans(...plans)
 *      - Rest parameter! Takes any number of plan objects
 *      - Each plan: { name, mealType, days, dailyRate, totalCost }
 *      - Return: { totalCustomers, totalRevenue, mealBreakdown }
 *      - mealBreakdown: { veg: count, nonveg: count, ... }
 *      - Agar koi plans nahi diye, return null
 *
 *   3. applyAddons(plan, ...addons)
 *      - plan: { name, mealType, days, dailyRate, totalCost }
 *      - Each addon: { name: "raita", price: 15 }
 *      - Add each addon price to dailyRate
 *      - Recalculate totalCost = new dailyRate * days
 *      - Return NEW plan object (don't modify original)
 *      - addonNames: array of addon names added
 *      - Agar plan null hai, return null
 *
 * Hint: Use { destructuring } in params, ...rest for variable args,
 *   spread operator for creating new objects
 *
 * @example
 *   createTiffinPlan({ name: "Rahul" })
 *   // => { name: "Rahul", mealType: "veg", days: 30, dailyRate: 80, totalCost: 2400 }
 *
 *   combinePlans(plan1, plan2, plan3)
 *   // => { totalCustomers: 3, totalRevenue: 7200, mealBreakdown: { veg: 2, nonveg: 1 } }
 */
export function createTiffinPlan({ name, mealType = "veg", days = 30 } = {}) {
  // Your code here
  let naming;
  let mealCategory;
  let din;
  let rozanaRate;
  let netCost;
 if((mealType.toLowerCase()!=="veg".toLowerCase() && mealType.toLowerCase()!=="nonveg".toLowerCase() && mealType.toLowerCase()!=="jain".toLowerCase() )) return null;
 if(typeof name!=="string" ||  name.trim().length===0 ) return null;
 if(mealType.toLowerCase()==="veg".toLowerCase()){
   naming = name;
   mealCategory = mealType;
   din = days;
   rozanaRate = 80;
   netCost = (80*din);

 }
  else if (mealType.toLowerCase()==="nonveg".toLowerCase()){
   naming = name;
   mealCategory = mealType;
   din = days;
   rozanaRate = 120;
   netCost = (120*din);
 }
  else if(mealType.toLowerCase()==="jain".toLowerCase()){
   naming = name;
   mealCategory = mealType;
   din = days;
   rozanaRate = 90;
   netCost = (90*din);
 }
 return {name:naming,mealType:mealCategory,days:din,dailyRate:rozanaRate,totalCost:netCost};
}
const plan1 = createTiffinPlan({ name: "Rahul",mealType:"veg",days:60, });
const plan2 = createTiffinPlan({ name: "Asim",mealType:"nonveg",days:60, });
const plan3 = createTiffinPlan({ name: "Ayan",mealType:"nonveg",days:60, });
export function combinePlans(...plans) {
  // Your code here
  let countCustomer = 0;
  let totalEarning = 0;
  let vegCount = 0;
  let nonVegCount = 0;
  let jainCount = 0;
  if(plans.length===0) return null;
  for(let i = 0;i<plans.length;i++){
    plans[i].name;
    countCustomer = countCustomer + 1;
    totalEarning = totalEarning + plans[i].totalCost;
    if(plans[i].mealType.toLowerCase()==="veg".toLowerCase()){
      vegCount = vegCount + 1;
    }else if(plans[i].mealType.toLowerCase()==="nonveg".toLowerCase()){
      nonVegCount = nonVegCount + 1;
    }else if(plans[i].mealType.toLowerCase()==="jain".toLowerCase()){
      jainCount = jainCount + 1;
    }
  }
  return{totalCustomers:countCustomer,totalRevenue:totalEarning,mealBreakdown:{veg:vegCount,nonveg:nonVegCount,jain:jainCount,}};
}
combinePlans(plan1,plan2,plan3);

export function applyAddons(plan, ...addons) {
  // Your code here
  if(plan===null) return null;
  let currentRate =  plan.dailyRate;
  for(let i=0;i<addons.length;i++){
    currentRate = currentRate + addons[i].price;
  }
  let totalCosting = currentRate * plan.days;

  const mapping = addons.map(({name})=>name);
  const updatedObj = {...plan,dailyRate:currentRate,totalCost:totalCosting,addonNames:mapping};
  return updatedObj;
}
console.log(applyAddons(plan1,{name:"raita",price:15},{name:"papad",price:10}));

