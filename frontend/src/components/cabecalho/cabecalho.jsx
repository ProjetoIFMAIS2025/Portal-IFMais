import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "bootstrap-icons/font/bootstrap-icons.css";
import MenuIcon from '../../assets/menu-icon.svg'

import Logo from '../../assets/logo.svg'

import './cabecalho.scss'

export default function Cabecalho(){
    const [aberto, setAberto] = useState(false);

    const listStyle = {
        fontSize: '2.8rem'
    }

    const navStyle = {
        fontSize: '2rem'
    }

    return(
        <main>
            <header className='cabecalho d-flex justify-content-between align-items-center p-3 bg-body-secondary'>
                <button 
                    onClick={() => setAberto(!aberto)}
                    aria-controls="example-collapse-text"
                    aria-expanded={aberto}>
                        <img src={MenuIcon} alt="" width="50px"/>
                </button>
                <i className="bi bi-bell" style={listStyle}></i>
            </header>
  

        <Offcanvas show={aberto} onHide={() => setAberto(false)} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                <img src={Logo} width="100px" alt="logo"/>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav>
                    <div className='nav-item d-flex align-items-center ms-3 my-2'>
                        <i class="bi bi-house" style={navStyle}></i>
                        <h1 className='ms-2'>Ínicio</h1>
                    </div>
                    <div className='nav-item d-flex align-items-center ms-3 my-2'>
                        <i class="bi bi-person-badge" style={navStyle}></i>
                        <h1 className='ms-2'>Perfil</h1>
                    </div>
                    <div className='nav-item d-flex align-items-center ms-3 my-2'>
                        <i class="bi bi-clipboard" style={navStyle}></i>
                        <h1 className='ms-2'>Tarefas</h1>
                    </div>
                    <div className='nav-item d-flex align-items-center ms-3 my-2'>
                        <i class="bi bi-gear" style={navStyle}></i>
                        <h1 className='ms-2'>Configurações</h1>
                    </div>
                    <div className='nav-item d-flex align-items-center ms-3 my-2'>
                        <i class="bi bi-box-arrow-left" style={navStyle}></i>
                        <h1 className='ms-2'>Sair</h1>
                    </div>
                </nav>
            </Offcanvas.Body>
        </Offcanvas>
        </main>
        )
}
