export default function TarefasConcluidaItem({tarefa}) {
    return (
        <div className="perfil-tarefa">
            <h2 className="perfil-tarefa-nomeEmpresa my-2">{tarefa.empresa}</h2>

            <div className="perfil-tarefa-sobreTarefa my-2">
                <h4 className="tarefa-sobre-titulo fw-bold">Sobre a Tarefa</h4>
                <p className="tarefa-sobre-texto">{tarefa.sobre}</p>
            </div>

            <div className="perfil-tarefa-Info my-2">
                <h4 className="tarefa-info-titulo fw-bold">Informações</h4>
                <p className="tarefa-info-prazo my-1"><span className="fw-bold">Prazo: </span> {tarefa.prazo}</p>
                <p className="tarefa-info-pagamento my-1"><span className="fw-bold">Pagamento: </span>{tarefa.temPagamento ? tarefa.pagamento : "Não remunerado"}</p>
                <p className="tarefa-info-entrega my-1"><span className="fw-bold">Forma de Entrega: </span> {tarefa.entrega}</p>
            </div>
        </div>
    )
}