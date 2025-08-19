import { Link } from "react-router-dom";
import { use, useState } from "react";

import { validacaoTipo, validacaoEstudante, validacaoEmpresa } from "../utils/validacoes/valEtapa1";

import CEtapa1 from "../features/cadastro/etapa1";
import CEtapa2 from '../features/cadastro/etapa2'
import CEtapa3 from "../features/cadastro/etapa3";
import CEtapa4 from "../features/cadastro/etapa4";

import CEtapaEstudante from "../features/cadastro/etapa1_estudante";
import CEtapaEmpresa from "../features/cadastro/etapa1_empresa";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from '../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/loginCadastro.scss'

function CadastroPage(){

    //Armazena temporariamente os dados do usuário
    const [etapaDados, setEtapaDados] = useState({
        nome: "",
        nomeSocial: "",
        dataNasc: "",
        telefone: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        cep: "",
        UF: "",
        cidade: "",
        bairro: "",
        rua: "",
        numeroCasa: "",
        tipo: "",
    })

    const [dadosEstudante, setDadosEstudante] = useState({
        cpf: "",
        matricula: ""
    })

    const [dadosEmpresa, setDadosEmpresa] = useState({
        cnpj: "",
        empresaRazao: "",
        empresaNome: "",
        empresaArea: "",
        empresaSobre: ""
    })

    //Função genérica para alterar valores temporários do usuário
    const atualizarDados = (setState, novosDados) => {
        setState(d => ({...d, ...novosDados}));
    }

    //muda Etapa Atual
    const [etapaAtual, setEtapaAtual] = useState(1);

    const [erros, setErros] = useState({});

    function checarErros(errosTemp){
        if(Object.keys(errosTemp).length > 0){
            setErros(errosTemp)
        } else {
            setErros({});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errosTemp = {};

        switch (etapaAtual) {
            case 1:

                errosTemp = validacaoTipo(etapaDados);
                if(Object.keys(errosTemp).length > 0){
                    setErros(errosTemp);
                } else {

                    setErros({});

                    if (etapaDados.tipo == "estudante") {
                        errosTemp = validacaoEstudante(dadosEstudante);
                        checarErros(errosTemp);
                    } else if (etapaDados.tipo == "empresa") {
                        errosTemp = validacaoEmpresa(dadosEmpresa);
                        checarErros(errosTemp);
                    }

                }

                break;

            case 2:
                break;
        
            default:
                break;
        }

        // Só avança se não houver erros
        if (Object.keys(errosTemp).length === 0) {
            setEtapaAtual(etapaAtual + 1);
        }
    }
    

    return (
        <main className='
            loginCadastro 
            bg-body-secondary 
            d-flex flex-column justify-content-center align-items-center
        '>

            <img 
                src={logo}
                alt=""
                width="250rem"
            />

            <h1 className='loginCadastro-titulo mb-3'>Cadastro</h1>

            <Form>
                {etapaAtual == 1 &&
                    <CEtapa1 enviaDados={(novosDados) => atualizarDados(setEtapaDados, novosDados)} dados={etapaDados} erros={erros}/>
                }

                {etapaDados.tipo == "estudante" && etapaAtual == 1 && <CEtapaEstudante enviaDados={(novosDados) => atualizarDados(setDadosEstudante, novosDados)} dados={dadosEstudante} erros={erros}/>}

                {etapaDados.tipo == "empresa" && etapaAtual == 1 && <CEtapaEmpresa enviaDados={(novosDados) => atualizarDados(setDadosEmpresa, novosDados)} dados={dadosEmpresa} erros={erros}/>}

                {etapaAtual == 2 &&
                    <CEtapa2 enviaDados={(novosDados) => atualizarDados(setEtapaDados, novosDados)} dados={etapaDados} erros={erros}/>
                }

                {etapaAtual == 3 &&
                    <CEtapa3 enviaDados={(novosDados) => atualizarDados(setEtapaDados, novosDados)} dados={etapaDados}/>
                }

                {etapaAtual == 4 &&
                    <CEtapa4 enviaDados={(novosDados) => atualizarDados(setEtapaDados, novosDados)} dados={etapaDados}/>
                }

            </Form>

            <div className="loginCadastro-botoes">
                {etapaAtual > 1 && 
                <Button variant="primary" type="button" onClick={() => setEtapaAtual(etapaAtual - 1)} className="d-block mb-3 ms-auto me-auto w-50">
                    Voltar
                </Button> }

                {etapaAtual < 4 && 
                <Button variant="primary" type="button" onClick={handleSubmit} className="d-block mb-3 ms-auto me-auto w-50">
                    Próximo
                </Button> }

                {etapaAtual === 4 && 
                <Button variant="primary" type="submit" className="d-block mb-3 ms-auto me-auto w-50">
                    Finalizar
                </Button> }
            </div>

            <Link to="/" className="underline mb-3">Já possuo uma conta!</Link>

        </main>
    )
}

export default CadastroPage;