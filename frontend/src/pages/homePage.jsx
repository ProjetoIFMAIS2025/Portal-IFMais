import "bootstrap-icons/font/bootstrap-icons.css";

import Cabecalho from '../components/cabecalho/cabecalho';
import Interessado from '../components/Interessados/Interessados.jsx'

import './homePage.scss'

export default function HomePage(){

    const HabilidadesAlunoTeste = [
        "Design Gráfico",
        "Programação Web",
        "Canva"
    ]

    const AlunoTeste = {
        nome: "Jonathan da Silva",
        area: "Programação Web",
        instituicao: "IFPR, Campus Telêmaco Borba",
        habilidades: HabilidadesAlunoTeste,
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. ",
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