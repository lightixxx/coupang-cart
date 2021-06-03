import React, {useState} from "react";
import data from "../data.js"
import CartProductTableRow from "./components/Cart/CartProductTableRow.js";


export default function App() {
  const [products, setProducts] = useState(data.products)
  const onSelectChangeHandler = (product, value) => {
    const newProducts = products.map(it => {
      if (it === product) {
        return {
          ...it,
          count: value
        }
      }
      return it
    })
    setProducts(newProducts)
  }

  return (
      <div>
        <table>
          <tbody>
            <CartProductTableRow title={'로켓프레시'} 
                                products={products.filter(it => it.type === 'ROCKET_FRESH')} 
                                onSelectChangeHandler={onSelectChangeHandler}
            />
            <CartProductTableRow title={'로켓와우'}
                                products={products.filter(it => it.type === 'ROCKET_WOW')}
                                onSelectChangeHandler={onSelectChangeHandler}
            />
            <CartProductTableRow title={'판매자 배송상품'}
                                products={products.filter(it => it.type === 'PARTNER')}
                                onSelectChangeHandler={onSelectChangeHandler}
            />
          </tbody>
        </table>
      </div>
  )
}