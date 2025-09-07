import './tarefaAberta.scss'
import PHIcon from '../../assets/ph.jpg'
import TarefaInfo from './tarefaInfo'

export default function TarefaAberta({ filtro, filtroTarefa, statusBool }){


    return (
        <div className={ filtro == filtroTarefa ? "tarefaAberta" : "d-none"}>
            <section className="tarefaAberta-secao1">
                <img src={PHIcon} alt="" width="100em"/>
                <h2 className='tarefaAberta-habilidadesTitulo tarefaAberta-titulo'>Habilidades</h2>
                <div className='tarefaAberta-habilidades'>
                    <h3 className='tarefaAberta-habilidade'>Design Gráfico</h3>
                    <h3 className='tarefaAberta-habilidade'>Canva</h3>
                    <h3 className='tarefaAberta-habilidade'>Programação Web</h3>
                </div>
            </section>

            <section className="tarefaAberta-secao2">
                <h2 className='tarefaAberta-titulo tarefaAberta-titulo'>Título da Tarefa</h2>
                <h3 className='tarefaAberta-empresa tarefaAberta-texto'>Nome da empresa</h3>
                <h3 className='tarefaAberta-tituloSobre tarefaAberta-titulo tarefaAberta-texto'>Sobre a Tarefa</h3>
                <p className='tarefaAberta-sobreTarefa tarefaAberta-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. </p>
                <div className='tarefaAberta-info'>
                    <TarefaInfo titulo="Prazo:" conteudo="xx/05/2025 até xx/06/2025"/>
                    <TarefaInfo titulo="Quantidade:" conteudo="R$ 100,00"/>
                    { statusBool && <TarefaInfo titulo="Status:" conteudo="Em andamento"/> }
                </div>
                <button className='tarefaAberta-btn'>Ver Mais</button>
            </section>
        </div>
    )
}