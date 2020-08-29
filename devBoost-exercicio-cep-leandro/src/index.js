import axios from 'axios'

import cepComponent from './cepComponent'
import buildComponent from './buildComponent'
import addressComponent from './addressComponent'

buildComponent('cep-component', cepComponent)
  .then((component) => {
    const search = component.querySelector('[data-js=buscar]')
    const cep = component.querySelector('[data-js=cep]')

    search.addEventListener('click', (event) => {
      event.preventDefault()
      axios.get(`https://api.postmon.com.br/v1/cep/${cep.value}`)
      .then(result => {
        addressComponent(component, result.data)
      })
      .catch(() => {
        console.warn("CEP deve ser informado")
      })
    })
  })
