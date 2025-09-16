import { Link, useNavigate } from 'react-router-dom';

import PHFundo from '../assets/fundo_ph.webp'
import PHUser from '../assets/ph.jpg'
import './interessado.scss'

function GerarEstrelas(quantEstrelas){
    const estrelas = [];
    let tempQuantEstrelas;

    if ((Number.isInteger(quantEstrelas))){
        tempQuantEstrelas = quantEstrelas;
    } else {
        tempQuantEstrelas = quantEstrelas - 0.5
    }

    for (let i = 0; i < 5; i++){
        if(i < tempQuantEstrelas){
            estrelas.push(<i className="bi bi-star-fill cabecalho-icons"></i>);
        }else if(!Number.isInteger(quantEstrelas) && i == tempQuantEstrelas){
            estrelas.push(<i className="bi bi-star-half cabecalho-icons"></i>);
        }else {
            estrelas.push(<i className="bi bi-star cabecalho-icons"></i>);
        }     
    }

    return estrelas;
}

function GerarFooter(filtro, id){

    const navigate = useNavigate();



    switch(filtro){
        case 'andamento':
            return(
                <footer className='botoes'>
                    <div className="botao botaoEnviar aceitar">Enviar</div>
                </footer>
            )
        case 'analise':
            return (
                <footer className='botoes'>
                    <div className="botao botaoEnviar aceitar">Analisar Conteúdo</div>
                </footer>
            )
        case 'pagamento':
            return (
                <footer className='botoes'>
                    <div className="botao botaoEnviar aceitar">Enviar Pagamento</div>
                </footer>
            )
        case 'finalizado':
            return (
                <footer className='botoes'>
                    <div className="botao botaoEnviar aceitar">Trabalho Finalizado!</div>
                </footer>
            )
        default:
        return (
            <footer className='botoes'>
                <button onClick={() => navigate(-1)} className="botao recusar"><i className="bi bi-x-lg botao-icon"></i></button>
                <div className="botao conversar"><i className="bi bi-chat-left botao-icon"></i></div>
                <Link to={"/chat?idInt=" + id} className="botao aceitar"><i className="bi bi-check2 botao-icon"></i></Link>
            </footer>
        )
    }
}

export default function Tarefa({userInfo, tarefaInfo, filtro=null, id}){  

    const navigate = useNavigate();

    return(
        <main>
            <header className='voltar'>
                <button onClick={() => navigate(-1)} className='voltar-btn'><i className="bi bi-arrow-left-circle voltar-icon"></i></button>
            </header>

            <section className='main'>
                <div className='cabecalho-tarefa'>
                    <div className='cabecalho-fundo-div'>        
                    </div>
                    <div className='cabecalho-infos'>
                        <img src={userInfo.fotoPerfil} alt=""  className='foto-empresa' width='100px'/>
                        <div className='cabecalho-nota'>
                            {GerarEstrelas(userInfo.quantEstrelas)}
                        </div>
                    </div>
                </div>

                <div className="tarefaInfo">
                    <div className='tarefaInfo-cabecalho sobre-secao'>
                        <h2 className='tarefaInfo-titulo titulo'>{userInfo.nome}</h2>
                        <h4 className='tarefaInfo-empresa texto'>{userInfo.area}</h4>
                    </div>

                    <div className="sobreEmpresa sobre-secao">
                        <h2 className='sobreEmpresa-titulo titulo'>Tarefa de Interesse</h2>
                        <p className='sobreEmpresa-texto texto'>{tarefaInfo.titulo}</p>
                    </div>

                    <div className="sobreEmpresa sobre-secao">
                        <h2 className='sobreEmpresa-titulo titulo'>Sobre Mim</h2>
                        <p className='sobreEmpresa-texto texto'>{userInfo.sobre}</p>
                    </div>

                    <div className='sobreHabilidades sobre-secao'>
                        <h2 className='sobreHabilidades-titulo titulo'>Habilidades que possuo</h2>
                        <div className='sobreHabilidades-habilidades texto'>
                            {tarefaInfo.habilidades.map((item) => (
                                <h4 className='sobreHabilidades-habilidade'>{item}</h4>
                            ))}
                        </div>
                    </div>

                    <div className='sobreEntrega sobre-secao'>
                        <h2 className='sobreEntrega-titulo titulo'>Método de Entrega Preferido</h2>
                        <p className='sobreEntrega-texto texto'>{userInfo.entrega == "Não possui" ? userInfo.entrega : "Envio " + userInfo.entrega}</p>
                    </div>

                    <div className='sobreEntrega sobre-secao'>
                        <h2 className='sobreEntrega-titulo titulo'>Método de Pagamento Preferido</h2>
                        <p className='sobreEntrega-texto texto'>{userInfo.pagamento}</p>
                    </div>
                </div>

                <div className='denuncia'>
                    <i className="bi bi-exclamation-diamond-fill"></i>
                    <h4 className='denuncia-texto'>Denunciar Usuário</h4>
                </div>
            </section>

            {GerarFooter(filtro, id)}
        </main>
    )
}