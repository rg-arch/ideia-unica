import { useState} from 'react';


function Home() {
    return (
        <div>
            <h2>Home</h2>
            <Contador />
        </div>
        <div>
            <h2>Sobre</h2>
                <link href='/sobre'>
                    <a>Acessar página sobre</a>
                </link>
        </div>
    )
}

function Contador() {

    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador ( contador + 1 );
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar </button>
        </div> 
    )
}


export default Home
