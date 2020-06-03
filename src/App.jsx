import './App.css';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#10 - Mega-Sena" color="#73503C">
                <Mega qtd={8}/>
            </Card>
            <Card titulo="#09 - Contador" color="#293E69">
                <Contador passo={10} valor={100} />
            </Card>
            <Card titulo="#08 - Input" color="#9C0F5F">
                <Input />
            </Card>
            <Card titulo="#07 - Comunicação Inireta" color="#000">
                <Super />
            </Card>
            <Card titulo="#06 - Comunicação Direta" color="#4298B5">
                <Pai sobrenome="Freitas" />
            </Card>
            <Card titulo="#05 - Condicional" color="#FA6900">
                <Condicional numero={10} />
            </Card>
            <Card titulo="#04 - Repetição" color="#E94C6F">
                <Repeticao />
            </Card>
            <Card titulo="#03 - Componente Com Filhos" color="#008BBA">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente Com Parametro" color="#D96459">
                <ComParametro titulo="Esse é o título."
                    subtitulo="Esse é o subtítulo." />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#FF85CB">
                <Primeiro />
            </Card>
        </div>
    </div>
);