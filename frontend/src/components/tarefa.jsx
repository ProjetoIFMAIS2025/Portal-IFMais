import { Link, useNavigate } from 'react-router-dom';

import PHFundo from '../assets/fundo_ph.webp'
import PHUser from '../assets/ph.jpg'
import './tarefa.scss'

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

export default function Tarefa({quantEstrelas=4.5}){  

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
                        <img src={PHUser} alt=""  className='foto-empresa' width='100px'/>
                        <div className='cabecalho-nota'>
                            {GerarEstrelas(quantEstrelas)}
                        </div>
                    </div>
                </div>

                <div className="tarefaInfo">
                    <div className='tarefaInfo-cabecalho sobre-secao'>
                        <h2 className='tarefaInfo-titulo titulo'>Título da Tarefa</h2>
                        <h4 className='tarefaInfo-empresa texto'>Nome da Empresa</h4>
                    </div>

                    <div className="sobreEmpresa sobre-secao">
                        <h2 className='sobreEmpresa-titulo titulo'>Sobre a empresa</h2>
                        <p className='sobreEmpresa-texto texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. </p>
                    </div>

                    <div className='sobreTarefa sobre-secao'>
                        <h2 className='sobreTarefa-titulo titulo'>Sobre a Tarefa</h2>
                        <p className='sobreTarefa-texto texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. </p>
                    </div>

                    <div className='sobreHabilidades sobre-secao'>
                        <h2 className='sobreHabilidades-titulo titulo'>Habilidades Necessárias</h2>
                        <div className='sobreHabilidades-habilidades texto'>
                            <h4 className='sobreHabilidades-habilidade'>Design Gráfico</h4>
                            <h4 className='sobreHabilidades-habilidade'>Canva</h4>
                            <h4 className='sobreHabilidades-habilidade'>Desenvolvimento Web</h4>
                        </div>
                    </div>

                    <div className='sobrePrazo sobre-secao'>
                        <h2 className='sobrePrazo-titulo titulo'>Prazo</h2>
                        <p className='sobrePrazo-texto texto'>xx/05/2025 até xx/06/2025</p>
                    </div>

                    <div className='sobrePagamento sobre-secao'>
                        <h2 className='sobrePagemento-titulo titulo'>Pagamento</h2>
                        <p className='sobrePagamento-quantidade texto'><span className='sobrePagamento-quantidade-titulo titulo subTitulo'>Quantidade: </span> R$ 100,00</p>
                        <p className='sobrePagamento-metodo texto'><span className='sobrePagamento-metodo-titulo titulo subTitulo'>Método de Pagamento: </span> PIX</p>
                    </div>

                    <div className='sobreEntrega sobre-secao'>
                        <h2 className='sobreEntrega-titulo titulo'>Método de Entrega</h2>
                        <p className='sobreEntrega-texto texto'>Envio através da plataforma</p>
                    </div>
                </div>

                <div className='denuncia'>
                    <i className="bi bi-exclamation-diamond-fill"></i>
                    <h4 className='denuncia-texto'>Denunciar Empresa</h4>
                </div>
            </section>

            <footer className='botoes'>
                <div className="botao recusar"><i class="bi bi-x-lg botao-icon"></i></div>
                <div className="botao conversar"><i class="bi bi-chat-left botao-icon"></i></div>
                <div className="botao aceitar"><i class="bi bi-check2 botao-icon"></i></div>
            </footer>
        </main>
    )
}