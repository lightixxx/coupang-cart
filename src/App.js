import React, {useState} from "react";
import data from "../data.js"
import CartProductTableRow from "./components/Cart/CartProductTableRow.js";
import comma from "./utils/NumberUtil.js";


export default function App() {
  const [products, _setProducts] = useState(data.products)
  const total = products.filter(it => it.checked)
                        .reduce((total, product) => total + product.price * product.count, 0)
                        
  const onSelectChangeHandler = (product, value) => {
    setProducts(product, (it) => ({
      ...it,
      count: value
    }))
  }

  const onCheckboxChangeHandler = (product, value) => {
    setProducts(product, (it) => ({
      ...it,
      checked: value
    }))
  }

  const setProducts = (product, callback) => {
    const newProducts = products.map(it => {
      if (it === product) {
        return {
          ...callback(it)
        }
      }
      return it
    })
    _setProducts(newProducts)
  }

  return (
      <div>
        <table>
          <tbody>
            <CartProductTableRow title={'로켓프레시'} 
                                products={products.filter(it => it.type === 'ROCKET_FRESH')} 
                                onSelectChangeHandler={onSelectChangeHandler}
                                onCheckboxChangeHandler={onCheckboxChangeHandler}
            />
            <CartProductTableRow title={'로켓와우'}
                                products={products.filter(it => it.type === 'ROCKET_WOW')}
                                onSelectChangeHandler={onSelectChangeHandler}
                                onCheckboxChangeHandler={onCheckboxChangeHandler}
            />
            <CartProductTableRow title={'판매자 배송상품'}
                                products={products.filter(it => it.type === 'PARTNER')}
                                onSelectChangeHandler={onSelectChangeHandler}
                                onCheckboxChangeHandler={onCheckboxChangeHandler}
            />
          </tbody>
        </table>
        <div>
          총합계: {comma(total)}
        </div>
      </div>
  )
}