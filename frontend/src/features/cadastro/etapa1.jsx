import { useMask } from '@react-input/mask';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapa1({ enviaDados, dados }){

    const inputCPF = useMask({
        mask: '___.___.___-__',
        replacement: { _: /\d/ },
      });


    return(
            <section>
                <InputDados
                    idForm="nomeUsuario"
                    labelForm="Nome Completo"
                    placeholderInput="Lucas da Silva"
                    funcDados={e => enviaDados({nome: e.target.value})}
                    value={dados.nome}
                />

                <InputDados
                    idForm="nomeSocialUsuario"
                    labelForm="Nome Social (Opcional)"
                    placeholderInput=""
                    funcDados={e => enviaDados({nomeSocial: e.target.value})}
                    isRequired={false}
                    value={dados.nomeSocial}
                />

                <InputDados
                    idForm="dataNascUsuario"
                    labelForm="Data de Nascimento"
                    typeInput='date'
                    placeholderInput=""
                    funcDados={e => enviaDados({dataNasc: e.target.value})}
                    value={dados.dataNasc}
                />

                <Form.Group className="mb-3" controlId="cpfUsuario">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control ref={inputCPF} type="text" placeholder='123.456.789-10' onChange={e => enviaDados({cpf: e.target.value})} value={dados.cpf} required/>
                </Form.Group>
            </section>
    )
}

export default CEtapa1;