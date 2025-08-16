import { useMask } from '@react-input/mask';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapa3({ enviaDados }){

    const [dados, setDados] = useState({
        cep: "",
        UF: "",
        cidade: "",
        bairro: "",
        rua: "",
        numeroCasa: ""
    })

    function limpaFormCEP(){
    setDados(d => ({
        ...d,
        UF: "",
        cidade: "",
        bairro: "",
        rua: ""
    }));
}

    function meu_callback(conteudo){
    if(!("erro" in conteudo)) {
        setDados(d => ({
            ...d,
            UF: conteudo.uf,
            cidade: conteudo.localidade,
            bairro: conteudo.bairro,
            rua: conteudo.logradouro
        }));
    } else {
        limpaFormCEP();
    }
}

    function pesquisaCEP(valorCEP){

        //Nova variável "cep" somente com dígitos.
        var cepInput = valorCEP.toString().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if(cepInput != ""){

            //Expressão regular para validar o CEP.
            var validaCEP = /^[0-9]{8}$/;
            
            //Valida o formato do CEP
            if(validaCEP.test(cepInput)){

                setDados({...dados, cep: cepInput}); //Add cep aos dados

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

    useEffect(() => {
        enviaDados(dados);
    }, [dados])

    const inputCEP = useMask({
        mask: '_____-___',
        replacement: { _: /\d/ },
      });

    return(
            <section>
                <Form.Group className="mb-3" controlId="cepUsuario">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control ref={inputCEP} type="text" placeholder='12345-678' onBlur={(e) => pesquisaCEP(e.target.value)} required/>
                </Form.Group>

                <InputDados
                    idForm="ufUsuario"
                    labelForm="Estado"
                    placeholderInput="PR"
                    //funcDados={(e) => setDados({...dados, email: e.target.value})}
                    value={dados.UF}
                />

                <InputDados
                    idForm="cidadeUsuario"
                    labelForm="Cidade"
                    placeholderInput="Telêmaco Borba"
                    //funcDados={(e) => setDados({...dados, senha: e.target.value})}
                    value={dados.cidade}
                />

                <InputDados
                    idForm="bairroUsuario"
                    labelForm="Bairro"
                    placeholderInput="Jardim Bandeirantes"
                    //funcDados={(e) => setDados({...dados, bairro: e.target.value})}
                    value={dados.bairro}
                />

                <InputDados
                    idForm="ruaUsuario"
                    labelForm="Rua"
                    placeholderInput="PR-160"
                    //funcDados={(e) => setDados({...dados, bairro: e.target.value})}
                    value={dados.rua}
                />

                <InputDados
                    idForm="numeroRuaUsuario"
                    labelForm="Número"
                    placeholderInput="km 19-5"
                    value={dados.numeroCasa}
                    funcDados={(e) => setDados(d => ({ ...d, numeroCasa: e.target.value }))}
                />
            </section>
    )
}

export default CEtapa3;