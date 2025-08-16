import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CEtapa1 from '../features/cadastro/etapa1';
import CEtapa2 from '../features/cadastro/etapa2'
import CEtapa3 from "../features/cadastro/etapa3";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from '../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/loginCadastro.scss'

function CadastroPage(){

    //Armazena temporariamente os dados do usuário
    const [etapaDados, setEtapaDados] = useState({
        etapa1: {},
        etapa2: {},
        etapa3: {},
    })
    
    //Função para alterar valores temporários do usuário
    const atualizarDadosEtapa = (etapa, dados) => {
        setEtapaDados(prev => ({
            ...prev,
            [etapa]: dados
        }));

        console.log(etapaDados);
    }
    
    //muda Etapa Atual
    const [etapaAtual, setEtapaAtual] = useState(1);
    

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
                    <CEtapa1 enviaDados={(dados) => atualizarDadosEtapa("etapa1", dados)}/>
                }

                {etapaAtual == 2 &&
                    <CEtapa2 enviaDados={(dados) => atualizarDadosEtapa("etapa2", dados)}/>
                }

                {etapaAtual == 3 &&
                    <CEtapa3 enviaDados={(dados) => atualizarDadosEtapa("etapa3", dados)}/>
                }

            </Form>

            <div className="loginCadastro-botoes">
                {etapaAtual > 1 && 
                <Button variant="primary" type="button" onClick={() => setEtapaAtual(etapaAtual - 1)} className="d-block mb-3 ms-auto me-auto w-50">
                    Voltar
                </Button> }

                {etapaAtual < 3 && 
                <Button variant="primary" type="button" onClick={() => setEtapaAtual(etapaAtual + 1)} className="d-block mb-3 ms-auto me-auto w-50">
                    Próximo
                </Button> }

                {etapaAtual === 3 && 
                <Button variant="primary" type="submit" className="d-block mb-3 ms-auto me-auto w-50">
                    Finalizar
                </Button> }
            </div>

            <Link to="/" className="underline mb-3">Já possuo uma conta!</Link>

        </main>
    )
}

export default CadastroPage;