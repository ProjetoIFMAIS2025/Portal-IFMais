import "bootstrap-icons/font/bootstrap-icons.css";

import Cabecalho from '../components/cabecalho/cabecalho';
import Interessado from '../components/Tarefa/Interessados.jsx'

import './homePage.scss'

export default function HomePage(){

    const HabilidadesAlunoTeste = [
        "Design Gráfico",
        "Programação Web",
        "Canva"
    ]

    const Formacao1 = {
        nome: "Informática para Internet",
        instituicao: "IFPR, Campus Telêmaco Borba",
        conclusao: 2023
    }

    const Formacao2 = {
        nome: "Análise e Desenvolvimento de Sistemas",
        instituicao: "IFPR, Campus Telêmaco Borba",
        conclusao: 2026
    }

    const Formacoes = [Formacao1, Formacao2]

    const AlunoTeste = {
        nome: "Jonathan da Silva",
        area: "Programação Web",
        instituicao: "IFPR, Campus Telêmaco Borba",
        habilidades: HabilidadesAlunoTeste,
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. ",
        formacoes: Formacoes
    }

    return(
        <main>
            <Cabecalho/>

            <h1 className="home_titulo">Oportunidades</h1>

            <section className="home_tarefas">
                <Interessado dadosAluno={AlunoTeste}/>
            </section>
        </main>
    )
}