import React from 'react'
import "./Body.css"

function Body() {
  return (
    <div className='produtosLoja'>

      <div className='div-container-Img'>


        <div className="imgUm">
          <h1>Camiseta</h1>
          <img className='produtosImg' src="./images/camiseta.png" alt="" />
        </div>
        <div className="imgDois">
          <h1>Camisetas</h1>
          <img className='produtosImg' src="./images/camisetas.png" alt="" /></div>
        <div className="imgTres">
          <h1>Cartoes</h1>
          <img className='produtosImg' src="images/cartoes.png" alt="" /></div>

      </div>

    </div>
  )
}

export default Body
