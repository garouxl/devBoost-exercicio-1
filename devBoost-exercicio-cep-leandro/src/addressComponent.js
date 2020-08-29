const addressComponent = (component, data) => {
  component.innerHTML += `
    <ul>
      <li><strong>Endereço: </strong></li>
      <li><strong>Rua: </strong>${data.logradouro}</li>
      <li><strong>Complemento: </strong>${data.complemento}</li>
      <li><strong>Bairro: </strong>${data.bairro}</li>
      <li><strong>Cidade: </strong>${data.cidade}</li>
      <li><strong>Estado: </strong>${data.estado}</li>
      <li><strong>Cep: </strong>${data.cep}</li>
    </ul>
  `
  return component
}

export default addressComponent
