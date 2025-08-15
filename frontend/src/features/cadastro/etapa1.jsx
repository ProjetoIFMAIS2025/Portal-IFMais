import { useMask } from '@react-input/mask';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapa1({ enviaDados }){

    const [dados, setDados] = useState({
        nome: "",
        nomeSocial: "",
        dataNasc: "",
        cpf: ""
    })

    const inputCPF = useMask({
        mask: '___.___.___-__',
        replacement: { _: /\d/ },
      });

    useEffect(() => {
        enviaDados(dados);
    }, [dados])

    return(
            <Form>
                <InputDados
                    idForm="nomeUsuario"
                    labelForm="Nome Completo"
                    placeholderInput="Lucas da Silva"
                    funcDados={(e) => setDados({...dados, nome: e.target.value})}
                />

                <InputDados
                    idForm="nomeSocialUsuario"
                    labelForm="Nome Social (Opcional)"
                    placeholderInput=""
                    funcDados={(e) => setDados({...dados, nomeSocial: e.target.value})}
                    isRequired={false}
                />

                <InputDados
                    idForm="dataNascUsuario"
                    labelForm="Data de Nascimento"
                    typeInput='date'
                    placeholderInput=""
                    funcDados={(e) => setDados({...dados, dataNasc: e.target.value})}
                />

                <Form.Group className="mb-3" controlId="cpfUsuario">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control ref={inputCPF} type="text" onChange={(e) => setDados({...dados, cpf: e.target.value})} required/>
                </Form.Group>
            </Form>
    )
}

export default CEtapa1;