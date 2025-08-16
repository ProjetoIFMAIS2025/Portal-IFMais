import { useMask } from '@react-input/mask';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapa2({ enviaDados, dados }){

    return(
            <section>
                <InputDados
                    idForm="telUsuario"
                    labelForm="Telefone"
                    placeholderInput="(99) 99999-9999"
                    funcDados={e => enviaDados({telefone: e.target.value})}
                    value={dados.telefone}
                />

                <InputDados
                    idForm="emailUsuario"
                    labelForm="Endereço de Email"
                    placeholderInput="nome@exemplo.com"
                    funcDados={e => enviaDados({email: e.target.value})}
                    value={dados.email}
                />

                <InputDados
                    idForm="senhaUsuario"
                    labelForm="Senha"
                    typeInput='password'
                    placeholderInput="*******"
                    funcDados={e => enviaDados({senha: e.target.value})}
                    value={dados.senha}
                />

                <InputDados
                    idForm="confSenhaUsuario"
                    labelForm="Confirmar Senha"
                    typeInput='password'
                    placeholderInput="*******"
                    funcDados={e => enviaDados({confirmarSenha: e.target.value})}
                    value={dados.confirmarSenha}
                />
            </section>
    )
}

export default CEtapa2;