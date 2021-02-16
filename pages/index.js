import { useState} from 'react';
import Link  from  'next/link';
// import NextLink from 'next/link';

function Home() {
    return (
        <div>
            <h2>Home Ronaldo Arthur e Gabriel -- Demetrius</h2>
            <Contador />
            <IbgeSP />
            <h2>Sobre</h2>
                <Link href='/sobre'>
                    <a>Acessar página sobre</a>
                </Link>
                
        </div>
    )
}


async function IbgeSP(request, response ) {
    const IbgeResponse = await fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP');
    const IbgeResponseJson = await IbgeResponse.json;
    <div>
        {IbgeResponseJson.nome}
    </div>
        
}
function Contador() {

    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador ( contador + 4
            
            
            );
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar </button>
        </div> 

    )


}


export default Home
