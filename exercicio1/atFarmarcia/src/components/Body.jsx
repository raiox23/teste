import React, { useState } from 'react';
import "./Body.css";

function Body() {
  const [senhaNormal, setSenhaNormal] = useState([]);
  const [senhaPreferencial, setSenhaPreferencial] = useState([]);
  const [senhaChamada, setSenhaChamada] = useState(null);


  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 9000) + 1000;
  }


  function gerarSenhaNormal() {
    const novaSenha = `N-${gerarNumeroAleatorio()}`;
    setSenhaNormal([...senhaNormal, novaSenha]);
  }


  function gerarSenhaPreferencial() {
    const novaSenha = `P-${gerarNumeroAleatorio()}`;
    setSenhaPreferencial([...senhaPreferencial, novaSenha]);
  }


  function chamarSenhaBalcao() {
    if (senhaPreferencial.length > 0) {

      const senhaAtual = senhaPreferencial[0];
      setSenhaChamada(senhaAtual);
      setSenhaPreferencial(senhaPreferencial.slice(1));
    } else if (senhaNormal.length > 0) {

      const senhaAtual = senhaNormal[0];
      setSenhaChamada(senhaAtual);
      setSenhaNormal(senhaNormal.slice(1));
    } else {

      setSenhaChamada("Fila vazia");
    }
  }

  return (
    <div className='produtosLoja'>
      <div className='div-container-Img'>
        <div className="imgUm">
          <h1>Camiseta</h1>
          <img className='produtosImg' src="./images/camiseta.png" alt="Camiseta" />
        </div>
        <div className="imgDois">
          <h1>Camisetas</h1>
          <img className='produtosImg' src="./images/camisetas.png" alt="Camisetas" />
        </div>
        <div className="imgTres">
          <h1>Cartões</h1>
          <img className='produtosImg' src="images/cartoes.png" alt="Cartões" />
        </div>
      </div>

      <div className='container-btns'>
        <button className='btn' onClick={gerarSenhaNormal}>Gerar senha normal</button>
        <button className='btn' onClick={gerarSenhaPreferencial}>Gerar senha preferencial</button>
        <button className='btn' onClick={chamarSenhaBalcao}>Chamar senha</button>
      </div>


      <div className='senhaChamada'>
        <h2>Senha Chamada: {senhaChamada}</h2>
      </div>


      <div className='filaEstado'>
        <h3>Fila Preferencial: {senhaPreferencial.length > 0 ? senhaPreferencial.join(", ") : "Nenhuma"}</h3>
        <h3>Fila Normal: {senhaNormal.length > 0 ? senhaNormal.join(", ") : "Nenhuma"}</h3>
      </div>
    </div>
  );
}

export default Body;
