//API
var apiKey = {
    key: ''
}

// Buscando dados pela api com fetch

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
        apiKey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar uma requisição, status ' + response.status)
        return response.json()
    })
    .then((api) => {

        

        var texto = ""
        // buscar as principais moedas e simbolos
        for (let i = 0; i < 10; i++) {

            console.log(api)
            // show api information
            var dataComposta = api.data[i].first_historical_data.split("T", 1)
            
            texto = texto + `
            <div class="moedas">
                <img src="coin.png" class="coin" alt="">
                <div class="info">
                    <h5 class="nome-moeda">${api.data[i].name} <span class="simbolo-moeda">(${api.data[i].symbol})</span></h5>
                    <p class="data-moeda">${dataComposta}</p>
                </div>
            </div>`
            document.getElementById("coins").innerHTML = texto
        }
    })
    .catch((error) => {
        console.error(error.message)
    })
