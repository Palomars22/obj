import Order from "../models/order.js";
import * as shipping from "./ShippingService.js";
const data = document.getElementById("orders").innerHTML.split("\n");

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

console.log(order);

console.log(`Numero do pedido : ${order.code} , Valor do pedido = R$ ${total().toFixed(2)}`);
const frete = shipping.shipping(order.basic);


export function total(order) {
  return data[1] - data[1] * (data[2] / 100);
}
console.log()
let resultado=document.getElementById('resultado')
resultado.innerHTML=`Numero do pedido : ${order.code}  -  valor final = R$ ${total().toFixed(2)}`;
