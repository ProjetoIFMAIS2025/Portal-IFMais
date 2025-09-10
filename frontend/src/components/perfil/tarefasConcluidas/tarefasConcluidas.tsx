import TarefasConcluidaItem from './tarefaConcluidaItem'

import './TarefasConcluidas.scss'

export default function TarefasConcluidas(){

    const tarefaTeste = {
        empresa: "The Feitos",
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit.",
        prazo: "xx/06/2025",
        temPagamento: true,
        pagamento: "R$ 100,00",
        entrega: "Plataforma"
    }

    const tarefaTeste2 = {
        empresa: "Fachada LTDA",
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit.",
        prazo: "xx/01/2026",
        temPagamento: false,
        entrega: "Presencial"
    }

    return (
        <section className="perfil-sessao perfil-conteudo">
            
            <TarefasConcluidaItem tarefa={tarefaTeste}/>
            <TarefasConcluidaItem tarefa={tarefaTeste2}/>

        </section>
    )
}