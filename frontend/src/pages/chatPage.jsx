import { Link, useNavigate } from 'react-router-dom';

import { AlunoTeste, AlunoTeste2, empresaTeste, tarefaAbertaTeste } from "../utils/testConsts";

import Menssagem from '../components/chat/message';

import './chatPage.scss'

export default function Chat(){

    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const interessadoID = queryParams.get('idInt');

    let chatRemetente;

    console.log(interessadoID)

    console.log

    switch (interessadoID){
        case "1":
            chatRemetente = AlunoTeste;
            break;
        case "2":
            chatRemetente = AlunoTeste2;
            break;
    }

    const enviarContrato = (
        <div className='contrato'>
            <div className='contrato-cabecalho fw-bold'>
                <i class="bi bi-file-earmark-text icon"></i>
                <h4 className='acessar'>Acessar Contrato!</h4>
            </div>
            <Link className='arquivo'>contrato_organizar-e-cadastrar-estoque_webcom.pdf</Link>
        </div>
    )

    return(
        <main>
            <header className='chat-cabecalho voltar'>
                <button onClick={() => navigate(-1)} className='voltar-btn'><i className="bi bi-arrow-left-circle voltar-icon left"></i></button>
                <div className='center'>
                    <h1 className='chat-titulo'>{chatRemetente.nome}</h1>
                    <p className='chat-subtitulo'>Chat</p>
                </div>
            </header>

            <section className='chat'>
               <Menssagem user={empresaTeste} mensagem={enviarContrato}/>
            </section>
        </main>
    )
}