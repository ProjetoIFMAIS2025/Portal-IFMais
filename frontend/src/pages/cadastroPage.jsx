import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Etapa1 from '../features/cadastro/etapa1';

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

        console.log(dados);
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

            <Etapa1 enviaDados={(dados) => atualizarDadosEtapa("etapa1", dados)}/>

            <Button variant="primary" type="submit" className="d-block mb-3 ms-auto me-auto px-5">
                Próximo
            </Button>

            <Link to="/" className="underline">Já possuo uma conta!</Link>

        </main>
    )
}

export default CadastroPage;