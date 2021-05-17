import React from "react";
import data from "../data.js"
import RocketFreshIcon from "./components/RocketIcon/RocketFreshIcon.js";
import RocketWowIcon from "./components/RocketIcon/RocketWowIcon.js";

console.log(data)
const products = data.products
function type({type}) {
  switch (type) {
    case "ROCKET_FRESH" : return <RocketFreshIcon />;
    case "ROCKET_WOW" : return <RocketWowIcon />;
    default: return ""
  }
}
export default function App() {
  return (
      <div>
        <table>
          <tbody>
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
                    <select>
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
          </tbody>
        </table>
      </div>
  )
}