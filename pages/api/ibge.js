async function ibge(request, response2 ) {
    const IbgeURL =  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP";
    console.log (IbgeURL);
    const IbgeResponse =  await fetch (IbgeURL);
    console.log (IbgeResponse);
    const IbgeResponseJson =  IbgeResponse.json();
    console.log (IbgeResponseJson);
    // const IbjeJson = JSON.parse (IbgeResponse);
    const nomeUf = IbgeResponse.nome;
    console.log ("nome UF");
    console.log (nomeUf);
    var nomeEstado = ""; 


    // modo 2
    fetch(IbgeURL).then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {
            // process your JSON further
            console.log (json.nome)
            nomeEstado = json.nome
          });
        } else {
          console.log("Oops, we haven't got JSON!");
        }
      });

    response2.json ({
        siglaUf: 'SP',
        nome: 'São Paulo - SP',
        nome2: nomeEstado,
        nome3: "nome3"
    });
        
} 

export default ibge;