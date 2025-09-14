import { Link, useNavigate } from 'react-router-dom';

import './tarefaFullPage.scss'

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

function GerarFooter(filtro){

    switch(filtro){
        case 'candidato':
            return(
                <footer className='botoes'>
                    <div className="botao botaoEnviar conversar">Aguardando Candidato</div>
                </footer>
            )
            break;
        case 'andamento':
            return(
                <footer className='botoes'>
                    <div className="botao botaoEnviar conversar">Aguardando Trabalho</div>
                </footer>
            )
        case 'analise':
            return (
                <footer className='botoes'>
                    <div className="botao botaoEnviar aceitar">Revisar Trabalho</div>
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
                <div className="botao recusar"><i className="bi bi-x-lg botao-icon"></i></div>
                <div className="botao conversar"><i className="bi bi-chat-left botao-icon"></i></div>
                <div className="botao aceitar"><i className="bi bi-check2 botao-icon"></i></div>
            </footer>
        )
    }
}

export default function Tarefa({empresaInfo, tarefaInfo, userInfo, arquivo, filtro=null}){  

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
                        <img src={empresaInfo.fotoUser} alt=""  className='foto-empresa' width='100px'/>
                        <div className='cabecalho-nota'>
                            {GerarEstrelas(empresaInfo.quantEstrelas)}
                        </div>
                    </div>
                </div>

                <div className="tarefaInfo">
                    <div className='tarefaInfo-cabecalho sobre-secao'>
                        <h2 className='tarefaInfo-titulo titulo'>{tarefaInfo.titulo}</h2>
                        <h4 className='tarefaInfo-empresa texto'>{empresaInfo.nome}</h4>
                    </div>

                    <div className="sobreEmpresa sobre-secao">
                        <h2 className='sobreEmpresa-titulo titulo'>Sobre a empresa</h2>
                        <p className='sobreEmpresa-texto texto'>{empresaInfo.sobre}</p>
                    </div>

                    <div className='sobreTarefa sobre-secao'>
                        <h2 className='sobreTarefa-titulo titulo'>Sobre a Tarefa</h2>
                        <p className='sobreTarefa-texto texto'>{tarefaInfo.sobre} </p>
                    </div>

                    <div className='sobreHabilidades sobre-secao'>
                        <h2 className='sobreHabilidades-titulo titulo'>Habilidades Necessárias</h2>
                        <div className='sobreHabilidades-habilidades texto'>
                            {tarefaInfo.habilidades.map((item, idx) => (
                                <h4 className='sobreHabilidades-habilidade'>{item}</h4>
                            ))}
                        </div>
                    </div>

                    <div className='sobrePrazo sobre-secao'>
                        <h2 className='sobrePrazo-titulo titulo'>Prazo</h2>
                        <p className='sobrePrazo-texto texto'>{tarefaInfo.prazoInicio} até {tarefaInfo.prazoFim}</p>
                    </div>

                    <div className='sobrePagamento sobre-secao'>
                        <h2 className='sobrePagemento-titulo titulo'>Pagamento</h2>
                        <p className='sobrePagamento-quantidade texto'><span className='sobrePagamento-quantidade-titulo titulo subTitulo'>Quantidade: </span> R$ {tarefaInfo.remunerado ? tarefaInfo.quantidade : "Não remunerado"}</p>
                        {tarefaInfo.remunerado && <p className='sobrePagamento-metodo texto'><span className='sobrePagamento-metodo-titulo titulo subTitulo'>Método de Pagamento: </span> {tarefaInfo.pagamento}</p>}
                    </div>

                    <div className='sobreEntrega sobre-secao'>
                        <h2 className='sobreEntrega-titulo titulo'>Método de Entrega</h2>
                        <p className='sobreEntrega-texto texto'>Envio {tarefaInfo.entrega}</p>
                    </div>

                    <div className='sobreEncarregado sobre-secao'>
                        <h2 className='sobreEntrega-titulo titulo'>Encarregado</h2>
                        <p className='sobreEntrega-texto texto text-decoration-underline'>{userInfo ? userInfo.nome : "Aguardando Candidato"}</p>        
                    </div>

                    <div className='sobreEncarregado sobre-secao'>
                        <h2 className='sobreEntrega-titulo titulo'>Arquivos</h2>
                        <p className='sobreEntrega-texto texto text-decoration-underline'>{arquivo} {arquivo ? <i class="bi bi-download"></i> : "Aguardando Envio"}</p>        
                    </div>
                </div>

                <div className='denuncia'>
                    <i className="bi bi-exclamation-diamond-fill"></i>
                    <h4 className='denuncia-texto'>Denunciar Empresa</h4>
                </div>
            </section>

            {GerarFooter(filtro)}
        </main>
    )
}