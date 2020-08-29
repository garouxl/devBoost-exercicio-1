const buildComponent = (cepComponentID, cepComponent) => {
  return new Promise((resolve, reject) => {
    const component = document.getElementById(cepComponentID);

    if (component === null) {
      reject(() => console.log('erro de elemento vazio'))
    }

    component.innerHTML = cepComponent();
    resolve(component);
  });
}

export default buildComponent
