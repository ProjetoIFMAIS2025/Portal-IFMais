import InputDados from '../../components/inputDados';

function CEtapa2({ enviaDados, dados, erros }){

    return(
            <section>

                <h2 className='text-center fs-3 mb-3'>Outras Informações</h2>

                <InputDados
                    idForm="telUsuario"
                    labelForm="Telefone"
                    placeholderInput="(99) 99999-9999"
                    funcDados={e => enviaDados({telefone: e.target.value})}
                    value={dados.telefone}
                    isRequired={false}
                    erros={erros.telefone}
                />

                <InputDados
                    idForm="emailUsuario"
                    labelForm="Endereço de Email"
                    placeholderInput="nome@exemplo.com"
                    funcDados={e => enviaDados({email: e.target.value})}
                    value={dados.email}
                    erros={erros.email}
                />

                <InputDados
                    idForm="senhaUsuario"
                    labelForm="Senha"
                    typeInput='password'
                    placeholderInput="*******"
                    funcDados={e => enviaDados({senha: e.target.value})}
                    value={dados.senha}
                    erros={erros.senha}
                />

                <InputDados
                    idForm="confSenhaUsuario"
                    labelForm="Confirmar Senha"
                    typeInput='password'
                    placeholderInput="*******"
                    funcDados={e => enviaDados({confirmarSenha: e.target.value})}
                    value={dados.confirmarSenha}
                    erros={erros.confirmarSenha}
                />
            </section>
    )
}

export default CEtapa2;