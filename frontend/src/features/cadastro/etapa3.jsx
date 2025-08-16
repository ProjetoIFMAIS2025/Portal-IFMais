import InputDados from '../../components/inputDados';

function CEtapa2({ enviaDados, dados }){

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