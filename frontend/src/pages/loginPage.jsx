import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputDados from "../components/inputDados";

import logo from '../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/loginCadastro.scss'

function LoginPage(){
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

            <h1 className='loginCadastro-titulo mb-3'>Login</h1>

            <Form>
                <InputDados
                    idForm="emailLogin"
                    labelForm="Endereço de Email"
                    placeholderInput="nome@exemplo.com"
                />

                <InputDados
                    idForm="senhaLogin"
                    labelForm="Senha"
                    typeInput="password"
                    placeholderInput="**********"
                />

                <Button variant="primary" type="submit" className="d-block mb-3 ms-auto me-auto px-5">
                    Entrar
                </Button>
            </Form>

            <Link to="/cadastro" className="underline">Não possuo uma conta!</Link>

        </main>
    )
}

export default LoginPage;