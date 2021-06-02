import React from "react";
import data from "../data.js"
import CartProductTableRow from "./components/Cart/CartProductTableRow.js";

const products = data.products

export default function App() {
  return (
      <div>
        <table>
          <tbody>
            <CartProductTableRow title={'로켓프레시'} products={products.filter(it => it.type === 'ROCKET_FRESH')} />
            <CartProductTableRow title={'로켓와우'} products={products.filter(it => it.type === 'ROCKET_WOW')} />
            <CartProductTableRow title={'판매자 배송상품'} products={products.filter(it => it.type === 'PARTNER')} />
          </tbody>
        </table>
      </div>
  )
}