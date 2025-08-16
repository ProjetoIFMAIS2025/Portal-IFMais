import { useMask } from '@react-input/mask';
import { useEffect } from "react";
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapa3({ enviaDados, dados }){

    function limpaFormCEP(){
    enviaDados({
        UF: "",
        cidade: "",
        bairro: "",
        rua: ""
    });
}

    function meu_callback(conteudo){
    if(!("erro" in conteudo)) {
        enviaDados({
            UF: conteudo.uf,
            cidade: conteudo.localidade,
            bairro: conteudo.bairro,
            rua: conteudo.logradouro
        });
    } else {
        limpaFormCEP();
    }
}

    function pesquisaCEP(valorCEP){

        enviaDados({cep: valorCEP}); //Add cep aos dados

        //Nova variável "cep" somente com dígitos.
        var cepInput = valorCEP.toString().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if(cepInput != ""){

            //Expressão regular para validar o CEP.
            var validaCEP = /^[0-9]{8}$/;
            
            //Valida o formato do CEP
            if(validaCEP.test(cepInput)){

                //Cria elemento script
                var scriptCEP = document.createElement('script');

                //Sincroniza com o viacep
                scriptCEP.src = 'https://viacep.com.br/ws/'+ cepInput + '/json/?callback=meu_callback';

                //Insere o script no DOM
                document.body.appendChild(scriptCEP);

            } else {
                limpaFormCEP();
            }

        } else {
            limpaFormCEP();
        }

    }

    useEffect(() => {
        window.meu_callback = meu_callback;
    }, [])

    const inputCEP = useMask({
        mask: '_____-___',
        replacement: { _: /\d/ },
      });

    return(
            <section>

                <h2 className='text-center fs-3 mb-3'>Endereço</h2>

                <Form.Group className="mb-3" controlId="cepUsuario">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control ref={inputCEP} type="text" placeholder='12345-678'
                    onChange={e => {
                        const value = e.target.value;
                        enviaDados({ cep: value });
                        if (value.replace(/\D/g, '').length === 8) {
                            pesquisaCEP(value);
                        }
                    }}
                    value={dados.cep}
                    required/>
                </Form.Group>

                <InputDados
                    idForm="ufUsuario"
                    labelForm="Estado"
                    placeholderInput="PR"
                    funcDados={e => enviaDados({UF: e.target.value})}
                    value={dados.UF}
                />

                <InputDados
                    idForm="cidadeUsuario"
                    labelForm="Cidade"
                    placeholderInput="Telêmaco Borba"
                    funcDados={e => enviaDados({cidade: e.target.value})}
                    value={dados.cidade}
                />

                <InputDados
                    idForm="bairroUsuario"
                    labelForm="Bairro"
                    placeholderInput="Jardim Bandeirantes"
                    funcDados={e => enviaDados({bairro: e.target.value})}
                    value={dados.bairro}
                />

                <InputDados
                    idForm="ruaUsuario"
                    labelForm="Rua"
                    placeholderInput="PR-160"
                    funcDados={e => enviaDados({rua: e.target.value})}
                    value={dados.rua}
                />

                <InputDados
                    idForm="numeroRuaUsuario"
                    labelForm="Número"
                    placeholderInput="km 19-5"
                    value={dados.numeroCasa}
                    funcDados={e => enviaDados({numeroCasa: e.target.value})}
                />
            </section>
    )
}

export default CEtapa3;