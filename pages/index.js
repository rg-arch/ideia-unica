import { useState} from 'react';
import Link  from  'next/link';
import ibge from './api/ibge';
import tempo from './api/tempo';

// import NextLink from 'next/link';

function Home() {
    return (
        <div>
            <h2>Home Ronaldo Arthur e Gabriel</h2>
            <Contador />
            <tempo />
            <ibge />
            <tempo  />
            <h2>Sobre</h2>
                <Link href='/sobre'>
                    <a>Acessar página sobre</a>
                </Link>
                
        </div>
    )
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
