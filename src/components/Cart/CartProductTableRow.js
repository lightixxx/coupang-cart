import React from "react"
import RocketFreshIcon from "../RocketIcon/RocketFreshIcon.js"
import RocketWowIcon from "../RocketIcon/RocketWowIcon.js"
import comma from "../../utils/NumberUtil"

function type({type}) {
  switch (type) {
    case "ROCKET_FRESH" : return <RocketFreshIcon />;
    case "ROCKET_WOW" : return <RocketWowIcon />;
    default: return ""
  }
}

export default function CartProductTableRow({products, title, onSelectChangeHandler, onCheckboxChangeHandler, onDeleteHandler}) {
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
              <input type={"checkbox"} 
                    checked={product.checked}
                    disabled={product.inventory === 0}
                    onChange={(e) => onCheckboxChangeHandler(product, e.target.checked)}
              />
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
              <button style={{float: "right"}} onClick={() => onDeleteHandler(product)}>
                X
              </button>
            </td>
            <td>
              {comma(product.price)}
            </td>
            <td>
              <select value={product.count} 
                      onChange={(e) => onSelectChangeHandler(product, Number(e.target.value))} 
                      disabled={product.inventory === 0}>
                {[1,2,3,4,5,6,7,8,9,10].map(it => <option ket={it} disabled={product.inventory < it}>{it}</option> )}
              </select>
            </td>
            <td>
              {comma(product.price * product.count)}
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