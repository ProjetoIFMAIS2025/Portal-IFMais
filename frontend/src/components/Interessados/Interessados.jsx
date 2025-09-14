import { Link } from 'react-router-dom'

import './Interessados.scss'

export default function Interessados({dadosAluno=null, dadosTarefa, linkAluno, filtro, filtroTarefa}){

     let strFiltro = ""

    switch (filtroTarefa) {
        case "andamento":
            strFiltro = "Em andamento"
            break;
        case "analise":
            strFiltro = "Em análise"
            break;
        case "pagamento":
            strFiltro = "Aguardando Pagamento"
            break;
        case "finalizado":
            strFiltro = "Finalizado"
            break;
        default:
            strFiltro = "";
            break;
    }

    return (
        <div className={ filtro == filtroTarefa ? "Interessados" : "d-none"}>
            <section className="Interessados-secao">
                <h1 className='Interessados-titulo'>{dadosTarefa.titulo} </h1>
                {dadosAluno && 
                    <div>
                
                        <h3 className='Interessados-titulo'>Candidato</h3>
                        <p className='Interessados-area Interessados-texto'>{dadosAluno.nome}</p>

                        <h3 className='Interessados-titulo'>Info Candidato</h3>

                        <p className='Interessados-area Interessados-texto'>{dadosAluno.area}</p>
                        <p className='Interessados-instituicao Interessados-texto'>{dadosAluno.instituicao}</p>

                        <h3 className='Interessados-titulo'>Sobre Candidato</h3>
                        <p className='Interessados-texto'>{dadosAluno.sobre}</p>
                
                    <div className="Interessados-info-habilidades interessados-sessao">
                        <h4 className='Interessados-titulo Interessados-texto'>Habilidades Candidato</h4>
                        <div className="Interessados-info-item Interessados-habilidade">
                            {
                                dadosAluno.habilidades.map((item, idx) => (
                                    <span className='Interessados-texto Interessados-generalItem' key={idx}>{item}</span>
                                ))
                            }
                        </div>
                    </div>
                  </div>
                }

                <div className="Interessados-info-habilidades interessados-sessao">
                    <h4 className='Interessados-titulo Interessados-texto'>Habilidades Necessárias</h4>
                    <div className="Interessados-info-item Interessados-habilidade">
                        {
                            dadosTarefa.habilidades.map((item, idx) => (
                                <span className='Interessados-texto Interessados-generalItem' key={idx}>{item}</span>
                            ))
                        }
                    </div>
                </div>

                <div className='Interessados-info-sobre interessados-sessao'>
                    <h4 className='Interessados-tituloSobre Interessados-titulo Interessados-texto'>Sobre Tarefa</h4>
                    <p className='Interessados-sobreTarefa Interessados-texto'>{dadosTarefa.sobre}</p>
                </div>

                <Link to={linkAluno} className='Interessados-btn'>Ver Mais</Link>
            </section>
        </div>
    )
}