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
            </td>
            <td>
              {product.price}
            </td>
            <td>
              <select defaultValue={1}>
                <option>1</option>
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