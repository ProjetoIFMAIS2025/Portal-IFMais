import { Link, useLocation } from 'react-router-dom';

import './tarefaAberta.scss'
import PHIcon from '../../assets/ph.jpg'
import TarefaInfo from './tarefaInfo'

export default function TarefaAberta({ linkTarefa, filtro="", filtroTarefa="", empresaInfo, tarefaInfo, statusBool=false}){

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

    const prazo = tarefaInfo.prazoInicio + " até " + tarefaInfo.prazoFim;
    let quantidade;
    if(tarefaInfo.remunerado){
        quantidade = "R$ " + tarefaInfo.quantidade;
    }else {
        quantidade = "Não remunerado"
    }

    return (
        <div className={ filtro == filtroTarefa ? "tarefaAberta" : "d-none"}>
            <section className="tarefaAberta-secao1">
                <img src={empresaInfo.fotoUser} alt="" width="100em"/>
                <h2 className='tarefaAberta-habilidadesTitulo tarefaAberta-titulo'>Habilidades</h2>
                <div className='tarefaAberta-habilidades'>
                    {tarefaInfo.habilidades.map((item, idx) => (
                        <h3 className='tarefaAberta-habilidade'>{item}</h3>
                    ))}
                </div>
            </section>

            <section className="tarefaAberta-secao2">
                <h2 className='tarefaAberta-titulo tarefaAberta-titulo'>{tarefaInfo.titulo}</h2>
                <h3 className='tarefaAberta-empresa tarefaAberta-texto'>{empresaInfo.nome}</h3>
                <h3 className='tarefaAberta-tituloSobre tarefaAberta-titulo tarefaAberta-texto'>Sobre a Tarefa</h3>
                <p className='tarefaAberta-sobreTarefa tarefaAberta-texto'>{tarefaInfo.sobre}</p>
                <div className='tarefaAberta-info'>
                    <TarefaInfo titulo="Prazo:" conteudo={prazo}/>
                    <TarefaInfo titulo="Quantidade:" conteudo={quantidade}/>
                    { statusBool && <TarefaInfo titulo="Status:" conteudo={strFiltro}/> }
                </div>
                <Link to={linkTarefa} className='tarefaAberta-btn'>Ver Mais</Link>
            </section>
        </div>
    )
}