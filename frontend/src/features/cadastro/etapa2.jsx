import { useMask } from '@react-input/mask';

import InputDados from '../../components/inputDados';

function CEtapa1({ enviaDados, dados }){

    const inputCPF = useMask({
        mask: '___.___.___-__',
        replacement: { _: /\d/ },
      });


    return(
            <section>

                <h2 className='text-center fs-3 mb-3'>Dados Pessoais</h2>

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
            </section>
    )
}

export default CEtapa1;