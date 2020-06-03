import React, { useState } from 'react';

export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtd).fill(0));

    function gerarNumerosNaoContido(array) {
        const max = 60;
        const min = 1;
        const num = parseInt(Math.random() * (max - min)) + min;

        return array.includes(num) ? gerarNumerosNaoContido(array) : num;
    }

    function gerarNumeros() {
        const arr = Array(props.qtd).fill(0)
            .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
            .sort((a, b) => a - b);
        setNumeros(arr);
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    );
}