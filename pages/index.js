import {useState} from 'react'

function Home(){
    return (
        <div>
            <h1>HOME</h1>
            <Contador />
        </div>
    )
}

export default Home 


function Contador(){
    const [contador, setContador] = useState(1)

    function adicionar(){
        setContador(contador + 1)
    }


    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionar}>adicionar</button>
        </div>
    )
}