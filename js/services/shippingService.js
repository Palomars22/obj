export function shipping(order) {
  let frete = 0;
  if (order < 100) {
    frete = order + 20.0;

  } else if (order > 100 && order < 200) {
    frete = order + 12.0;
   
  } else if(order>200) {
    frete = order;
  }
  return frete;
}
