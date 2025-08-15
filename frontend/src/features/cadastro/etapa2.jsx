import { useMask } from '@react-input/mask';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapa2({ enviaDados }){

    const [dados, setDados] = useState({
        telefone: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    })

    useEffect(() => {
        enviaDados(dados);
    }, [dados])

    return(
            <section>
                <InputDados
                    idForm="telUsuario"
                    labelForm="Telefone"
                    placeholderInput="(99) 99999-9999"
                    funcDados={(e) => setDados({...dados, telefone: e.target.value})}
                />

                <InputDados
                    idForm="emailUsuario"
                    labelForm="Endereço de Email"
                    placeholderInput="nome@exemplo.com"
                    funcDados={(e) => setDados({...dados, email: e.target.value})}
                />

                <InputDados
                    idForm="senhaUsuario"
                    labelForm="Senha"
                    typeInput='password'
                    placeholderInput="*******"
                    funcDados={(e) => setDados({...dados, senha: e.target.value})}
                />

                <InputDados
                    idForm="confSenhaUsuario"
                    labelForm="Confirmar Senha"
                    typeInput='password'
                    placeholderInput="*******"
                    funcDados={(e) => setDados({...dados, confirmarSenha: e.target.value})}
                />
            </section>
    )
}

export default CEtapa2;