import React from 'react';
import Filho from './Filho';

export default props =>
    <div>
        <Filho {...props}><strong>Luis</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Maria</strong></Filho>
        <Filho sobrenome="Silva"><strong>Pedro</strong></Filho>
    </div>