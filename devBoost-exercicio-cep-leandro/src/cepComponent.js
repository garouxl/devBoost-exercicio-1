const cepComponent = () => {
  return (`
    <form id="cep-form">
      <ul>
        <li>
          <input type="text" data-js="cep" placeholder="Digite seu cep" required>
        </li>
        <li>
          <button data-js="buscar">Consultar CEP</button>
        </li>
      </ul>
    </form>
  `)
}

export default cepComponent
