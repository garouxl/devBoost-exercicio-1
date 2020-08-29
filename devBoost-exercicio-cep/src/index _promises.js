
function request(url) {
    return new Promise((resolve, reject) => {
        let erro = true;

        if (erro === true) {
            reject('Erro na requisicao');
        }

        setTimeout(() => resolve({ data: [] }), 2000);
    });
}

request('url')
    .then((result) => {
        return request('nova chamada');
    })
    .then((result) => {
        console.log(result);
    })
    .catch((erro) => {
        console.log(erro);
    });

function exec() {
    if (result === true) {
        return Promise.resolve({});
    }
    return Promise.reject({});
}

const promises = [
    exec(),
    exec(),
    exec()
];

console.log('Fora do request');