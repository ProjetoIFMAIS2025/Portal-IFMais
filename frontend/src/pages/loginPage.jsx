import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="d-block mb-3 ms-auto me-auto px-5">
                    Entrar
                </Button>
            </Form>

            <Link to="/cadastro" className="underline">Não possuo uma conta!</Link>

        </main>
    )
}

export default LoginPage;