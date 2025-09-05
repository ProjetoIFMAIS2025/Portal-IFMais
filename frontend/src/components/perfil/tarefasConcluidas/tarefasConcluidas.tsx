import './TarefasConcluidas.scss'

export default function TarefasConcluidas(){
    return (
        <section className="perfil-sessao perfil-conteudo">
            <div className="perfil-tarefa">
                <h2 className="perfil-tarefa-nomeEmpresa my-2">The Feitos</h2>

                <div className="perfil-tarefa-sobreTarefa my-2">
                    <h4 className="tarefa-sobre-titulo fw-bold">Sobre a Tarefa</h4>
                    <p className="tarefa-sobre-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit.</p>
                </div>

                <div className="perfil-tarefa-Info my-2">
                    <h4 className="tarefa-info-titulo fw-bold">Informações</h4>
                    <p className="tarefa-info-prazo my-1"><span className="fw-bold">Prazo: </span> xx/06/2025</p>
                    <p className="tarefa-info-pagamento my-1"><span className="fw-bold">Pagamento: </span>R$ 100,00</p>
                    <p className="tarefa-info-entrega my-1"><span className="fw-bold">Forma de Entrega: </span> Plataforma</p>
                </div>
            </div>
        </section>
    )
}