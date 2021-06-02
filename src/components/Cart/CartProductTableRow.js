import React from "react"
import RocketFreshIcon from "../RocketIcon/RocketFreshIcon.js"
import RocketWowIcon from "../RocketIcon/RocketWowIcon.js"

function type({type}) {
  switch (type) {
    case "ROCKET_FRESH" : return <RocketFreshIcon />;
    case "ROCKET_WOW" : return <RocketWowIcon />;
    default: return ""
  }
}

export default function CartProductTableRow({products, title}) {
  return (
    <>
      <tr>
        <td colSpan={7}>
          <h4>{title}</h4>
        </td>
      </tr>
      {products.map(product => {
        return (
          <tr key={product.id}>
            <td>
              <input type={"checkbox"} />
            </td>
            <td>
              <img src={product.img} alt={product.name} />
            </td>
            <td>
              {product.name}
              <hr />
              <span style={{color: "#ff4949", fontSize: 13}}>
                {product.inventory === 0 ? '품절' : product.inventory < 5 ? `품절임박: 잔여 ${product.inventory}개` : ''}
              </span>
            </td>
            <td>
              {product.price}
            </td>
            <td>
              <select defaultValue={1} disabled={product.inventory === 0}>
                {[1,2,3,4,5,6,7,8,9,10].map(it => <option ket={it} disabled={product.inventory < it}>{it}</option> )}
              </select>
            </td>
            <td>
              {product.price * product.count}
            </td>
            <td>
              {type(product)}
            </td>
          </tr>
        )
      })}
    </>
  )
}